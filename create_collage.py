from PIL import Image, ImageOps

image_paths = [
    "public/images/extracted/finance_page5_5.jpeg",
    "public/images/extracted/finance_page5_6.jpeg",
    "public/images/extracted/finance_page5_8.jpeg"
]

target_width = 1200
target_height = 675
section_width = target_width // 3

collage = Image.new('RGB', (target_width, target_height))

for i, path in enumerate(image_paths):
    img = Image.open(path)
    # Resize and crop to fill the section_width x target_height area
    img_cropped = ImageOps.fit(img, (section_width, target_height), method=Image.Resampling.LANCZOS)
    collage.paste(img_cropped, (i * section_width, 0))

collage.save("public/images/extracted/finance_collage.jpg")
print("New filled collage created.")
