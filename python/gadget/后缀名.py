# 获取文件名的后缀名
def get_suffix(filename, has_dot=False):
    pos = filename.rfind('.')
    if 0 < pos < len(filename) - 1:
        index = pos if has_dot else pos + 1
        return filename[index:]
    else:
        return ''


print(get_suffix('https://github.com/xx.md'))
