# tiktok_scraper.py
import time
import random
from selenium.webdriver import Firefox
from selenium.webdriver.firefox.service import Service
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.firefox import GeckoDriverManager
import re

def extract_video_id(url):
    """Extrae el ID del video de una URL de TikTok."""
    pattern = r'/video/(\d+)'
    match = re.search(pattern, url)
    return match.group(1) if match else None

def scrape_tiktok(account_username ,max_videos):
    # Configuración del servicio de Firefox con opciones anti-detección
    service = Service(GeckoDriverManager().install())
    options = Options()
    
    # Configuraciones adicionales para evitar detección
    options.add_argument('--disable-blink-features=AutomationControlled')
    options.add_argument('--disable-infobars')
    options.add_argument('--window-size=1920,1080')
    options.add_argument('--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36')
    
    driver = Firefox(service=service, options=options)
    video_ids = []
        
    try:
        print("Iniciando navegador...")
        # Abrir TikTok con delay aleatorio
        account_url = f"https://www.tiktok.com/@{account_username}"
        driver.get(account_url)
        time.sleep(random.uniform(5, 10))
        
        print("Esperando que la página cargue...")
        
        # Aceptar cookies si aparece el mensaje (con espera explícita)
        try:
            cookie_button = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.XPATH, "//button[contains(text(), 'Aceptar todo')]"))
            )
            time.sleep(random.uniform(1, 3))
            cookie_button.click()
            print("Cookies aceptadas")
        except Exception as e:
            print("No se encontró el botón de cookies o ya están aceptadas")
        
        # Intentar diferentes selectores para encontrar videos
        selectors = [
            "//a[contains(@href, '/video/')]",
            "//div[contains(@class, 'video-feed-item')]//a",
            "//div[contains(@class, 'tiktok-x6y88p-DivItemContainer')]//a",
            "//div[contains(@class, 'tiktok-1qb12g8-DivThreeColumnContainer')]//a"
        ]
        
        video_ids = []
        
        for selector in selectors:
            print(f"Probando selector: {selector}")
            try:
                # Esperar explícitamente por los elementos
                video_elements = WebDriverWait(driver, 10).until(
                    EC.presence_of_all_elements_located((By.XPATH, selector))
                )
                
                print(f"Encontrados {len(video_elements)} elementos con el selector actual")
                
                for video in video_elements:
                    try:
                        # Obtener href con espera
                        video_link = video.get_attribute("href")
                        if video_link:
                            video_id = extract_video_id(video_link)
                            if video_id and video_id not in video_ids:
                                video_ids.append(video_id)
                                print(f"Video ID encontrado: {video_id}")
                                
                                if len(video_ids) >= max_videos:
                                    return video_ids
                                    
                    except Exception as e:
                        print(f"Error al procesar video individual: {str(e)}")
                        continue
                
                if video_ids:
                    break  # Si encontramos videos con este selector, no probamos los demás
                    
            except Exception as e:
                print(f"Selector {selector} falló: {str(e)}")
                continue
        
        return video_ids
    
    finally:
        print("Cerrando navegador...")
        driver.quit()

# Configuración
account_username = "ciberpazcolombia" 
max_videos = 10

# Llamada a la función
print("Iniciando búsqueda de videos...")
video_ids = scrape_tiktok(account_username, max_videos)

# Imprimir resumen final
print("\nResumen de IDs de videos encontrados:")
if video_ids:
    for idx, video_id in enumerate(video_ids, start=1):
        print(f"{idx}. {video_id}")
else:
    print("No se encontraron videos. TikTok podría estar bloqueando el acceso.")
