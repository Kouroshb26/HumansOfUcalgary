from instaloader import *
import json


L = Instaloader()
profile = Profile.from_username(L.context, "humansofucalgary")

metaDataJson = []

for post in profile.get_posts():

    if(post.typename == "GraphImage"):
        destination = "./photos/"+ str(post.mediaid)
        L.download_pic(destination, post.url,post.date_utc)
        metaDataJson.append({ "caption" : post.caption , "image": destination+".jpg"})



with open("./media.json", 'w') as outfile:
    json.dump(metaDataJson,outfile)



