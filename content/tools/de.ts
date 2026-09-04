/**
 * German copy for /tools and /tools/<slug>.
 *
 * Register: Sie-form, DACH business tone. Mirror content/tools/en.ts key for
 * key; the shape is enforced by tests/unit/tools.spec.ts.
 */

import type { ToolsContent } from './en'

export const toolsDe: ToolsContent = {
  hub: {
    meta: {
      title: 'Kostenlose Online-Tools — Autofract',
      description: 'Fünf Tools vom Studio Autofract: Verträge auf Fallstricke prüfen, Meetings planen, versteckte Kosten ausrechnen, Behördenbriefe lesen, Fotos restaurieren.',
    },
    kicker: 'Tools',
    h1: 'Kleine Tools, richtig gebaut.',
    lede: 'Das Studio baut große Systeme für Kunden. Das hier sind die kleinen, die wir für uns selbst gebaut haben — und dann verschenkt, weil ihr Betrieb fast nichts kostet.',
    intro: [
      'Jedes Tool hier begann als interner Ärger: ein Vertrag, für den niemand Zeit hatte, ein Meeting, das für irgendjemanden immer um 22:00 Uhr landete, laufende Kosten, die auf keiner Rechnung auftauchten. Wir haben jeweils das kleinste Ding gebaut, das die Frage beantwortet — und es dann behalten.',
      'Keines davon verlangt ein Konto. Drei verkaufen gar nichts; die beiden anderen — What\'s This Letter und Revive — schenken Ihnen einen ersten Durchgang und nehmen danach eine einmalige Zahlung, weil einen Brief gründlich zu lesen oder ein Foto sauber zu restaurieren uns echtes Geld kostet. Sie laufen in Ihrem Browser oder auf unseren Servern, und sie folgen derselben Doktrin wie die Plattformen weiter unten: prüfen, bevor veröffentlicht wird, die Rechenschritte zeigen, niemals einen Fakt erfinden, auf den man nicht zeigen kann.',
    ],
    toolsHeading: 'Kostenlose Tools',
    toolsSub: 'Öffnen, benutzen, Tab schließen. Keine Anmeldung, keine Testphase, keine Werbung.',
    productsHeading: 'Produkte',
    productsSub: 'Größere Systeme, die das Studio entworfen, gebaut hat und bis heute betreibt.',
    faq: {
      h2: 'Häufige Fragen',
      items: [
        {
          q: 'Sind die Tools wirklich kostenlos?',
          a: 'Drei der fünf sind es: kein Konto, keine Testphase, keine Kreditkarte, kein Nutzungslimit, keine Werbung. Zwei erledigen ihre gesamte Arbeit in Ihrem Browser, ihr Betrieb kostet uns also fast nichts; Redline läuft auf unseren Servern, und wir zahlen dafür, weil es uns mehr Aufmerksamkeit bringt als eine Anzeige. What\'s This Letter und Revive sind die Ausnahmen: Referenzseiten und erste Auswertung beziehungsweise die kostenlose Vorschau Ihres ersten Fotos kosten nichts; danach kostet ein Briefpass 5 $ und ein Fotopaket ab 9 €, jeweils eine einmalige Zahlung, weil jeder Durchgang uns echtes Geld kostet.',
        },
        {
          q: 'Muss ich mich registrieren?',
          a: 'Nein. Es gibt nichts zu registrieren und nichts zu installieren. Jedes Tool öffnet sich direkt in einem arbeitsfähigen Zustand, und wo ein Tool einen Stand zu behalten hat, lebt dieser Stand in der URL — den Link kopieren heißt: Arbeit gesichert.',
        },
        {
          q: 'Was passiert mit dem, was ich eingebe?',
          a: 'Overlap und Cost Of schicken Ihre Eingaben nirgendwohin: Board und Beleg stecken in der Adresszeile und werden von Ihrem eigenen Browser berechnet. Redline, What\'s This Letter und Revive müssen das, was Sie hochladen, auf einem Server verarbeiten. Redline bewahrt Ihren Bericht hinter seinem eigenen Link auf; What\'s This Letter löscht den Brief in dem Moment, in dem Ihre Antwort steht — er wird nie gespeichert und nie zum Training verwendet; Revive behält Ihre Fotos bis zu 30 Tage nach dem Kauf, um das Paket und seine Neuberechnungen zu erzeugen, und löscht sie dann — auf Wunsch früher — und verwendet sie nie zum Training. Behandeln Sie alle drei wie jedes Online-Tool und fügen Sie nichts ein, was Sie nicht weitergeben dürfen.',
        },
        {
          q: 'Werde ich getrackt?',
          a: 'Wir zählen Seitenaufrufe mit einer cookiefreien, datenschutzfreundlichen Webanalyse, die keine personenbezogenen Daten speichert und niemandem über Websites hinweg folgt. Das ist alles — keine Werbe-Pixel, keine Session-Aufzeichnung, keine Profile.',
        },
        {
          q: 'Darf ich sie beruflich nutzen?',
          a: 'Ja, auch kommerziell. Teams nutzen den Meeting-Planer für Standups über Kontinente hinweg und die Rechner, um ein Budget zu begründen. Redline ist eine erste Lesung eines Vertrags, What\'s This Letter eine Erklärung eines Behördenbriefs — beides ist keine Rechts- oder Steuerberatung, nehmen Sie das Ergebnis also als Checkliste für Ihre Anwältin oder Ihren Anwalt, nicht als Ersatz dafür.',
        },
        {
          q: 'Warum verschenkt ein Studio Tools?',
          a: 'Zwei ehrliche Gründe. Sie sind Versuchsfeld: Die adversariale Verifikation in Redline und die Daten-Gates zur Build-Zeit in unseren größeren Plattformen sind dieselbe Doktrin in anderem Maßstab. Und sie stellen das Studio besser vor als jede Portfolio-Seite — Sie sehen, wie wir bauen, bevor Sie je mit uns sprechen.',
        },
        {
          q: 'Gibt es die nächstes Jahr noch?',
          a: 'So ist es gedacht. Sie sind konstruktionsbedingt statisch oder fast statisch, und genau deshalb sind sie billig am Leben zu halten: keine Datenbank zu migrieren, kein Abo zu finanzieren, keine Laufzeit zu hüten. Sollte ein Tool doch einmal abgeschaltet werden, sagt seine Seite das — statt still zu verschwinden.',
        },
        {
          q: 'Kann ich ein Tool vorschlagen?',
          a: 'Sehr gern. Die besten Ideen kamen bisher von Leuten, die eine Tabelle beschrieben haben, die sie jeden Monat neu bauen. Schreiben Sie an info@autofract.com und erzählen Sie uns, was Sie immer noch von Hand erledigen.',
        },
      ],
    },
    cta: {
      title: 'Brauchen Sie so etwas in Ihrer Größen­ordnung?',
      body: 'Dasselbe Studio baut die große Version: Agenten, Pipelines und Plattformen, die sich selbst betreiben. Festpreis nach einem 48-Stunden-Scoping.',
      button: 'Studio beauftragen',
    },
  },

  tools: {
    redline: {
      name: 'Redline',
      tagline: 'Das Kleingedruckte, entschlüsselt.',
      category: 'Verträge',
      meta: {
        title: 'Vertrag prüfen: das Kleingedruckte — Redline',
        description: 'Vertrag, Mietvertrag, Kredit oder AGB einfügen und eine sortierte Liste der Fallstricke bekommen — jeder an seiner Klausel verankert und doppelt geprüft.',
      },
      h1: 'Das Klein­gedruckte lesen, schnell.',
      lede: 'Redline liest einen Vertrag so, wie eine misstrauische Anwältin ihn lesen würde: Es sucht die Klauseln, die Sie später Geld kosten, zitiert jede davon wörtlich und erklärt in normaler Sprache, was sie tatsächlich mit Ihnen macht.',
      what: {
        h2: 'Was es tut',
        body: [
          'Sie geben ein Dokument hinein — eingefügten Text, ein PDF mit echter Textebene oder einen öffentlichen Link — und bekommen eine sortierte Liste der Fallstricke zurück. Automatische Verlängerung, aus der Sie nicht rechtzeitig herauskommen. Einseitige Änderungen an Preis oder Bedingungen. Schiedsklauseln und Gerichtsstände, die entscheiden, wo Sie streiten müssten. Freistellungen, die Ihnen fremde Haftung übertragen. Kautionsabzüge, Verzugsgebühren, Fristen, gemessen in der jeweils unbequemsten Einheit.',
          'Jeder Fund ist an der wörtlichen Klausel verankert, aus der er stammt — mit den Zeichen des Dokuments selbst, keine Umschreibung, keine Rekonstruktion. Sie sehen den Satz, seinen Ort im Dokument, warum er zählt und wie eine normale Fassung dieser Klausel aussieht.',
          'Der Bericht zeigt auch seine eigene Prüfspur: wie viele Kandidaten vorgeschlagen wurden, wie viele blockiert wurden, weil das Zitat im Dokument nicht auffindbar war, wie viele ein zweiter Prüfer widerlegt hat und wie viele in ihrer Schwere herabgestuft wurden. Sie erfahren, was die Maschine falsch gemacht hat, nicht nur, was sie richtig gemacht hat.',
        ],
      },
      why: {
        h2: 'Warum das Klein­gedruckte immer gewinnt',
        body: [
          'Niemand liest AGB, und alle wissen, dass niemand sie liest — genau deshalb stehen die teuren Klauseln dort. Ein Abo-Vertrag wird von Leuten geschrieben, die dafür bezahlt werden, eine Seite davon zu schützen, und Sie begegnen ihm im denkbar schlechtesten Moment: am Ende eines Bewerbungsprozesses, am Einzugstag, eine Stunde vor dem Launch.',
          'Überfliegen hilft nicht, weil die gefährlichen Klauseln nicht gefährlich aussehen. Sie sind grammatisch langweilig, in einem nummerierten Unterabschnitt vergraben und verweisen auf eine Definition vier Seiten früher. Den Schaden richtet „gemäß Ziffer 12.3“ an, nicht die Großbuchstaben.',
          'Bei einem ernsten Vertrag ist eine Anwältin die richtige Antwort, und Redline wird nie etwas anderes behaupten. Aber einen SaaS-Vertrag für 9 € im Monat, eine Fitnessstudio-Mitgliedschaft oder die Wohnung, die Sie bis heute Abend zusagen müssen, schicken Sie nicht in eine Kanzlei. Dort lautet die realistische Alternative zur maschinellen Lesung: gar keine Lesung.',
        ],
      },
      how: {
        h2: 'So funktioniert es',
        steps: [
          {
            h3: 'Es teilt das Dokument entlang seiner eigenen Nummerierung',
            body: 'Bevor irgendetwas analysiert wird, wird der Text entlang der Struktur segmentiert, die das Dokument bereits hat — 4.2, § 7, Artikel 3, Abs. 12. Jeder spätere Fund zeigt deshalb auf eine echte Stelle in einem echten Abschnitt, und genau das macht die Zitate überprüfbar.',
          },
          {
            h3: 'Ein erster Durchgang schlägt Kandidaten gegen eine Fallstrick-Taxonomie vor',
            body: 'Das Modell assoziiert nicht frei über „riskante Formulierungen“. Es arbeitet gegen eine kuratierte Taxonomie jener Fallstricke, die in Verbraucher- und Unternehmensverträgen tatsächlich wiederkehren — jeder mit bekannter Schwere und bekannter Eintrittswahrscheinlichkeit — und schlägt passende Kandidaten vor.',
          },
          {
            h3: 'Ein Zitat-Gate wirft alles raus, was es nicht beweisen kann',
            body: 'Dieser Schritt ist deterministisch, kein Modell: Ein Kandidat überlebt nur, wenn sein Zitat im Quelltext existiert. Danach ersetzen die Zeichen des Dokuments die Modellfassung des Zitats. Ein Fund, der nicht auf einen Satz in Ihrem Dokument zeigen kann, erreicht Sie nie.',
          },
          {
            h3: 'Ein zweiter, unabhängiger Prüfer versucht ihn zu widerlegen',
            body: 'Was das Gate überlebt, geht an einen frischen Durchgang, der dasselbe Dokument mit der gegenteiligen Aufgabe liest: bestätigen, als übertrieben markieren oder rundheraus widerlegen. Unbewiesene Funde fallen weg, übertriebene verlieren an Schwere — der Bericht zeigt beide Zahlen.',
          },
          {
            h3: 'Was übrig bleibt, wird danach sortiert, was es Sie kostet',
            body: 'Die endgültige Reihenfolge verbindet die Schwere des Klauseltyps, die Wahrscheinlichkeit, dass dieser Fallstrick in der Praxis zuschnappt, und die Sicherheit des Prüfers. Sie lesen von oben nach unten und hören auf, wenn Ihnen die Risiken ausgehen — nicht die Geduld.',
          },
        ],
      },
      useCases: {
        h2: 'Wann Sie es laufen lassen',
        items: [
          {
            h3: 'Bevor ein Team ein neues SaaS-Tool ausrollt',
            body: 'Irgendjemand muss die Bedingungen lesen, bevor fünfzig Kolleginnen und Kollegen Firmendaten hineingeben. Vertrag einfügen, und Sie haben Verlängerungsfrist, Daten- und Haftungsklauseln sowie die Formulierungen zur einseitigen Änderung in einem Durchgang — rechtzeitig zur Entscheidung.',
          },
          {
            h3: 'Ein Mietvertrag, der heute beantwortet werden muss',
            body: 'In Mietverträgen verstecken sich Kündigungsfristen, Kautionsabzüge, Instandhaltungspflichten und automatische Verlängerungen. Eine markierte Liste vor der Besichtigung zu lesen ist besser, als die Klausel beim Auszug zu entdecken.',
          },
          {
            h3: 'Freelance- und Auftragsverträge',
            body: 'Zahlungsziele, Rechteübertragung, Abwerbeverbot, unbegrenzte Korrekturschleifen, Freistellung: die Klauseln, die entscheiden, ob ein guter Satz auch ein guter Deal ist. Lassen Sie den Entwurf laufen, bevor Sie nachverhandeln.',
          },
          {
            h3: 'Kredite, Versicherungen und alles mit einem Anhang',
            body: 'Gebühren, die nur bei vorzeitiger Rückzahlung auftauchen, Ausschlüsse, die still genau den Grund entfernen, aus dem Sie die Police abgeschlossen haben, Definitionen, die einen versicherten Fall verengen. Genau diese Klauseln belohnen eine langsame, misstrauische Lesung.',
          },
          {
            h3: 'Eine zweite Meinung zu einem Vertrag, den Sie schon gelesen haben',
            body: 'Sie sind ihn selbst durchgegangen, und er wirkte in Ordnung. Zehn Minuten maschinelle Lesung bestätigen das mit einer Prüfspur — oder zeigen Ihnen den Unterabschnitt, den Sie um drei Uhr nachts überflogen haben.',
          },
        ],
      },
      faq: {
        h2: 'Häufige Fragen',
        items: [
          {
            q: 'Ist das Rechtsberatung?',
            a: 'Nein, und das kann es auch nicht sein. Redline ist eine schnelle, strukturierte erste Lesung, die Ihnen sagt, welche Klauseln einen Menschen verdienen. Bei allem mit echtem Geld oder echter Haftung nehmen Sie die markierte Liste mit in die Kanzlei — Sie holen aus dieser Stunde deutlich mehr heraus.',
          },
          {
            q: 'Was kann ich hineingeben?',
            a: 'Eingefügten Text, ein PDF mit echter Textebene oder eine öffentliche URL, die das Tool abrufen kann. Ein abfotografierter Vertrag enthält keinen lesbaren Text — lassen Sie ihn vorher durch eine Texterkennung laufen oder fügen Sie den Text selbst ein.',
          },
          {
            q: 'Woher weiß ich, dass es keine Klauseln erfindet?',
            a: 'Weil ein Fund ohne wörtliches Zitat gelöscht wird, bevor Sie ihn je sehen. Das Zitat-Gate prüft, ob der zitierte Text wirklich in Ihrem Dokument vorkommt, und setzt danach die Zeichen des Dokuments ein. Diese Prüfung ist gewöhnlicher Code, kein Modell, das über sich selbst urteilt.',
          },
          {
            q: 'Findet es alles?',
            a: 'Nein, und es ist gebaut, um in die sichere Richtung zu scheitern. Zwei Durchgänge und ein Zitat-Gate bedeuten, dass ein echter Fallstrick gelegentlich mangels Beweis wegfällt; die Alternative — eine selbstbewusste Liste von Fallstricken, die in Ihrem Dokument gar nicht stehen — ist weit gefährlicher. Lesen Sie es als sortierte Liste wahrscheinlicher Probleme, nicht als Zertifikat.',
          },
          {
            q: 'Welche Sprachen liest es?',
            a: 'Englische und russische Dokumente, samt der Nummerierungskonventionen beider Sprachen — Abschnitte, Paragrafenzeichen, Artikel. Die Erklärungen kommen in normaler Sprache zurück, nicht in der Juristensprache, die sie beschreiben.',
          },
          {
            q: 'Was passiert mit meinem Dokument?',
            a: 'Es wird verarbeitet, um Ihren Bericht zu erzeugen, der hinter einem eigenen Link liegt. Wir veröffentlichen, verkaufen oder vermarkten nichts von dem, was Sie schicken. Behandeln Sie es wie jedes Online-Tool: Fügen Sie nichts ein, was Sie vertraglich nicht weitergeben dürfen.',
          },
          {
            q: 'Wie lange dauert ein Scan?',
            a: 'Meist ein paar Minuten für einen normalen Vertrag, weil zwei unabhängige Durchgänge das ganze Dokument lesen, statt die erste Seite zu überfliegen. Lange Verträge dauern länger; der Fortschritt ist währenddessen sichtbar.',
          },
          {
            q: 'Ist es kostenlos?',
            a: 'Der Scan ist kostenlos und braucht kein Konto. Er kostet uns pro Dokument echtes Geld, und das ist ein bewusster Tausch: Er ist die überzeugendste Demonstration unserer Bauweise, die wir ins Netz stellen konnten.',
          },
        ],
      },
      cta: {
        title: 'Redline öffnen',
        body: 'Fügen Sie den Vertrag ein, den Sie schon länger lesen wollten. Zwei Minuten, kein Konto — und Sie wissen, welche drei Klauseln zählen.',
        button: 'Vertrag prüfen',
      },
    },

    overlap: {
      name: 'Overlap',
      tagline: 'Die Stunde, die allen passt.',
      category: 'Terminplanung',
      meta: {
        title: 'Meeting-Planer für Zeitzonen — Overlap',
        description: 'Meetings über Zeitzonen planen: mehrere Personen auf ein Board legen, sehen, wann alle wach und im Dienst sind, und das beste Zeitfenster als Link teilen.',
      },
      h1: 'Schluss mit dem Zeitzonen-Rechnen.',
      lede: 'Overlap legt die Tage mehrerer Menschen auf eine Linie, damit Sie sehen — statt rechnen — in welchen Stunden ein Meeting wirklich stattfinden kann und wer dafür bezahlt, wenn keine davon gut ist.',
      what: {
        h2: 'Was es tut',
        body: [
          'Fügen Sie Personen nach Stadt, nach Zeitzone oder über einen reinen UTC-Offset hinzu. Jede wird zu einem waagerechten Band ihres eigenen lokalen Tages: grau, solange sie schläft, bernsteinfarben, solange sie wach, aber außer Dienst ist, grün innerhalb ihrer Arbeitszeit. Die Spalten, in denen sich die Bänder einig sind, sind Ihr Meeting.',
          'Arbeitszeiten gehören zur Person, nicht zum Board. Eine Entwicklerin, die um 11:00 Uhr anfängt, und ein Kunde, der um 16:00 Uhr Schluss macht, behalten beide ihren echten Tag — und die Antwort ändert sich entsprechend.',
          'Darunter werden Ein-Stunden-Fenster sortiert: wie viele Personen im Dienst sind, wie viele nur wach — und, wenn es für niemanden bequem geht, wer sich genau verbiegen muss. Jedes Fenster lässt sich als Kalenderdatei exportieren, und das ganze Board ist ein Link, den Sie verschicken können.',
        ],
      },
      why: {
        h2: 'Warum die üblichen Methoden scheitern',
        body: [
          'Kopfrechnen reicht für zwei Städte, die Sie kennen. Bei vier, die Sie nicht kennen, bricht es zusammen — und in den zwei Wochen im Frühjahr und im Herbst, in denen ein Land die Uhren schon umgestellt hat und das andere noch nicht, fällt es ganz aus.',
          'Eine Weltzeituhr sagt Ihnen, wie spät es irgendwo ist. Sie sagt Ihnen nicht, ob diese Person schläft, beim Abendessen sitzt oder seit drei Stunden im Dienst ist — und genau das war das Einzige, was Sie wissen mussten.',
          'Eine Terminumfrage schiebt die Umrechnung auf alle anderen ab und blockiert die Buchung, bis die langsamste Person antwortet. Das ist genau die Arbeit, die Sie vermeiden wollten, nur umverteilt.',
          'Und die höfliche Variante des Problems ist unsichtbar: 08:00 Uhr in Berlin ist für eine Berlinerin eine gewöhnliche Stunde und für jemanden in Los Angeles eine grausame. Es fällt niemandem auf, bis die Einladung schon verschickt ist.',
        ],
      },
      how: {
        h2: 'So funktioniert es',
        steps: [
          {
            h3: 'Offsets kommen aus dem Browser, nicht aus einer Tabelle',
            body: 'Jede Umrechnung läuft über die Standard-Intl-API und die IANA-Zeitzonendatenbank des Browsers. Es gibt keine Offset-Liste von uns, die veralten könnte: Weiß der Browser, dass ein Land seine Regeln geändert hat, weiß es auch das Board.',
          },
          {
            h3: 'Sommerzeit wird pro Person und pro Datum aufgelöst',
            body: 'Wählen Sie ein Datum Ende März oder Ende Oktober, und das Board selbst ändert seine Länge — 46 Halbstundenspalten an einem Tag, der eine Stunde verliert, 50 an einem Tag, der eine wiederholt — weil jede Zeile aus dem echten Zeitpunkt berechnet wird und nicht aus einem festen Offset.',
          },
          {
            h3: 'Spalten sind eine halbe Stunde breit',
            body: 'Zonen bei :30 und :45 — Indien, Nepal, die Chathaminseln — liegen ehrlich auf der Linie, statt auf volle Stunden gerundet zu werden. Genau diese Rundung erzeugt Meetings, an denen niemand teilnehmen kann.',
          },
          {
            h3: 'Fenster werden bewertet, nicht geraten',
            body: 'Im Dienst zu sein zählt voll, wach in der Nähe der Arbeitszeit zählt teilweise, Schlaf schließt ein Fenster ganz aus. Kandidaten liegen mindestens zwei Stunden auseinander, damit die Vorschläge wirklich verschiedene Optionen sind, und jede Person wird als früh, spät oder außerhalb der Arbeitszeit markiert.',
          },
          {
            h3: 'Der Link ist das Dokument',
            body: 'Personen, Namen, Arbeitszeiten, Datum und Anker stecken alle in der URL. Nichts wird hochgeladen, es gibt kein Konto: Ein Board zu teilen heißt, einen Link zu teilen — und wer ihn öffnet, sieht genau das, was Sie gesehen haben.',
          },
        ],
      },
      useCases: {
        h2: 'Wann Sie es einsetzen',
        items: [
          {
            h3: 'Ein Standup über drei Kontinente',
            body: 'Finden Sie heraus, ob eine Stunde innerhalb aller Arbeitstage überhaupt existiert — und wenn nicht, wer dafür bezahlt, damit die Last rotieren kann, statt still bei der Person zu landen, die am wenigsten klagt.',
          },
          {
            h3: 'Bewerbungs­gespräche im Ausland',
            body: 'Die vorgeschlagene Uhrzeit wird als Signal über das Unternehmen gelesen. Setzen Sie die Stadt der Kandidatin, schauen Sie auf die grünen Spalten und verlangen Sie von niemandem Höchstleistung um 22:00 Uhr an einem Arbeitstag.',
          },
          {
            h3: 'Kunden- und Agenturtermine',
            body: 'Den echten Arbeitstag eines neuen Kunden kennen Sie selten. Einmal einstellen, das Board schicken und aus demselben Bild gegenvorschlagen lassen — statt zwei Tage lang „passt 15 Uhr bei Ihnen?“ hin und her zu schicken.',
          },
          {
            h3: 'Zwei Märkte gleichzeitig bedienen',
            body: 'Ein Auftrag in Berlin, ein zweiter in Singapur. Setzen Sie beide auf das Board, mit Ihrer eigenen Zeile in der Mitte, und sehen Sie, bevor Sie irgendetwas zusagen, wie viele Stunden echter Überschneidung Ihr Tag wirklich enthält.',
          },
          {
            h3: 'Familie in einem anderen Land anrufen',
            body: 'Hier ist das graue Band das nützliche: Es sagt Ihnen, wann ein Anruf jemanden wecken würde, und das bernsteinfarbene sagt, wann jemand wach ist, aber lieber zu Abend essen möchte.',
          },
        ],
      },
      faq: {
        h2: 'Häufige Fragen',
        items: [
          {
            q: 'Brauche ich ein Konto?',
            a: 'Nein. Nichts zum Registrieren, nichts zum Installieren. Seite öffnen, Personen hinzufügen, Link verschicken.',
          },
          {
            q: 'Wo landen meine Daten?',
            a: 'Nirgends. Die Personen, die Sie hinzufügen, stecken in der URL in Ihrer Adresszeile, und jede Berechnung passiert in Ihrem Browser. Gespeicherte Teams nutzen den Speicher Ihres Browsers und bleiben auf diesem Gerät.',
          },
          {
            q: 'Berücksichtigt es die Sommerzeit?',
            a: 'Ja, pro Person und pro Datum. An einem Umstellungstag ist das Board buchstäblich unterschiedlich lang, weil jede Zeile aus dem echten Zeitpunkt abgeleitet wird und nicht aus einem gespeicherten Offset.',
          },
          {
            q: 'Meine Stadt ist nicht in der Liste.',
            a: 'Tippen Sie stattdessen die IANA-Zone ein — Europe/Berlin, Asia/Kolkata, America/Sao_Paulo — oder einen reinen Offset wie UTC+3 oder +05:45. Beides funktioniert immer, auch für Orte, die der Städteindex nicht abdeckt.',
          },
          {
            q: 'Wie viele Personen passen auf ein Board?',
            a: 'Bis zu zwölf. Darüber hinaus sind die Bänder nicht mehr lesbar, und ein Meeting über mehr als zwölf Zeitzonen braucht in der Praxis eine Aufzeichnung statt eines Termins.',
          },
          {
            q: 'Kann jede Person eigene Arbeitszeiten haben?',
            a: 'Ja, auch Zeitfenster, die über Mitternacht laufen — für Nachtschichten. Sie reisen zusammen mit allem anderen im Link mit.',
          },
          {
            q: 'Und wenn es keine Stunde gibt, in der alle wach sind?',
            a: 'Dann sagt es das klar, statt eine grüne Spalte zu erfinden, schlägt die am wenigsten schlechte Stunde vor und nennt, wer dafür schlafen müsste. Eine Ansicht zur fairen Rotation hilft, diese Last über mehrere Wochen im Team zu verteilen.',
          },
          {
            q: 'Funktioniert es auf dem Handy?',
            a: 'Ja. Das Board scrollt in seinem eigenen Rahmen, die Zeilen bleiben auch bei kleiner Breite lesbar, und Hell und Dunkel folgen Ihrer Systemeinstellung.',
          },
        ],
      },
      cta: {
        title: 'Overlap öffnen',
        body: 'Fügen Sie zwei Personen hinzu und die Stadt, die Sie immer falsch rechnen. Fünfzehn Sekunden reichen, um zu sehen, ob es eine gute Stunde gibt.',
        button: 'Meeting-Zeit finden',
      },
    },

    costof: {
      name: 'Cost Of',
      tagline: 'Was Dinge wirklich kosten.',
      category: 'Rechner',
      meta: {
        title: 'Rechner für versteckte Kosten — Cost Of',
        description: 'Kostenlose Rechner, die wiederkehrende Meetings, ungenutzte SaaS-Abos, Kontextwechsel, Fehlbesetzungen oder eine Stunde Ausfall in eine Zahl verwandeln.',
      },
      h1: 'Die Kosten, die niemand in Rechnung stellt.',
      lede: 'Ein wöchentliches Meeting, ein vergessenes Abo, eine Unterbrechung, eine Fehlbesetzung, eine Stunde Ausfall — Cost Of macht aus jedem davon eine einzige Zahl auf einem Beleg, den Sie an die entscheidende Person schicken können.',
      what: {
        h2: 'Was es tut',
        body: [
          'Jeder Rechner fragt nur die wenigen Eingaben ab, die die Zahl wirklich bewegen — wie viele Personen, auf welcher Erfahrungsstufe, wie lange, wie oft — und liefert eine Zahl mit der Rechnung darunter. Keine Dashboards, keine Anmeldung, kein vierzehnstufiger Assistent.',
          'Gehälter müssen Sie nicht raten. Voreinstellungen decken fünfzehn Länder und zehn Rollen zum medianen Bruttogehalt in Landeswährung ab, und jede davon ist überschreibbar: Nutzen Sie die Voreinstellung, um das Gespräch zu beginnen, und ersetzen Sie sie durch Ihre echten Zahlen, bevor Sie damit in ein Meeting gehen.',
          'Das Ergebnis ist ein Beleg. Kopieren Sie ihn als Link, speichern Sie ihn als Bild oder öffnen Sie eine Share-Karte, deren Link-Vorschau die Zahl schon mitbringt — meist ist genau das der Punkt, der im Chat ankommt, ohne dass jemand klicken muss.',
        ],
      },
      why: {
        h2: 'Warum diese Kosten unsichtbar bleiben',
        body: [
          'Für ein wiederkehrendes Meeting schickt niemand eine Rechnung. Es hat keine Position, keine verantwortliche Person und kein Verlängerungsdatum — deshalb taucht es nie in der Budgetrunde auf, die ein Tool für 40 € im Monat streicht, selbst wenn es jedes Jahr zwanzigmal so viel Geld verbraucht.',
          'Die Währung ist Zeit, und Zeit wird in Gehältern gerechnet, die Leute ungern laut aussprechen. Sobald eine Stunde im Meetingraum einen Preis hat, ändert sich das Argument von „dieses Meeting fühlt sich lang an“ zu einer Zahl, auf die die Person mit dem Kalender reagieren kann.',
          'Dieselbe Blindheit gilt für alles mit diffusen Kosten: Abos, die niemand kündigt, weil jedes einzelne klein ist; Unterbrechungen, die weit mehr kosten als die Minute, die sie dauern; eine Einstellung, die nicht funktioniert und still ein Vierteljahr eines Teams verbraucht.',
          'Keine dieser Zahlen muss exakt sein, um nützlich zu sein. Eine Größenordnung mit sichtbaren und veränderbaren Annahmen reicht für eine Entscheidung, die vorher nach Bauchgefühl getroffen wurde.',
        ],
      },
      how: {
        h2: 'So funktioniert es',
        steps: [
          {
            h3: 'Ein reines Rechenmodell pro Rechner',
            body: 'Jeder Rechner ist ein kleines, in sich geschlossenes Modell, in dem Eingaben, Formel und Darstellung getrennt bleiben. Deshalb kann die Rechnung vollständig gezeigt werden — hinter der Zahl steckt nichts außer der Zahl.',
          },
          {
            h3: 'Gehalts-Voreinstellungen, die Sie überstimmen können',
            body: 'Fünfzehn Länder mal zehn Rollen, zum medianen Bruttogehalt in Landeswährung, mit den Quellen direkt neben den Daten. Sie sind ein Startpunkt, keine Autorität: Jedes Feld ist editierbar, und Ihre Änderung reist mit dem Ergebnis mit.',
          },
          {
            h3: 'Der Link ist das Dokument',
            body: 'Die Eingaben stecken in der URL. Nichts wird auf einem Server gespeichert, es gibt kein Konto, und jemandem Ihr Szenario zu schicken heißt, ihm einen Link zu schicken, der genau die Zahlen wieder öffnet, die Sie benutzt haben.',
          },
          {
            h3: 'Ein Beleg, gebaut zum Weiterleiten',
            body: 'Die Ausgabe hat bewusst die Form von etwas, das Sie in einen Thread einfügen können: eine Kernzahl, die Annahmen darunter und eine Share-Karte, deren Vorschau die Zahl zeigt, bevor jemand den Link öffnet.',
          },
        ],
      },
      useCases: {
        h2: 'Wann Sie es einsetzen',
        items: [
          {
            h3: 'Ein wiederkehrendes Meeting streichen oder kürzen',
            body: 'Acht Personen, eine Stunde, jede Woche. Stellen Sie die Jahreszahl neben die Agenda, und das Gespräch darüber, ob daraus ein schriftliches Update werden sollte, wird sehr kurz.',
          },
          {
            h3: 'Der jährliche SaaS-Frühjahrsputz',
            body: 'Jedes Abo wirkt für sich bezahlbar. Zusammengezählt, samt der Lizenzen, die niemand nutzt, ergibt der Stack meist eine Zahl, die genau das finanziert, worum das Team seit einem Jahr bittet.',
          },
          {
            h3: 'Für Fokuszeit argumentieren',
            body: 'Die Kosten einer Unterbrechung sind nicht ihre Dauer. Zeigen Sie, was ein zerstückelter Tag wirklich kostet, und „keine Meetings vor mittags“ klingt nicht mehr nach persönlicher Vorliebe.',
          },
          {
            h3: 'Die nächste Stelle begründen',
            body: 'Rechnen Sie die Kosten einer Fehlbesetzung gegen die Kosten einer offen bleibenden Stelle. Beide Zahlen sind unangenehm, und beide zu haben ist das, was die Entscheidung begründbar macht.',
          },
          {
            h3: 'Arbeit an der Zuverlässigkeit rechtfertigen',
            body: 'Eine Stunde Ausfall hat einen Preis: entgangener Umsatz plus die Menschen, die stehen bleiben. Genau diese Zahl macht aus „wir sollten die Deploy-Pipeline reparieren“ ein finanziertes Arbeitspaket.',
          },
        ],
      },
      faq: {
        h2: 'Häufige Fragen',
        items: [
          {
            q: 'Ist es kostenlos?',
            a: 'Ja — jeder Rechner, kein Konto, keine Limits, keine Werbung. Alles läuft vollständig in Ihrem Browser, und genau deshalb kann es kostenlos bleiben.',
          },
          {
            q: 'Woher kommen die Gehaltszahlen?',
            a: 'Aus veröffentlichten medianen Bruttogehältern je Land und Rolle, in Landeswährung und samt ihren Quellen abgelegt. Sie sind Voreinstellungen für den ersten Durchgang, und jede davon lässt sich durch Ihre echten Zahlen ersetzen.',
          },
          {
            q: 'Werden meine Eingaben irgendwohin geschickt?',
            a: 'Nein. Sie stecken in der URL und werden in Ihrem Browser berechnet. Besuche zählen wir mit einer cookiefreien Webanalyse, die weder personenbezogene Daten noch Eingaben aufzeichnet.',
          },
          {
            q: 'Wie genau ist das?',
            a: 'So genau wie Ihre Eingaben — und die Rechnung wird Ihnen gezeigt, damit Sie das beurteilen können. Es geht nicht um eine Zahl auf vier Stellen genau, sondern um eine begründbare Größenordnung mit offen liegenden Annahmen.',
          },
          {
            q: 'Kann ich ein Ergebnis teilen?',
            a: 'Genau dafür ist es gebaut. Link kopieren, den Beleg als PNG speichern oder die Share-Karte in einen Chat einfügen, in dem die Vorschau die Zahl schon zeigt.',
          },
          {
            q: 'Kann ich meine eigene Währung nutzen?',
            a: 'Ja. Die Länder-Voreinstellungen setzen einen sinnvollen Standard, und Sie können sowohl die Beträge als auch die Währung ändern; der Beleg formatiert sich entsprechend.',
          },
          {
            q: 'Welche Rechner gibt es?',
            a: 'Das wiederkehrende Meeting, den SaaS-Stack, den Kontextwechsel, eine Fehlbesetzung und die Ausfallzeit — die Kosten, die in den Diskussionen am Arbeitsplatz am häufigsten auftauchen.',
          },
          {
            q: 'Kommen noch mehr dazu?',
            a: 'Wenn eine echte Frage immer wiederkehrt, ja. Wenn Sie jedes Quartal dieselbe Tabelle neu bauen, beschreiben Sie sie uns — vielleicht wird sie der nächste Rechner.',
          },
        ],
      },
      cta: {
        title: 'Cost Of öffnen',
        body: 'Nehmen Sie das Meeting, das immer ohne Entscheidung endet. Etwa eine Minute, um herauszufinden, was es pro Jahr kostet.',
        button: 'Rechner starten',
      },
    },

    whatsthisletter: {
      name: 'What\'s This Letter',
      tagline: 'Der Behördenbrief, erklärt.',
      category: 'Briefe',
      meta: {
        title: 'Behördenbrief im Ausland verstehen — What\'s This Letter',
        description: 'Foto oder PDF von Steuerbescheid, Bußgeld oder Gerichtsbrief hochladen und erfahren, was es ist, wer es schickt, welche Frist gilt und was verlangt wird.',
      },
      h1: 'Was in dem Brief steht — in Ihrer Sprache.',
      lede: 'Ein Umschlag vom Finanzamt, vom Gericht oder von einem Inkassobüro, in einer Sprache, die Sie nur halb lesen. What\'s This Letter liest ihn zweimal, sagt Ihnen, was es ist, wer ihn geschickt hat und bis wann Sie handeln müssen, und zitiert die Passagen, auf die es ankommt — übersetzt und am Dokument selbst geprüft.',
      what: {
        h2: 'Was es tut',
        body: [
          'Sie fotografieren den Brief oder laden das PDF hoch. Die Engine liest ihn einmal, um zu erfassen, was er behauptet — Absender, Dokumenttyp, Aktenzeichen, Beträge, Datumsangaben —, und dann ein zweites Mal mit einer anderen Aufgabe: jede dieser Behauptungen am Dokument selbst zu prüfen. Was der zweite Durchgang auf der Seite nicht findet, wird verworfen, bevor Sie es sehen.',
          'Zurück kommt etwas Kurzes in Ihrer Sprache: um welche Art Dokument es sich handelt, welche Behörde oder Firma es geschickt hat, die genaue Frist als Kalenderdatum statt „innerhalb von 14 Tagen nach Zustellung“, die entscheidenden Passagen im Original mit der Übersetzung daneben, und was das Dokument von Ihnen verlangt — konkret, Schritt für Schritt. Das zahlen, bis dann antworten, dort erscheinen, jenes Formular schicken.',
          'Neben der Auswertung gibt es ein Nachschlagewerk: rund neunzig Arten amtlicher Schreiben aus Deutschland, Spanien, den USA, Großbritannien und Russland — was jedes ist, wer es schickt, was üblicherweise folgt. Jede Seite ist gegen die amtliche Quelle geprüft und trägt das Datum der letzten Prüfung, damit Sie sehen, wie frisch sie ist.',
        ],
      },
      why: {
        h2: 'Warum der Brief schlimmer wirkt, als er ist',
        body: [
          'Ein Behördenbrief im Ausland macht zweimal Angst. Einmal, weil er in einer Sprache steht, die Sie mit halber Geschwindigkeit lesen, und noch einmal, weil er in Amtssprache verfasst ist — dem Register, das auch Muttersprachler fürchten und in dem niemand „zahlen Sie bis Freitag“ schreibt, wenn „der in Ziffer 2 genannte Betrag ist innerhalb der in §3 Abs. 1 bestimmten Frist fällig“ zur Verfügung steht.',
          'Eine Übersetzungs-App löst nur die erste Hälfte. Sie liefert Wörter, bei Rechtsbegriffen oft die falschen, und sie weiß nicht, dass eine britische „notice of assessment“ keine Anklage ist, dass ein spanisches „requerimiento“ eine Aufforderung und noch keine Strafe ist, oder welches der vier Daten auf der Seite das entscheidende ist. Am Ende haben Sie einen flüssigen Absatz und denselben Knoten im Magen.',
          'Die Kosten des Nichtwissens sind real und ungleich verteilt. Die meisten solcher Briefe sind Routine und wollen eine kleine, konkrete Sache bis zu einem konkreten Datum; der Ärger beginnt, wenn das Datum verstreicht, weil der Brief ungelesen am Kühlschrank hing. Heute zu wissen, was es ist, macht meist den ganzen Unterschied.',
          'Es gibt eine harte Grenze, und sie bleibt hart. What\'s This Letter erklärt, was ein Dokument sagt und verlangt; es sagt Ihnen nie, was Sie deswegen tun sollen. Ob Sie widersprechen, zahlen, Einspruch einlegen oder eine Anwältin anrufen, ist eine Entscheidung über Ihre Lage — und damit Beratung, die dieses Tool in keiner Sprache gibt.',
        ],
      },
      how: {
        h2: 'So funktioniert es',
        steps: [
          {
            h3: 'Das Dokument wird gelesen, nicht geraten',
            body: 'Ein Foto der zerknitterten Seite oder ein gescanntes PDF wird zuerst zu Text. Stempel, Briefköpfe, Aktenzeichen und Tabellen bleiben an ihrem Platz, denn eine Frist in der Fußzeile oder ein Betrag in einer Tabelle ist genau das, was verloren geht, wenn man eine Seite zu Fließtext glattbügelt.',
          },
          {
            h3: 'Ein erster Durchgang erfasst, was der Brief behauptet',
            body: 'Absender, Dokumenttyp, Aktenzeichen, Beträge, Datumsangaben und Forderungen werden in einen strukturierten Datensatz gezogen, jeder Eintrag gepaart mit der Passage, aus der er stammt. Der Durchgang gleicht mit einem Katalog bekannter Schreiben ab, sodass ein deutscher Steuerbescheid oder ein spanisches requerimiento erkannt wird, statt von Grund auf beschrieben zu werden.',
          },
          {
            h3: 'Ein zweiter Durchgang prüft jede Behauptung am Dokument',
            body: 'Eine frische Lesung desselben Dokuments nimmt den Datensatz und versucht, ihn zu widerlegen: Ist das wirklich die Frist, ist der Betrag die Summe oder eine Zeile davon, verlangt der Brief tatsächlich Zahlung oder teilt er nur eine Entscheidung mit? Eine Behauptung, die der Prüfer nicht am Dokument verankern kann, wird entfernt oder als unsicher markiert — nie stillschweigend behalten.',
          },
          {
            h3: 'Fristen werden zu Kalenderdaten',
            body: 'Briefe rechnen in „Werktagen ab Zustellung“, „einem Monat nach Bekanntgabe“, „der Frist nach §70“. Die Engine rechnet das anhand der auf dem Brief gedruckten Datumsangaben um und sagt Ihnen, was sie angenommen hat — auch dann, wenn die Annahme eine Schätzung ist, damit Sie wissen, welche Zeile Sie nachprüfen sollten.',
          },
          {
            h3: 'Nichts wird aufbewahrt',
            body: 'Der Brief wird verarbeitet, um Ihre Auswertung zu erzeugen, und gelöscht, sobald die Antwort auf Ihrem Bildschirm ist. Er wird nicht gespeichert, hängt an keinem Konto und wird nie zum Training von irgendetwas verwendet.',
          },
        ],
      },
      useCases: {
        h2: 'Wann Sie es brauchen',
        items: [
          {
            h3: 'Ein Brief vom Finanzamt in einem Land, in das Sie gezogen sind',
            body: 'Finanzamt, Agencia Tributaria, HMRC und IRS schreiben alle in einem Register, das niemand sprechen würde. Finden Sie heraus, ob das ein Bescheid, eine Aufforderung zur Vorlage von Unterlagen oder eine Erinnerung ist — und welches Datum darauf das echte ist.',
          },
          {
            h3: 'Ein Bußgeld- oder Strafbescheid',
            body: 'Parken, Nahverkehr, Blitzer, eine versäumte Anmeldefrist. Solche Schreiben haben meist ein kurzes Fenster, in dem Zahlen billiger oder Einspruch noch möglich ist; das Fenster zu kennen ist mehr wert, als den Betrag zu kennen.',
          },
          {
            h3: 'Ein Brief vom Gericht oder vom Inkasso',
            body: 'Der gruseligste Umschlag, und der, bei dem das Datum am meisten zählt. Erfahren Sie, ob das ein Gerichtsbeschluss, ein Mahnbescheid, dem Sie widersprechen können, oder eine Inkassoforderung ist — und was laut Dokument als Nächstes passiert.',
          },
          {
            h3: 'Post an Angehörige, die die Sprache nicht lesen',
            body: 'Eltern, die zu Ihnen ins Ausland gezogen sind, ein Partner, der die Sprache noch lernt. Lesen Sie es in einer Minute für sie, in einer Sprache, die Sie beide teilen, und entscheiden Sie dann gemeinsam, was damit geschieht.',
          },
          {
            h3: 'Nachschlagen, was eine Art Schreiben überhaupt ist, bevor eines kommt',
            body: 'Die Referenzseiten stehen für sich. Schlagen Sie nach, was ein Bußgeldbescheid oder eine britische Section-8-Notice ist, wer sie schickt und was üblicherweise folgt — mit amtlicher Quelle und dem Datum der letzten Prüfung.',
          },
        ],
      },
      faq: {
        h2: 'Häufige Fragen',
        items: [
          {
            q: 'Ist das Rechts- oder Steuerberatung?',
            a: 'Nein, und das wird es auch nicht. Das Tool erklärt, was ein Dokument sagt, wer es geschickt hat, bis wann es etwas verlangt und was genau. Was Sie deswegen tun sollten — zahlen, widersprechen, Einspruch einlegen, ignorieren, jemanden anrufen — hängt von Ihren Umständen ab und ist genau die Frage, die wir nicht beantworten. Dafür gibt es Anwältinnen, Steuerberater und die kostenlosen Beratungsstellen, die es in den meisten Ländern gibt.',
          },
          {
            q: 'In welchen Sprachen liest und antwortet es?',
            a: 'Der Brief kann in jeder Sprache sein, die das Nachschlagewerk abdeckt; die Antwort kommt auf Englisch, Russisch, Deutsch, Spanisch, Französisch oder Portugiesisch — wählen Sie die, in der Sie denken. Ist sich die Engine bei einer Passage unsicher, sagt sie es, statt es zu überspielen.',
          },
          {
            q: 'Wird mein Brief gespeichert?',
            a: 'Nein. Er wird auf einem Server gelesen, um Ihre Antwort zu erzeugen, und in dem Moment gelöscht, in dem die Antwort existiert. Er wird nicht gesichert, hängt an keinem Konto, wird niemandem im Studio gezeigt und nie zum Training eines Modells verwendet. Wenn Sie den Tab schließen, ist der Brief auf unserer Seite längst weg.',
          },
          {
            q: 'Was kostet es?',
            a: 'Die Referenzseiten sind kostenlos und unbegrenzt, Ihre erste Auswertung ebenfalls. Danach kostet ein Briefpass 5 $ und deckt drei Auswertungen in dreißig Tagen ab — genug für den Brief, die Antwort darauf und das Schreiben, das danach kommt. Jede Auswertung sind zwei vollständige Durchgänge auf unseren Maschinen, weshalb sie nicht auf Dauer kostenlos ist.',
          },
          {
            q: 'Wie zuverlässig ist es?',
            a: 'Jede Behauptung, die Sie sehen, hat eine zweite Lesung überstanden, deren einzige Aufgabe war, sie zu widerlegen; was sich nicht an der Seite verankern ließ, ist gestrichen oder markiert. Das ist deutlich verlässlicher als eine Zusammenfassung in einem Durchgang — und trotzdem nicht unfehlbar: ein unscharfes Foto, eine fehlende zweite Seite oder ein seltener Schreibentyp können Lücken lassen. Wo die Engine bei einem Datum rät, sagt sie es.',
          },
          {
            q: 'Was, wenn die Frist schon abgelaufen ist?',
            a: 'Dann sagt es das klar, mit dem abgeleiteten Datum und dem Weg dorthin, statt es zu verstecken. Was eine versäumte Frist bedeutet und was noch möglich ist, ist eine Frage zu Ihrer Situation — dort endet das Tool und beginnt eine menschliche Beratung.',
          },
          {
            q: 'Welche Länder sind abgedeckt?',
            a: 'Das Nachschlagewerk deckt rund neunzig Arten amtlicher Schreiben aus Deutschland, Spanien, den USA, Großbritannien und Russland ab, jede gegen die Veröffentlichungen der ausstellenden Behörde geprüft und datiert. Die Auswertung funktioniert am besten bei Briefen aus diesen fünf Ländern, weil der Prüfdurchgang dann einen bekannten Typ hat, an dem er sich messen kann.',
          },
        ],
      },
      cta: {
        title: 'What\'s This Letter öffnen',
        body: 'Fotografieren Sie den Umschlag, den Sie seit Tagen liegen lassen. In einer Minute wissen Sie, was es ist und bis wann es eine Antwort braucht.',
        button: 'Brief auswerten',
      },
    },

    revive: {
      name: 'Revive',
      tagline: 'Alte Fotos, zurück.',
      category: 'Fotos',
      meta: {
        title: 'Alte Familienfotos restaurieren und kolorieren — Revive',
        description: 'Alte Familienfotos restauriert, koloriert und geschärft zurückbekommen, Gesichter unverändert, Druckdateien in 300 dpi. Erst die kostenlose Vorschau.',
      },
      h1: 'Die Familien­fotos, restauriert. Die Gesichter, unan­getastet.',
      lede: 'Eine Kiste mit Scans und Handyfotos von Abzügen: geknickt, verblasst, an der Ecke eingerissen. Revive gibt sie repariert, koloriert und scharf zurück, jedes Gesicht genau so, wie es war, dazu Druckdateien in 300 dpi und eine Vorher-nachher-Karte für den Familienchat. Das erste Foto kommt als kostenlose Vorschau zurück, bevor Sie irgendetwas bezahlen.',
      what: {
        h2: 'Was es tut',
        body: [
          'Sie laden zwischen einem und zehn alten Fotos hoch — Flachbettscans oder ein Handyfoto eines Abzugs, unter die Lampe gehalten. Das Rendering-Modell repariert zuerst den physischen Schaden: Kratzer, Risse, Flecken, die Unschärfe eines langsamen Objektivs, das Verblassen, das aus einem Schwarz-Weiß-Abzug einen grauen macht. Dann koloriert es die Szene in natürlichen, gedeckten Tönen statt in den gesättigten, die eine Küche von 1962 wie eine Farbkarte aussehen lassen, und schärft, was Objektiv und Papier damals verloren haben.',
          'Gesichter sind die Bedingung, um die die gesamte Pipeline gebaut ist. Sie werden restauriert, nie neu gezeichnet: keine geglättete Haut, keine umgeformte Kinnlinie, keine Zähne, die nicht da waren. Hatte Ihre Großmutter eine Lücke zwischen den Schneidezähnen, behält sie sie. Der Test, der zählt, ist, ob die Familie die Person auf dem Bildschirm sofort erkennt — und das ist der einzige Test, an dem das Ergebnis gemessen wird.',
          'Jedes Paket kommt als Ordner zurück: die restaurierten Bilder, druckfertige Dateien in 300 dpi (30×40 cm im Paket Familienarchiv, 30×40 und 50×70 cm bei Erbstück) und eine Vorher-nachher-Karte im Format für den Familienchat. Das Familienarchiv enthält zusätzlich ein kurzes Vorher-nachher-Video zu jedem Foto; Erbstück eine vier Sekunden lange Animation eines Bildes Ihrer Wahl — eine leichte Drehung, ein Atemzug, mehr nicht.',
        ],
      },
      why: {
        h2: 'Warum die Preise so sind, wie sie sind',
        body: [
          'Die großen Apps dieser Kategorie sind für Leute gebaut, die jede Woche Fotos restaurieren, und entsprechend bepreist: ein Wochenabo oder ein Jahresplan für Ahnenforschung, verkauft an jemanden, der einmalig acht Fotos zum siebzigsten Geburtstag der Mutter richten will. Die meisten lassen zudem das Rückgaberecht in dem Moment erlöschen, in dem eine Datei heruntergeladen wird — der einzige Weg herauszufinden, ob das Ergebnis taugt, ist also, auf das Recht zu verzichten, das Gegenteil zu sagen.',
          'Liest man, worüber sich Menschen tatsächlich beschweren, geht es nicht um Auflösung oder Farbe. Es geht um Ähnlichkeit. Eine Restaurierung, die einen sauberen, scharfen, gut aussehenden Fremden erzeugt, ist an dem einen Zweck gescheitert, für den sie da war, und kein 8K der Welt entschädigt für einen Großvater, der nicht ganz er selbst ist. Ähnlichkeit ist deshalb das, worauf Revive optimiert ist und worum die Garantie geschrieben wurde.',
          'Die Preisstufen der Platzhirsche stammen zudem aus einer älteren Modellgeneration, als ein gutes Ergebnis eine Warteschlange brauchte und „Premium“ dreißig Minuten statt drei Tage bedeutete. Einzelbild-Modelle rendern heute in Sekunden; die Dreißig-Minuten-Premiumstufe ist eine Fiktion, und Revive verkauft keine. Sie zahlen für das, was im Paket steckt — Auflösung, Druckformate, die Animation —, nicht für das Privileg, nicht warten zu müssen.',
          'Die Doktrin des Studios — prüfen, bevor veröffentlicht wird, die Rechenschritte zeigen — sieht in einem Verbrauchertool etwas anders aus als in einer Datenplattform, ist aber dieselbe Idee. Hier liegt die Prüfung bei Ihnen: eine kostenlose Vorschau Ihres eigenen ersten Fotos mit Wasserzeichen, bevor Geld fließt, ein Neu-Button, der vierzehn Tage lang kostenlos neu rendert, so oft es nötig ist, und ein Erstattungs-Button, der auch dann noch funktioniert, wenn Sie schon alles heruntergeladen haben. Das Produkt wird an der einzigen Instanz gemessen, die zählt: an Ihnen.',
        ],
      },
      how: {
        h2: 'So funktioniert es',
        steps: [
          {
            h3: 'Die Kiste hochladen',
            body: 'Ziehen Sie ein bis zehn Fotos hinein. Scans sind am besten, aber ein Handyfoto eines Abzugs auf dem Tisch funktioniert auch; die Pipeline richtet es aus, beschneidet es und entfernt Reflexe, bevor irgendetwas anderes passiert. Kein Konto und keine E-Mail-Adresse in diesem Schritt.',
          },
          {
            h3: 'Eine kostenlose Vorschau in etwa einer Minute',
            body: 'Das erste Foto wird sofort restauriert und koloriert und Ihnen mit Wasserzeichen neben dem Original gezeigt. Beurteilen Sie die Ähnlichkeit, bevor Sie irgendetwas entscheiden. Sind sie es nicht, schließen Sie den Tab: Es wurde nichts berechnet, und die Fotos werden auf Wunsch entfernt.',
          },
          {
            h3: 'Paket wählen, einmal zahlen',
            body: 'Mini restauriert drei Fotos für 9 €. Familienarchiv restauriert zehn für 19 €, mit 4K-Mastern, Druckdateien für 30×40 cm und dem Reveal-Video. Erbstück, für 39 €, restauriert zehn mit 8K-Mastern, Druckdateien für 30×40 und 50×70 cm und einer vier Sekunden langen Animation eines Bildes Ihrer Wahl. Eine Zahlung über den Zahlungsanbieter — in Euro in Deutschland und Spanien, in US-Dollar in Brasilien — und danach kein Abo, das gekündigt werden müsste.',
          },
          {
            h3: 'Herunterladen, neu rendern oder erstatten lassen',
            body: 'Das Paket wird in wenigen Minuten gerendert und als Ordner heruntergeladen. Jedes Foto trägt vierzehn Tage lang einen Neu-Button: Drücken Sie ihn, versucht es das Rendering-Modell noch einmal, kostenlos, so oft Sie möchten. Sieht es ihnen danach immer noch nicht ähnlich, gibt der Erstattungs-Button den vollen Betrag zurück — nach dem Download, nicht davor.',
          },
        ],
      },
      useCases: {
        h2: 'Wann Sie es brauchen',
        items: [
          {
            h3: 'Ein runder Geburtstag oder ein Hochzeitstag',
            body: 'Zehn Fotos aus dem Hochzeitsalbum, restauriert und in 30×40 cm gedruckt, sind ein Geschenk, das einen Abend Arbeit kostet und die meisten anderen überdauert. Das Reveal-Video geht noch am selben Abend in den Familienchat.',
          },
          {
            h3: 'Muttertag und Vatertag',
            body: 'Das Foto von ihnen als Kind, das seit zwanzig Jahren am Kühlschrank hängt und inzwischen mehr Knick als Bild ist. Restauriert, koloriert, scharf — und immer noch unverkennbar sie.',
          },
          {
            h3: 'Weihnachten und ein voller Tisch',
            body: 'Eine Serie Familienfotos über drei Generationen, gemeinsam restauriert, damit Farbe und Korn zusammenpassen, gedruckt und als eine Wand gerahmt. Die Vorher-nachher-Karte ist das, was nach dem Essen herumgereicht wird.',
          },
          {
            h3: 'Hochzeiten und Geburten',
            body: 'Das Hochzeitsfoto der Großeltern neben dem des neuen Paares; eine Urgroßmutter, koloriert, im ersten Album des Babys. Alte und neue Abzüge, die endlich aussehen, als gehörten sie in dasselbe Buch.',
          },
          {
            h3: 'Eine Trauerfeier',
            body: 'Das Foto für die Feier, vom einzigen Abzug, den irgendjemand hat, mit dem Riss über die Ecke repariert und dem Gesicht genau so, wie alle es in Erinnerung haben. Das ist der Fall, in dem Ähnlichkeit am meisten zählt — und in dem der Neu-Button am häufigsten gedrückt wird.',
          },
        ],
      },
      faq: {
        h2: 'Häufige Fragen',
        items: [
          {
            q: 'Sehen sie danach noch aus wie sie selbst?',
            a: 'Das ist der ganze Sinn des Tools und der ganze Inhalt der Garantie. Gesichter werden repariert, nicht neu gezeichnet: keine Glättung, keine Umformung, kein erfundenes Detail. Sie sehen das erste Foto, bevor Sie zahlen, und können es selbst beurteilen. Sieht ein Foto im Paket der Person nicht ähnlich, drücken Sie auf Neu — kostenlos, so oft es nötig ist, vierzehn Tage lang. Hilft auch das nicht, nehmen Sie die Erstattung.',
          },
          {
            q: 'Was deckt die Erstattung tatsächlich ab?',
            a: 'Den vollen Betrag des Pakets, auch wenn Sie bereits jede Datei heruntergeladen haben. Der Erstattungs-Button funktioniert nach dem Download, weil das der einzige Moment ist, in dem Sie ehrlich sagen können, ob das Ergebnis stimmt. Die meisten Dienste dieser Kategorie tun das Gegenteil und lassen die Erstattung erlöschen, sobald eine Datei ihren Server verlässt.',
          },
          {
            q: 'Gibt es ein Abo?',
            a: 'Nein. Sie zahlen einmal für ein Paket — Mini, Familienarchiv oder Erbstück —, und das ist die ganze Transaktion. Es wird kein Konto angelegt, keine Karte für später gespeichert, und es gibt nichts zu kündigen. Wenn Sie nächstes Jahr eine weitere Kiste Fotos haben, kaufen Sie dann ein weiteres Paket.',
          },
          {
            q: 'Was passiert mit meinen Fotos?',
            a: 'Sie werden verwendet, um Ihr Paket zu erzeugen, und für nichts sonst: nie zum Training eines Modells, nie in einer Gesichtsdatenbank, nie jemandem im Studio gezeigt. Zwei externe Dienste sehen für die Sekunden, die es dauert, eine kleine Kopie — das Rendering-Modell und eine zweite Prüfung, die bestätigt, dass der Upload ein Familienfoto ist. Alles wird dreißig Tage nach dem Kauf gelöscht, oder sofort, wenn Sie darum bitten.',
          },
          {
            q: 'Welche Vorlagen funktionieren?',
            a: 'Flachbettscans in jeder Auflösung, Handyfotos von Abzügen, Fotos von Fotos in einem Album unter Glas. Schwarz-Weiß, Sepia und verblasste Farbe werden alle koloriert; Abzüge, die bereits in Farbe sind, werden restauriert und korrigiert, ohne neu eingefärbt zu werden. Sehr kleine oder sehr unscharfe Vorlagen lassen sich weniger gut restaurieren, und die Vorschau zeigt Ihnen das, bevor Sie zahlen.',
          },
          {
            q: 'Welche Sprachen und Währungen?',
            a: 'Revive gibt es auf Englisch, brasilianischem Portugiesisch, Spanisch und Deutsch; wer diese Seite auf Russisch oder Französisch liest, wird zur englischen Version geleitet. Die Preise stehen in Euro in Deutschland und Spanien und in US-Dollar in Brasilien, und der Zahlungsanbieter bedient die üblichen Zahlungsarten des jeweiligen Landes. Druckdateien sind in Zentimetern bemessen, in 300 dpi.',
          },
        ],
      },
      cta: {
        title: 'Revive öffnen',
        body: 'Laden Sie das eine Foto hoch, das mehr Knick als Bild ist. In einer Minute sehen Sie es restauriert — und entscheiden von dort aus weiter.',
        button: 'Foto restaurieren',
      },
    },
  },

  products: {
    relocating: {
      name: 'Relocating',
      tagline: 'Auswandern, minus Rätselraten.',
      blurb: 'Offene Daten, verwandelt in 33 clientseitige Rechner, programmatische Länder-Korridore und eine moderierte Live-Community — von der eigenen Übersetzungspipeline in 22 Sprachen gespiegelt.',
    },
    frontdesk: {
      name: 'FrontDesk',
      tagline: 'Das Preisregister.',
      blurb: 'Ein öffentliches Register dessen, was Dinge wirklich kosten: jeder Preis mit Quelle und Datum, verteidigt von einem adversarialen Prüfer, mit hash-verketteter Historie, die sich nicht still umschreiben lässt.',
    },
  },
}
