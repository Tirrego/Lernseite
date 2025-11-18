const thema3 = [
  {
    q: "1. Was versteht man unter dem Begriff „Besitz“ – wer ist ein „Besitzer“? (1P)",
    a: "Besitz bedeutet, dass man die tatsächliche Herrschaft über eine Sache oder ein Tier hat.",
  },
  {
    q: "2. Was versteht man unter dem Begriff „Eigentum“ – wer ist ein Eigentümer? (1P)",
    a: "Der Eigentümer hat die rechtliche Herrschaft über eine Sache oder ein Tier.",
  },
  {
    q: "3. Was darf ein Eigentümer in Bezug auf seine Sache? (4P)",
    a: "a) Mit seiner Sache nach Belieben verfahren\nb) Andere von jeder Nutzung ausschließen\nc) Nicht gegen geltendes Recht verstoßen\nd) Nicht gegen die Rechte Dritter verstoßen",
  },
  {
    q: "4. Was besagt das Schikaneverbot? (2P)",
    a: "a) Die Ausübung eines Rechts ist unzulässig,\nb) Wenn dadurch nur das Ziel verfolgt wird, einem anderen zu schaden",
  },
  {
    q: "5. Welche Pflichten haben Sie, wenn sie bei einem Spaziergang eine abgenutzte Geldbörse finden, die zwar kein Bargeld, aber Ausweispapiere, Führerschein und einen Fahrzeugschein enthält? (3P)",
    a: "a) Anzeigepflicht (bei Polizei oder Fundbüro, oder direkt beim Verlierer)\nb) Aufbewahrungspflicht (Fundsache darf nicht verändert, beschädigt oder von Dritten entwendet werden können)\nc) Ablieferungspflicht (Auf Anforderung von Polizei oder Fundbüro muss die Fundsache dort abgegeben werden)",
  },
  {
    q: "6. Nennen Sie alle Rechtfertigungsgründe aus dem BGB mit Angabe der jeweiligen Paragrafennummer! (6P)",
    a: "a) §227 BGB Notwehr / Nothilfe\nb) §228 BGB Notstand (defensiver / verteidigender)\nc) §229 BGB Selbsthilfe (allgemeine)\nd) §859 BGB Selbsthilfe des Besitzers\ne) §860 BGB Selbsthilfe des Besitzdieners\nf) §904 BGB Notstand (aggressiver / angreifender)",
  },
  {
    q: "7. Wie unterscheiden sich der „defensive“ / „verteidigende“ Notstand und der „aggressive“ / „angreifende“ Notstand voneinander? (3P)",
    a: "a) Beim defensiven Notstand wird eine Gefahr mit EIGENEN Mitteln abgewehrt\nb) Beim aggressiven Notstand wird eine Gefahr mit FREMDEN Mitteln abgewehrt\nc) Während der defensive Notstand uns vor Schadenersatzforderungen des Besitzers / Eigentümers der Sache, die die Gefahr verursacht, schützt, verbietet der aggressive Notstand lediglich dem Eigentümer des „fremden Mittels“ die Gegenwehr gegen unseren Angriff auf das Verteidigungsmittel",
  },
  {
    q: "8. Wozu dient die Selbsthilfe gem. §229 BGB? (1P)",
    a: "Die Selbsthilfe dient der vorläufigen Sicherung eines einklagbaren Rechtsanspruches",
  },
  {
    q: "9. Was erlaubt uns der aggressive Notstand gem. §904 BGB? (1P)",
    a: "Erlaubt dem Notstandshandelnden den Angriff auf eine unbeteiligte, fremde Sache, von der keine Gefahr ausgeht, um damit die Gefahr, die von einer anderen Sache ausgeht, abzuwehren.",
  },
  {
    q: "10. Muss bei der Notwehrhandlung eine Rechtsgutabwägung vorgenommen werden? (2P)",
    a: "a) Nein, eine Rechtsgutabwägung ist hier nicht nötig!\nb) Es genügt, wenn die Verteidigungshandlung „erforderlich“ ist. Das heißt, sie muss geeignet sein, um den Angriff zu beenden oder abzuschwächen; wenn mehrere Mittel zur Verteidigung vorhanden sind, muss das Mittel verwendet werden, durch das am wenigsten in die Rechte des Angreifers eingegriffen wird (mildestes Mittel)",
  },
  {
    q: "11. Was ist das Ziel einer Notstandshandlung? (1P)",
    a: "Die Abwehr einer Gefahr",
  },
  {
    q: "12. Muss bei einer Handlung nach dem aggressiven Notstand eine Rechtsgutabwägung vorgenommen werden? (2P)",
    a: "a) Ja,\nb) Das Rechtsgut, das beim Notstandshandelnden bedroht ist, muss höherwertig sein als das Rechtsgut (fremde, unbeteiligte Sache), das der Notstandshandelnde angreift",
  },
  {
    q: "13. Welche Rechtsfolgen können sich aus privatrechtlichen Verstößen ergeben? (6P)",
    a: "a) Schadenersatz\nb) Schmerzensgeld\nc) Handlungsansprüche – besonders in Form von:\nd) Wiederherausgabeansprüche\ne) Duldungsansprüche\nf) Unterlassungsansprüche",
  },
  {
    q: "14. Wo liegt der Unterschied zwischen einer Beschädigung und einer Zerstörung einer fremden Sache? (2P)",
    a: "a) Wird eine Sache beschädigt, ist ihr Gebrauchswert eingeschränkt, sie ist aber noch nutzbar.\nb) Wird eine Sache zerstört, so ist ihr Gebrauchswert aufgehoben, sie ist überhaupt nicht mehr zu gebrauchen.",
  },
  {
    q: "15. Kann der Geschädigte anstelle einer Reparatur einen entsprechenden Geldbetrag fordern? (1P)",
    a: "Ja, die Möglichkeit besteht (siehe §249 Abs. 2 BGB)",
  },
  {
    q: "16. Aus welcher Regelung entsteht eine Schadenersatzpflicht, wenn mein privat gehaltener Hund beim Gassigehen vor ein Auto läuft und das Auto durch den Aufprall beschädigt wird? (1P)",
    a: "Die Schadenersatzpflicht ergibt sich hierbei aus der „Haftung des Tierhalters“ (§833 BGB)",
  },
  {
    q: "17. Sie haben Ihrem Bekannten Ihr Fahrrad geliehen und er hat es nicht wie besprochen zurückgebracht. Haben Sie nun einen einklagbaren Anspruch gem. BGB gegen Ihren Bekannten und falls ja, wie nennt man diesen Anspruch genau? (2P)",
    a: "a) Ja, es besteht ein einklagbarer Rechtsanspruch in Form eines\nb) Wiederherausgabeanspruches",
  },
  {
    q: "18. Was ist eine „unerlaubte Handlung“ gem. BGB? (7P)",
    a: "Eine unerlaubte Handlung ist jeder a) widerrechtliche b) Eingriff in ein c) fremdes d) Rechtsgut. Dabei ist es egal, ob die Handlung e) vorsätzlich oder f) fahrlässig erfolgt ist. Wenn durch die Handlung ein Schaden entsteht, ist der Handelnde g) schadenersatzpflichtig.",
  },
  {
    q: "19. Wie kann der Besitzer auf eine verbotene Eigenmacht reagieren? Erklärung und Fachbegriffe! (4P)",
    a: "a) Der Besitzer darf sich verbotener Eigenmacht mit Gewalt erwehren\nb) Auf einen Besitzentzug reagiert er mit Besitzkehr (er kehrt die Besitzverhältnisse wieder um)\nc) Auf eine Besitzstörung reagiert er mit Besitzwehr (er wehrt sich gegen die Störung)\nd) Besitzentzug liegt auch vor, wenn die Sache zwar noch da ist, aber überhaupt nicht mehr genutzt werden kann",
  },
  {
    q: "20. Welche Rechtsgüter können durch eine unerlaubte Handlung beeinträchtigt werden? Nennen Sie 6 Beispiele! (6P)",
    a: "a) Leben\nb) Körperliche Unversehrtheit\nc) Freiheit\nd) Eigentum / Besitz\ne) Ehre\nf) Hausrecht",
  },
  {
    q: "21. Wie kann Besitz „erworben“ werden? Nennen Sie drei Beispiele! (3P)",
    a: "a) Ausleihen\nb) Mieten / Pachten\nc) Finden",
  },
  {
    q: "22. Wie kann Eigentum „erworben“ werden? Nennen Sie drei Möglichkeiten! (3P)",
    a: "a) Kaufen\nb) Erben\nc) Geschenkt bekommen\nd) Fund mit Eigentumsübergang",
  },
  {
    q: "23. Wie wird man ein „Besitzdiener“? (4P)",
    a: "a) Ausübung der tatsächlichen Gewalt über die Sachen eines anderen Besitzers\nb) Besitzdiener ist dem Besitzer gegenüber weisungsgebunden\nc) Besitzdiener steht in einem sozialen Abhängigkeitsverhältnis zum Besitzer (meist Arbeitsvertrag)\nd) Ausübung der tatsächlichen Gewalt über die Sachen des Besitzers erfolgt im Haushalt, Erwerbsgeschäft oder ähnlichem Verhältnis zum Besitzer",
  },
  {
    q: "24. Was versteht man unter „Rechtsfähigkeit“? Beantworten Sie die Frage und zählen Sie auf wer rechtsfähig ist! (4P)",
    a: "a) Rechtsfähig zu sein bedeutet die Möglichkeit Träger von Rechten oder\nb) Pflichten zu sein.\nc) Natürliche Personen werden am Tag ihrer Geburt rechtsfähig\nd) Juristische Personen werden mit Eintragung ins Handels- oder Vereinsregister rechtsfähig",
  },
  {
    q: "25. Können Sie das Eigentum an einer Fundsache erwerben, die Sie auf einem Streifengang in einer Bahnhofshalle gefunden haben? (1P)",
    a: "Nein, Eigentum an Fundsachen in öffentlichen Verkehrsmitteln oder Räumen, die für den öffentlichen Dienst bestimmt sind, wird, wenn der Verlierer nicht gefunden wird, Eigentum des Verkehrsbetriebes.",
  },
  {
    q: "26. Wann ist der Angriff, auf den wir mit Notwehr reagieren, rechtswidrig? (2P)",
    a: "a) Wenn der Angreifer ein Rechtsgut von uns verletzt und\nb) Er keinen Rechtfertigungsgrund für sein Handeln hat.",
  },
  {
    q: "27. Nennen Sie die Voraussetzungen und Handlungsmöglichkeiten im Rahmen der (allgemeinen) Selbsthilfe nach §229 BGB! (6P)",
    a: "a) Es muss ein einklagbarer Rechtsanspruch vorliegen\nb) Hoheitliche Hilfe ist nicht rechtzeitig erreichbar\nc) Es muss sofort gehandelt werden, sonst ist Durchsetzung erschwert oder unmöglich\nd) Es dürfen Sachen weggenommen, beschädigt oder zerstört werden\ne) Der Verpflichtete darf festgenommen werden, wenn Fluchtverdacht besteht\nf) Widerstand des Verpflichteten gegen Maßnahmen, die er dulden muss, darf beseitigt werden",
  },
  {
    q: "28. Was darf ein Besitzer in Fällen verbotener Eigenmacht gem. §859 BGB? (3P)",
    a: "a) Der Besitzer darf sich verbotener Eigenmacht mit Gewalt erwehren\nb) Im Falle eines Besitzentzugs darf er die Sache dem Täter auf frischer Tat wieder abnehmen (Besitzkehr)\nc) Im Falle der Besitzstörung darf er seinen Besitz gegen den Täter mit Gewalt verteidigen (Besitzwehr)",
  },
  {
    q: "29. Wovor kann uns der defensive Notstand gem. §228 BGB schützen? (1P)",
    a: "Vor Schadenersatzforderungen des Besitzers / Eigentümers der Sache oder des Tieres, von dem die Gefahr ausgeht.",
  },
  {
    q: "30. Nennen Sie die Definition der Notwehr! (5P)",
    a: "Notwehr ist die a) Verteidigung, die b) erforderlich ist, um einen c) gegenwärtigen, d) rechtswidrigen Angriff von e) sich selbst oder einem anderen abzuwenden.",
  },
  {
    q: "31. Welche privatrechtlichen Folgen kann es haben, wenn Sie glauben in Notwehr zu handeln, tatsächlich aber gar kein Angriff vorliegt? (3P)",
    a: "a) Schadenersatzforderungen\nb) Schmerzensgeldforderungen\nc) Wiederherausgabeansprüche",
  },
  {
    q: "32. Mit der Anwendung welcher Rechtfertigungsgründe des BGB dürfen wir nicht nur uns selbst helfen, sondern auch beliebigen anderen Personen? (3P)",
    a: "a) Notwehr\nb) Defensiver / verteidigender Notstand\nc) Aggressiver / angreifender Notstand",
  },
  {
    q: "33. Ab welchem Alter ist man in Deutschland grundsätzlich schadenersatzpflichtig? (1P)",
    a: "Ab dem vollendeten siebten Lebensjahr (ab dem 7. Geburtstag)",
  },
  {
    q: "34. Wie wird die Höhe einer Schadenersatzforderung bemessen? (1P)",
    a: "Die Höhe des Schadenersatzes ist so zu bemessen, dass der Zustand wiederhergestellt wird, der bestanden hätte, wenn das schädigende Ereignis nicht eingetreten wäre.",
  },
  {
    q: "35. Können auch fahrlässige Handlungen einen Schadenersatzanspruch begründen? (1P)",
    a: "Ja, im Privatrecht ist es unerheblich, ob der Schaden fahrlässig oder vorsätzlich herbeigeführt wurde.",
  },
  {
    q: "36. Kann sich ein Schadenersatzanspruch auf entgangene Gewinne beziehen? (1P)",
    a: "Ja!",
  },
  {
    q: "37. Sie können regelmäßig abends nicht schlafen, weil der Mieter unter Ihnen ständig Partys feiert. Haben Sie einen einklagbaren Rechtsanspruch darauf, dass Ihr Nachbar und seine Gäste leise sind und wie genau nennt man diesen Anspruch? (2P)",
    a: "a) Ja, die Handlung des Nachbarn ist ein Eingriff in mein Hausrecht.\nb) Es entsteht ein Unterlassungsanspruch gegen den Nachbarn.",
  },
  {
    q: "38. Was ist eine „verbotene Eigenmacht“ gem. BGB? Benennen Sie auch die Fachbegriffe für die beiden Formen der verbotenen Eigenmacht! (5P)",
    a: "a) Verbotene Eigenmacht ist gleichzeitig immer auch eine unerlaubte Handlung, die sich gegen den Besitz eines Anderen richtet\nb) Besitzentzug: Wegnahme von Sachen\nc) Besitzstörung: eingeschränkte Nutzung\n d) Der Besitzer kann sich gegen Besitzentzug mit Besitzkehr wehren\ne) Gegen Besitzstörung mit Besitzwehr wehren",
  },
  {
    q: "39. Welches Rechtsgut wird in Fällen verbotener Eigenmacht beschädigt? (1P)",
    a: "Eigentum / Besitz",
  },
  {
    q: "40. Welche normalerweise unerlaubten Handlungen können durch die Selbsthilfe gem. §229 BGB gerechtfertigt werden? (4P)",
    a: "a) Wegnahme, Beschädigung, Zerstörung von Sachen\nb) Festnahme des Anspruchsgegners\nc) allerdings nur, wenn Fluchtverdacht vorliegt\nd) Beseitigung des Widerstands des Anspruchsgegners gegen Maßnahmen, die er zu dulden hat",
  },
];
