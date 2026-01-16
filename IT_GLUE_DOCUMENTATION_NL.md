# Callto/SIP to Tel Converter - Ondersteunsingsdocumentatie

## Titel en Overzicht

**Extensie**: Callto/SIP to Tel Converter
**Versie**: 1.1
**Besturingssysteem**: Windows
**Browsers**: Microsoft Edge, Google Chrome

### Wat is deze extensie?

De Callto/SIP to Tel Converter is een browser-extensie die automatisch telefoonnummerkoppelingen op websites omzet. Wanneer een website een link met `callto:` of `sip:` protocol gebruikt, converteert deze extensie deze links naar `tel:` links. Dit zorgt ervoor dat gebruikers telefoonnummers kunnen kiezen via hun telefooncentrale (zoals Microsoft Teams, 3CX of andere VoIP-systemen) in plaats van alleen via de browser.

### Voor wie is deze documentatie?

Deze documentatie is bedoeld voor eerste lijns support (helpdesk). Hiermee kunt u gebruikers helpen bij installatie, beheer en veelvoorkomende problemen met de extensie.

---

## Doelgroep en Vereisten

**Dit gidsen is voor**: Eerste lijns support medewerkers
**Kennis vereist**: Basiskennis van browsergebruik
**Bevoegdheden vereist**: Lokale beheerdersrechten (voor initiële installatie)

---

## Veelvoorkomende Problemen en Snelle Oplossingen

### Probleem 1: De extensie werkt niet na installatie
**Symptomen**: Telefoonnummers klikken opent nog steeds de browser-kiezen in plaats van Teams/3CX

**Snelle diagnose**:
1. Controleer of de extensie ingeschakeld is in Edge/Chrome instellingen
2. Vernieuw de website waar u het probeert (F5 of Ctrl+R)
3. Test op een ander website met callto/sip links

**Oplossing**:
1. Open `edge://extensions` (Edge) of `chrome://extensions` (Chrome)
2. Zoek naar "Callto/SIP to Tel Converter"
3. Zorg dat de toggle/schakelaar BLAUW is (ingeschakeld)
4. Vernieuw de website (Ctrl+F5)
5. Test opnieuw

---

### Probleem 2: De extensie werkt op sommige websites niet
**Symptomen**: De extensie werkt op website A maar niet op website B

**Mogelijke oorzaken**:
- Website B maakt dynamisch links aan (AJAX/JavaScript)
- Website B blokkeert extensies
- Website B gebruikt andere link-formaten

**Oplossing**:
1. Controleer of de link werkelijk begint met `callto:` of `sip:`
2. Rechtsklik op de link → "Inspect" (of F12)
3. Zoek naar `href="callto:..."` of `href="sip:..."`
4. Als dit NIET aanwezig is, werkt de extensie niet (dit is een Website-probleem, geen extensie-probleem)
5. Als dit WEL aanwezig is, opnieuw laden van de pagina kan helpen

---

### Probleem 3: Gebruiker krijgt foutmelding "Deze app kan niet worden geopend"
**Symptomen**: Na klikken op een telefoonnummer verschijnt een foutmelding

**Mogelijke oorzaken**:
- Microsoft Teams/3CX is niet geïnstalleerd
- Het standaard telefoonprogramma is niet geconfigureerd
- De link is beschadigd

**Oplossing**:
1. Controleer of Microsoft Teams of 3CX is geïnstalleerd en actief
2. In Teams: Controleer of Teams is ingesteld als standaard VoIP-app
3. Verwijder eventuele spaties of speciale tekens uit het telefoonnummer
4. Test met een ander telefoonnummer

---

### Probleem 4: De extensie verdwijnt na browser herstarten
**Symptomen**: Na sluiten en opnieuw openen van de browser is de extensie weg

**Oorzaak**: Dit gebeurt wanneer de extensie in "Developer Mode" is geladen zonder dit op te slaan in de permanente instellingen

**Oplossing**:
1. Herlaad de extensie opnieuw vanuit het bestand
2. Neem contact op met IT voor permanente installatieoptie
3. In de toekomst zal de extensie beschikbaar zijn via Chrome Web Store

---

### Probleem 5: Gebruiker ziet de extensie niet in de browserlijst
**Symptomen**: Kan "Callto/SIP to Tel Converter" niet vinden in `edge://extensions`

**Mogelijke oorzaken**:
- Extensie is niet correct geladen
- Gebruiker zoekt op verkeerde plek
- Developer Mode is uitgeschakeld

**Oplossing**:
1. Zorg dat Developer Mode is ingeschakeld (zie stap 2 in installatiehandleiding)
2. Controleer het juiste pad: `edge://extensions` (Edge) of `chrome://extensions` (Chrome)
3. Scroll naar beneden - extensie kan onderaan staan
4. Vraag gebruiker om screenshots te maken ter controle

---

## Stap-voor-Stap Installatiehandleiding

### Voor Microsoft Edge

**Stap 1**: Open de Extensions-pagina
- Klik op het menu (drie stippen) rechts bovenin Edge
- Selecteer "Extensies" → "Extensies beheren"
- Of typ direct in de adresbalk: `edge://extensions`

**Stap 2**: Schakel Developer Mode in
- Zoek linksonder op de pagina
- Toggle "Developer-modus" naar AAN (schakelaar wordt blauw)

**Stap 3**: Laad de extensie
- Klik op de knop "Pakket laden" (links bovenin)
- Navigeer naar: `C:\Users\s.lentjes\OneDrive - Xantion ICT\Tools\LinkChangerExtenstion`
- Klik "Map selecteren" of "Selecteren"

**Stap 4**: Bevestig installatie
- Je ziet nu "Callto/SIP to Tel Converter" in de lijst
- De schakelaar is blauw (ingeschakeld)
- Versienummer toont "1.1"

**Stap 5**: Test de extensie
- Open een website met telefoonnummers (bijvoorbeeld een bedrijfswebsite)
- Rechtsklik op een telefoonnummer en kies "Inspect"
- Controleer of `href="tel:+31612345678"` wordt weergegeven (niet `callto:` of `sip:`)
- Probeer het telefoonnummer aan te klikken

---

### Voor Google Chrome

**Stap 1**: Open de Extensions-pagina
- Klik op het menu (drie puntjes) rechts bovenin Chrome
- Selecteer "Meer tools" → "Extensies"
- Of typ direct in de adresbalk: `chrome://extensions`

**Stap 2**: Schakel Developer Mode in
- Zoek rechts bovenin op de pagina
- Toggle "Ontwikkelaars modus" naar AAN (schakelaar wordt blauw)

**Stap 3**: Laad de extensie
- Klik op "Niet-verpakt item laden"
- Navigeer naar: `C:\Users\s.lentjes\OneDrive - Xantion ICT\Tools\LinkChangerExtenstion`
- Selecteer de map en klik "Map selecteren"

**Stap 4**: Bevestig installatie
- Je ziet nu "Callto/SIP to Tel Converter" in de lijst
- De schakelaar is blauw (ingeschakeld)
- Versienummer toont "1.1"

**Stap 5**: Test de extensie
- Open een website met telefoonnummers
- Rechtsklik op een telefoonnummer en kies "Inspecteren"
- Controleer of het `href` begint met `tel:` (niet `callto:` of `sip:`)
- Probeer het telefoonnummer aan te klikken

---

## Geavanceerde Troubleshooting voor Tweede Lijnstechnici

### De extensie debuggen in Developer Tools

**Stap 1**: Open Developer Tools
- Druk op F12 of rechtsklik → "Inspecteren"

**Stap 2**: Ga naar het Console-tabblad
- Zoek naar foutmeldingen die "Callto" of "SIP" bevatten

**Stap 3**: Controleer de pagina-bron
- Klik op het "Elements" of "Inspector"-tabblad
- Zoek naar links met `href^="callto:"` of `href^="sip:"`
- Deze zouden moeten beginnen met `href="tel:"` als de extensie werkt

**Stap 4**: Controleer of MutationObserver werkt
- Klik op Console-tabblad
- Voer in: `document.querySelectorAll('a[href^="callto:"], a[href^="sip:"]').length`
- Dit zou 0 moeten retourneren als de extensie correct werkt

### Content Security Policy (CSP) problemen

Sommige websites hebben strikte CSP-instellingen die extensies kunnen blokkeren.

**Diagnosticering**:
1. Open F12 → Console
2. Zoek naar foutmeldingen met "Content Security Policy"
3. Als aanwezig: dit is een website-beperking, niet een extensie-probleem

**Oplossing**: Neem contact op met IT-beheerder voor website-eigenaar

---

## Veelgestelde Vragen (FAQ)

### V: Werkt deze extensie op mobiele telefoons?
**A**: Nee, deze extensie is alleen voor browsers op computers (Edge en Chrome). Mobiele browsers hebben al native `tel:` ondersteuning.

---

### V: Zal deze extensie mijn browser vertragen?
**A**: Nee. De extensie werkt minimaal (alleen linkconversie) en heeft geen merkbare impact op browserprestaties.

---

### V: Wat gebeurt er met my privacy en gegevens?
**A**: De extensie verwerkt geen gegevens, registreert niets en stuurt niets naar externe servers. Het werkt volledig lokaal in uw browser.

---

### V: Kan ik de extensie op alle websites gebruiken?
**A**: Ja, de extensie werkt op alle websites, behalve als:
- De website de extensie blokkeert
- De website strikte Content Security Policy (CSP) heeft
- De website geen `callto:` of `sip:` links gebruikt

---

### V: Wat als ik per ongeluk een extensie-bestand delete?
**A**: Neem contact op met IT. De extensie kan opnieuw worden geïnstalleerd vanuit het centrale pad.

---

### V: Werkt deze extensie met Microsoft Teams en 3CX?
**A**: Ja! Dit is exact het doel. Nadat links zijn geconverteerd naar `tel:`, openen ze automatisch in:
- Microsoft Teams (als standaard VoIP-app ingesteld)
- 3CX (als standaard VoIP-app ingesteld)
- Andere VoIP-systemen die `tel:` protocol ondersteunen

---

### V: Wat gebeurt er als beide Edge en Chrome op dezelfde computer zijn?
**A**: Beiden kunnen de extensie hebben. Deze werken onafhankelijk van elkaar. Installeer de extensie voor beide browsers als nodig.

---

### V: Kan ik de extensie voor alle gebruikers in mijn organisatie installeren?
**A**: Dit hangt af van uw IT-policies:
- Voor lokale installatie: Elk gebruikersaccount moet de stappen volgen
- Voor centrale implementatie: IT kan een groepsbeleid (GPO) gebruiken als deze later via Web Store beschikbaar is
- Neem contact op met IT voor enterprise-deployment

---

## Escalatieprocedure

### Wanneer NIET naar Tweede Lijn escaleren

Deze problemen kunt u zelf oplossen:
- Extensie niet ingeschakeld (controleer toggle)
- Website niet vernieuwd (Ctrl+F5)
- Verkeerd installatiepad gevolgd (herhaal installatiehandleiding)
- Gebruiker testte op website zonder `callto:`/`sip:` links
- VoIP-app (Teams/3CX) niet ingesteld als standaard

---

### Wanneer WEL naar Tweede Lijn escaleren

Escaleer in deze scenario's:

**Scenario 1**: Extensie crasht browser
- Symptomen: Browser crasht of wordt traag
- Actie: Verwijder extensie, rapporteer bug

**Scenario 2**: VoIP-systeem reageert niet op `tel:` links
- Symptomen: Links werken na conversie, maar Teams/3CX opent niet
- Vereiste info:
  - VoIP-systeem naam en versie
  - Screenshot van Developer Tools console
  - Werkend telefoonnummer dat test werd

**Scenario 3**: Extensie werkt op bepaalde bedrijfswebsites niet
- Symptomen: Alle andere websites werken, maar interne website niet
- Vereiste info:
  - Exacte URL van website
  - Echte link-formaat (screenshot Developer Tools)
  - CSP-foutmeldingen uit console

**Scenario 4**: Installation/Removal Issues
- Symptomen: Kan extensie niet installeren of verwijderen
- Vereiste info:
  - Exacte foutmelding
  - Screenshot van extensiepagina

**Scenario 5**: Gebruiker meldt beveiligingsprobleem
- Symptomen: Verdacht gedrag, onverwachte netwerk-activiteit
- Actie: ONMIDDELLIJK escaleren, verwijder extensie

---

### Escalatie-informatie verzamelen

Voordat u escaleer, verzamel deze informatie:

```
[ ] Gebruikersnaam:
[ ] Computernaam:
[ ] Besturingssysteem Windows versie:
[ ] Browser (Edge/Chrome) versie:
[ ] Extensie versie: 1.1
[ ] Installatiepad gebruikt: C:\Users\s.lentjes\OneDrive - Xantion ICT\Tools\LinkChangerExtenstion
[ ] Wanneer begon het probleem:
[ ] Stappen al ondernomen:
[ ] Foutmeldingen (screenshot):
[ ] VoIP-systeem gebruikt (Teams/3CX/Ander):
```

---

## Contactinformatie en Escalatie

### Eerste Lijn Support (U)

**Uw rol**:
- Begeleiding bij installatie
- Veelvoorkomende problemen oplossen
- Extensiestatus controleren
- Gebruikers informatie geven

---

### Tweede Lijn Support (IT-beheerders)

**Wanneer contact opnemen**:
- Extensie werkt niet na alle probleemoplossing
- VoIP-integratieproblemen
- Beveiligingskwetsbaarheden
- Browser-crashes
- Enterprise-deployment vragen

**Informatie meegeven**: Zie "Escalatie-informatie verzamelen" hierboven

---

### Verdere Bronnen

**Interne locatie**: `C:\Users\s.lentjes\OneDrive - Xantion ICT\Tools\LinkChangerExtenstion`
**Toekomstige beschikbaarheid**:
- Chrome Web Store (eenvoudigere installatie)
- Microsoft Edge Add-ons (eenvoudigere installatie)

---

## Beheer en Onderhoud

### De extensie uitschakelen (zonder verwijdering)

**In Edge**:
1. Open `edge://extensions`
2. Zoek "Callto/SIP to Tel Converter"
3. Klik de blauwe schakelaar naar grijs

**In Chrome**:
1. Open `chrome://extensions`
2. Zoek "Callto/SIP to Tel Converter"
3. Klik de blauwe schakelaar naar grijs

---

### De extensie verwijderen

**In Edge**:
1. Open `edge://extensions`
2. Zoek "Callto/SIP to Tel Converter"
3. Klik "Verwijderen"
4. Bevestig "Verwijderen"

**In Chrome**:
1. Open `chrome://extensions`
2. Zoek "Callto/SIP to Tel Converter"
3. Klik "Verwijderen"
4. Bevestig "Verwijderen"

---

## Technische Details (Voor Tweede Lijn)

### Hoe werkt de extensie?

1. **Initialisering**: De extensie laadt wanneer de browser start
2. **Scanning**: Bij elke pagina-load scant deze naar links met `callto:` en `sip:` protocol
3. **Conversie**: Deze links worden vervangen door `tel:` links
4. **Monitoring**: De extensie monitort dynamisch geladen inhoud (AJAX/SPA's) en converteert ook deze links

### Extensie-bestanden

```
LinkChangerExtenstion/
├── manifest.json          (Configuratie en instellingen)
├── content.js             (Hoofdlogica voor linkconversie)
└── icons/
    ├── icon16.png         (Kleine pictogram)
    ├── icon48.png         (Gemiddeld pictogram)
    └── icon128.png        (Grote pictogram)
```

### Manifest Details

- **API Versie**: Manifest v3 (nieuwste Chrome/Edge standard)
- **Inwerking**: Document End (nadat pagina volledig geladen)
- **Bereik**: Alle websites (`<all_urls>`)
- **Vereenvoudigde permissions**: Geen bijzondere veiligheidsrechten nodig

### Bekende Beperkingen

1. **Dynamische inhoud**: Extensie volgt mutaties in DOM, maar niet alles
2. **PDF's**: Werkt niet in embedded PDF's (browsers blokkeren dit)
3. **Chrome Extensions API**: Werkt alleen in Chrome/Edge, niet in Firefox
4. **CSP-blocking**: Sommige bedrijfssites blokkeren extensies

---

## Bijlage: Troubleshooting Flowchart

```
Gebruiker meldt: "Telefoonnummers werken niet"
│
├─ Extensie ingeschakeld?
│  ├─ Nee → Schakel in (edge://extensions of chrome://extensions)
│  └─ Ja → Volgende
│
├─ Website vernieuwd (F5/Ctrl+F5)?
│  ├─ Nee → Vernieuw pagina
│  └─ Ja → Volgende
│
├─ Link begint werkelijk met callto:/sip:?
│  ├─ Nee → Extensie is niet het probleem (website gebruikt al tel:)
│  └─ Ja → Volgende
│
├─ Teams/3CX ingesteld als standaard VoIP?
│  ├─ Nee → Stel in als standaard
│  └─ Ja → Volgende
│
└─ ESCALEER naar Tweede Lijn (bug in extensie of website CSP blokkade)
```

---

## Versiegeschiedenis

**Versie 1.1** (Huidige)
- Ondersteunt `callto:` en `sip:` protocollen
- Monitort dynamisch toegevoegde inhoud
- Werkt in Edge en Chrome
- Manifest v3 compatibel

**Toekomstige versies**:
- Web Store publicatie
- Geavanceerde configuratieopties
- Andere VoIP-protocollen (indien nodig)

---

## Document-metadata

**Gemaakt**: 2026-01-16
**Versie**: 1.0
**Doelgroep**: Eerste lijn support
**Taal**: Nederlands
**Laatst bijgewerkt**: 2026-01-16

Bijzonderheden voor toekomstige updates: Dit document moet worden bijgewerkt wanneer:
- Extensie naar Web Store gaat
- Nieuwe versies uitgebracht worden
- Bekende bugs of workarounds ontdekt worden
