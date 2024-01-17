import os
import fnmatch

apps = []

for root, dirs, files in os.walk(r"./art"):
    for file in files:
        if file == 'index.md':
            filename = os.path.join(root, file)

            with open(filename) as f_md:
                contents = f_md.read()
                contents = contents.split("---")[2].encode('UTF-8')
                filename = filename.split("/")[2].encode('UTF-8')
                # title = re.search(
                #     '<dc:title rsfieldtitle="Title" rsembeddedequiv="Name" rsfieldref="8" rsfieldtype="0">(.+?)</dc:title>', contents).group(1)
                print(
                    filename + ": function (_) { return html`" + contents + "`},")
                # apps.append(contents)

print apps


# import os
# for dirPath,foldersInDir,fileName in os.walk(path_to_main_folder):
# if fileName is not []:
#     for file in fileName:
#         if file.endswith('y.txt'):
#             loc = os.sep.join([dirPath,file])
#             y_txt = open(loc)
#             y = y_txt.read()
#             print(y)
