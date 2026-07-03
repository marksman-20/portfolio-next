import fitz
import os

pdf_path = "public/assets/BEV.pdf"
out_dir = "public/images/extracted/bev"
os.makedirs(out_dir, exist_ok=True)

doc = fitz.open(pdf_path)
for page_index in range(len(doc)):
    page = doc[page_index]
    image_list = page.get_images()
    for image_index, img in enumerate(image_list, start=1):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        image_filename = f"bev_page{page_index+1}_{image_index}.{image_ext}"
        with open(os.path.join(out_dir, image_filename), "wb") as f:
            f.write(image_bytes)
        print(f"Extracted: {image_filename}")
