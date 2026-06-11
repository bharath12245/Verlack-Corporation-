import os

old_emails = ["partner@verlak.com", "bkc@verlak.com", "delhi@verlak.com", "privacy@verlak.com"]
new_email = "info@verlakcorporation.com"

def process_file(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    modified = False
    for old in old_emails:
        if old in content:
            print(f"Replacing '{old}' with '{new_email}' in {file_path}")
            content = content.replace(old, new_email)
            modified = True
            
    if modified:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)

def walk_dir(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith((".tsx", ".ts", ".css", ".md")):
                process_file(os.path.join(root, file))

if __name__ == "__main__":
    walk_dir("src")
    print("Email replacement complete.")
