from PIL import Image

images = [
    Image.open("public/images/extracted/finance_page5_5.jpeg"),
    Image.open("public/images/extracted/finance_page5_6.jpeg"),
    Image.open("public/images/extracted/finance_page5_8.jpeg")
]

widths, heights = zip(*(i.size for i in images))

total_width = sum(widths)
max_height = max(heights)

new_im = Image.new('RGB', (total_width, max_height))

x_offset = 0
for im in images:
    new_im.paste(im, (x_offset,0))
    x_offset += im.size[0]

new_im.save("public/images/extracted/finance_collage.jpg")
print("Collage created.")
