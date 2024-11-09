import sqlite3




def createTabla():

    conn = sqlite3.connect('electrodomesticos.db')
    cursor = conn.cursor()

    cursor.execute('''
        CREATE TABLE productos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            price FLOAT NOT NULL,
            images TEXT
        )
    ''')
    cursor.executemany("INSERT INTO productos (title, price, images) VALUES (?, ?, ?)", [
        ('colchon holliwod ortopedico  120x190', 890000, 'https://lh3.googleusercontent.com/gg/ACM6BIsdBCuBufPcfRMcCNmvH4ffcsH7Awl1KuDvRdOhUYq8s_2-7iaogSNfm85kKT5jXwOV7eYzJtrXppKJtnjlYZSckiBlyJdgx_U25GdrDYPF7YlT86h2BUluoCTm2GuZ7n_4sm6U8qMfxgg8eyGdpJf-2J7nY-Fzcex1Qh6IbqDwTPo_RvfX'),
        ('protector colchon 120 tela', 750000, 'https://lh3.googleusercontent.com/gg/ACM6BIuIWSYW4J_m3aY_sn08tX0ZA6hIvca-NhjbQrNnLvbX0rBeKxQpTyX0rCgBmOSoMcs_n3B8kJ6KAm-1xvrhXksgOWPisb1Kg3mz4GeY6sNkmRJMITKbSdkVAT1f3HwhV5P7XpYmag97TakA2iWf3QD5-iWv5hMuFeRHvN25lN3cSY3O5YI'),
        ('protector colchon tela sencillo47010', 58000, 'https://lh3.googleusercontent.com/gg/ACM6BIsdWKbujFpMeYxlDB6E-8JqQfF5RInh9gCvY1CDLfAgV67ip7-c05hGkOj7OuM6RIc3Rqi_WuLv6qeqv_HkWmZ-raIbG5Lr6HSpYsJE6KtJJ-cGR6yXPTFAZv_OZWwMJb74ogpgzuiy5QenVLMv_lzqwBDiW__Zn7E2ffxSKWUmlgKohOE'),
        ('protector colchon pastico 120 ref47003', 42000, 'https://lh3.googleusercontent.com/gg/ACM6BIuDs01MMATxx6kVUbrv-oE_tu3Ub204gw60n2_rmBhwLTEcDM9k5oZOEgDqdsmvPxmCMlJB53YgLYKj9SpfEkkY6cIJZ8cgYBqQ90lBXidMMcbS6csNK6wKHDyCrZv-FzCj-hDHr0UNVDuD7Yc8bl8OCU789lQPTeHstzPP_bQk7Ijy7c0'),
        ('iPhone 13', 506000, 'https://co.tiendasishop.com/cdn/shop/files/IMG-4624098_d742ac86-40a2-478f-a926-bb842a2d034c_550x.jpg?v=1723513210'),
        ('colchon 2x2pitot semi ortop', 2200000, 'https://lh3.googleusercontent.com/gg/ACM6BItJIU2DtuvXw5FONIUQDPvUvAcPbgnjKOcvJeIxTUXK9SmQFacxI7LDushhmWlTFPc1RCaxsWLR1E8LZtTckYPNcSVaMNZe1oDBPoqSZHZUJguEsvZi8mFqUc7utvgxV4hJgSDXa2GyoAQk1CT2sOFqf_VRafADG71uE2tRc7FiffEXFGs'),
        ('Mac mini M4 Pro', 120000, 'https://co.tiendasishop.com/cdn/shop/files/IMG-15363028_550x.jpg?v=1730306599'),
        ('cama isla 120 de madera', 660000, 'https://lh3.googleusercontent.com/gg/ACM6BItZ4Jl6lNR6yq-jenXF1m_sXiPwr_A48ljz9A6l5mUks0hrmqebHGUvnruOxMG7U0nNRdvHNbRq8ru1fHuMu7iv3I-9nSV-WevWobia-wnbknqydlK1fGbqECHIoGh2qWAf2kaDdXYO94r2sMlSmJIN1ubUQ3O9N2pyz38P2dUhthEtFeC-'),
        ('cama de madera 160', 720000, 'https://lh3.googleusercontent.com/gg/ACM6BIs0uYvcnCQJyS47sWP118bUdDrwnnDCxVhG44VCdzUu3SiO_NBllJMNoa120C9FyyLkrmIBivA8D4oTKzdMJnPgj_xRYOHlqcbiw8BBQGq5bfGAlFiSBMbaFBeCVGQGt8h3eLecjw0dlOP1rUcpGBDc6q3BDX2YJ3krg4WKNJMaUlNF8n4h'),
        ('colchon yadiana alfa pilow 160*190', 1890000, 'https://lh3.googleusercontent.com/gg/ACM6BItDYqU4HAdhVJUhypbYaocUMDGutz91GkVWlOAwMzgFEWUxJAlWnIHorwC_okCYwNMN1XgbET_Ai93ZPYQBGz-_wZdWcFgltj6tdjyBhJeG_ZNr-4Lu3y5CL3gVkXBsDUTYQUiAlJzxzQKlbIwgUFxQIXSNbB8zpIfXBxtz7V0HMFtNlN8H'),
        ('lampara 3 bombillas', 135000, 'https://example.com/refrigerador.jpg'),
        ('arbol de navidad pino dakota de 180', 175000, 'https://example.com/television.jpg'),
        ('telefono alcatel 217a', 43444, 'https://example.com/refrigerador.jpg'),
        ('televisor lcd sony internet', 1890000, 'https://example.com/television.jpg'),
        ('Soporte Kalley led 32', 76000, 'https://example.com/refrigerador.jpg'),     
        ('porta vajilla c/tapa grande colplas', 127000, 'https://example.com/television.jpg'),
        ('recipiente colplas 60249 20 ltrs con dispensador', 44000, 'https://example.com/refrigerador.jpg'),
        ('plancha a vapor monix', 39000, 'https://example.com/television.jpg'),
        ('horno tostador monix', 113300, 'https://example.com/refrigerador.jpg'),
        ('licuadora monix metalica 3', 152000, 'https://example.com/television.jpg'),
        ('plancha de viaje a vapor monix', 56000, 'https://example.com/refrigerador.jpg'),
        ('cocineta haceb gas 2 ptos', 203000, 'https://example.com/television.jpg'),
        ('aire minisplit 12000btu', 1750000, 'https://example.com/refrigerador.jpg'),
        ('nevera centrales frost 235lt', 1374000, 'https://example.com/television.jpg'),
        ('nevera centrales frost 2pts 303ltc', 1495000, 'https://example.com/refrigerador.jpg'),
        ('horno micro ge', 365000, 'https://example.com/television.jpg'),
        ('horno micro mabe', 286000, 'https://example.com/refrigerador.jpg'),
        ('lavadora centrales semi automatica 13lbs', 690000, 'https://example.com/television.jpg'),
        ('estufa centrales alm con gavinete', 771000, 'https://example.com/refrigerador.jpg'),
        ('nevera n-frost 235lts 2', 1994000, 'https://example.com/television.jpg'),
        ('cocineta haceb 3gas 1 electrico', 328000, 'https://example.com/refrigerador.jpg'),
        ('picatodo pica 123 samuray / imusa', 290000, 'https://example.com/television.jpg'),
        ('parlante 600watios', 395000, 'https://example.com/refrigerador.jpg'),
        ('dvd hynday 5.1', 233000, 'https://example.com/television.jpg'),
        ('parrilla discober', 84000, 'https://example.com/refrigerador.jpg'),
        ('parrilla platino', 80000, 'https://example.com/television.jpg'),
        ('telefono zte516', 49000, 'https://example.com/refrigerador.jpg'),
        ('solteron 3 gavetas', 420000, 'https://example.com/television.jpg'),
        ('practimueble x 3 gde multicolor colplas', 313000, 'https://example.com/refrigerador.jpg'),
        ('telefono alcatel ot 310 mi primer comcel', 67000, 'https://example.com/television.jpg')
    ])
    conn.commit()
    conn.close()
    
createTabla()
