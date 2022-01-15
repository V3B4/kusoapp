import requests
from bs4 import BeautifulSoup
import re
import json

from requests.models import encode_multipart_formdata

def downlaod_sugakiya_menu():
    url = 'http://www.sugakico.co.jp/menu/'
    soup = BeautifulSoup(requests.get(url).content, 'lxml') 
    divs = soup.find_all(class_ = 'corpThumbnailListText')
    menu = []
    for i, div in enumerate(divs):
        title = div.a.text
        price = int(re.search(r'(\d+)(円)', div.text).group(1))        
        if not(title == 'ソフトクリーム'):
            menu.append([title, price])
        if i < 9:
            menu.append([title + '(大盛り)', price + 100])
    menu.append(['ソフトクリーム(レギュラー)', 160])
    menu.append(['ソフトクリーム(ミニ)', 110])
    menu.sort(key=lambda x: x[1])            
    dic = dict(menu)

    for content in dic:
        print(content)

    with open('sugakiya.json', 'w') as f:
        json.dump(dic, f, indent=4)


if __name__ =='__main__':
    downlaod_sugakiya_menu()