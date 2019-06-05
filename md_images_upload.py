import os
import imghdr
import re
import requests
import shutil
import git
import hashlib

## 用户名
user_name = "zhaoolee";
## 仓库名
github_repository = "GraphBed";

## git仓库在本机的位置
git_repository_folder = "/Users/lijianzhao/github/GraphBed"

## 存放图片的git文件夹路径
git_images_folder = "/Users/lijianzhao/github/GraphBed/images"

## 设置忽略目录
ignore_dir_list=[".git"]

# 设置用户代理头
headers = {
    # 设置用户代理头(为狼披上羊皮)
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36",
}


# 根据输入的url输入md5命名
def create_name(src_name):
    src_name = src_name.encode("utf-8")
    s = hashlib.md5()
    s.update(src_name)
    return s.hexdigest()

# 获取当前目录下所有md文件
def get_md_files(md_dir):
    md_files = [];
    for root, dirs, files in sorted(os.walk(md_dir)):
        for file in files:
            # 获取.md结尾的文件
            if(file.endswith(".md")):
                file_path = os.path.join(root, file)
                print(file_path)
                #忽略排除目录
                need_append = 0
                for ignore_dir in ignore_dir_list:
                    if(ignore_dir in file_path.split("/") == True):
                        need_append = 1
                if(need_append == 0):
                    md_files.append(file_path)
    return md_files

# 获取网络图片
def get_http_image(image_url):
    image_info = {"image_url": "", "new_image_url": ""}
    file_uuid_name = create_name(image_url)
    image_data = requests.get(image_url, headers=headers).content
    # 创建临时文件
    tmp_new_image_path_and_name = os.path.join(git_images_folder, file_uuid_name)
    with open(tmp_new_image_path_and_name, "wb+") as f:
        f.write(image_data)
    img_type = imghdr.what(tmp_new_image_path_and_name)
    if(img_type == None):
        img_type = ""
    else:
        img_type = "."+img_type
    # 生成新的名字加后缀
    new_image_path_and_name = tmp_new_image_path_and_name+img_type
    # 重命名图片
    os.rename(tmp_new_image_path_and_name, new_image_path_and_name)

    new_image_url = "https://raw.githubusercontent.com/"+ user_name + "/" +github_repository+"/master/"+git_images_folder.split("/")[-1]+"/"+new_image_path_and_name.split("/")[-1]
    image_info = {
        "image_url": image_url,
        "new_image_url": new_image_url
    }
    print(image_info)

    return image_info


# 获取本地图片
def get_local_image(image_url):
    image_info = {"image_url": "", "new_image_url": ""}
    try:
        # 创建文件名
        file_uuid_name = create_name(image_url)
        # 获取图片类型
        img_type = image_url.split(".")[-1]
        # 新的图片名和文件后缀
        image_name = file_uuid_name+"."+img_type
        # 新的图片路径和名字
        new_image_path_and_name = os.path.join(git_images_folder, image_name);
        shutil.copy(image_url, new_image_path_and_name)
        # 生成url
        new_image_url = "https://raw.githubusercontent.com/"+ user_name + "/" +github_repository+"/master/"+git_images_folder.split("/")[-1]+"/"+new_image_path_and_name.split("/")[-1]
        # 图片信息
        image_info = {
            "image_url": image_url,
            "new_image_url": new_image_url
        }
        print(image_info)
        return image_info
    except Exception as e:
        print(e)

    return image_info
    
# 爬取单个md文件内的图片
def get_images_from_md_file(md_file):
    md_content = ""
    image_info_list = []
    with open(md_file, "r+") as f:
        md_content = f.read()
        image_urls = re.findall(r"!\[.*?\]\((.*?)\)", md_content)
        for image_url in image_urls:
            # 处理本地图片
            if(image_url.startswith("http") == False):
                image_info = get_local_image(image_url)
                image_info_list.append(image_info)
            # 处理网络图片
            else:
                # 不爬取svg
                if(image_url.startswith("https://img.shields.io") == False):
                    try:
                        image_info = get_http_image(image_url)
                        image_info_list.append(image_info)
                    except Exception as e:
                        print(image_url, "无法爬取, 跳过!")
                        pass
        for image_info in image_info_list:
            md_content = md_content.replace(image_info["image_url"], image_info["new_image_url"])

        print("替换完成后::", md_content);

        md_content = md_content

    with open(md_file, "w+") as f:
        f.write(md_content)


def git_push_to_origin():
    # 通过git提交到github仓库
    repo = git.Repo(git_repository_folder)
    print("初始化成功", repo)
    index = repo.index
    index.add(["images/"])
    print("add成功")
    index.commit("新增图片1")
    print("commit成功")

    # 获取远程仓库
    remote = repo.remote()
    print("远程仓库", remote);
    remote.push()
    print("push成功")


def main():
    if(os.path.exists(git_images_folder)):
        pass
    else:
        os.mkdir(git_images_folder)
    # 获取本目录下所有md文件
    md_files = get_md_files("./")

    # 将md文件依次爬取
    for md_file in md_files:
      # 爬取单个md文件内的图片
      get_images_from_md_file(md_file)
    
    git_push_to_origin()
    


if __name__ == "__main__":
    main()