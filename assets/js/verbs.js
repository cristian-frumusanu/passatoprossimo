var verbs = [
	{
		verbInf: 'accendere',
		verbAux: 'avere',
		verbPart: 'acceso'
	},
    {
        verbInf: 'accorgersi',
        verbAux: 'essere',
        verbPart: 'accorto',
		isReflexive: true
    },
    {
        verbInf: 'addormentarsi',
        verbAux: 'essere',
        verbPart: 'addormentato',
		isReflexive: true
    },
	{
		verbInf: 'aprire',
		verbAux: 'avere',
		verbPart: 'aperto'
	},
	{
		verbInf: 'chiedere',
		verbAux: 'avere',
		verbPart: 'chiesto'
	},
	{
		verbInf: 'chiudere',
		verbAux: 'avere',
		verbPart: 'chiuso'
	},
	{
		verbInf: 'conoscere',
		verbAux: 'avere',
		verbPart: 'conosciuto'
	},
	{
		verbInf: 'correre',
		verbAux: 'avere/essere',
		verbPart: 'corso'
	},
	{
		verbInf: 'dire',
		verbAux: 'avere',
		verbPart: 'detto'
	},
	{
		verbInf: 'dovere',
		verbAux: 'avere',
		verbPart: 'dovuto'
	},
	{
		verbInf: 'esistere',
		verbAux: 'essere',
		verbPart: 'esistito'
	},
	{
		verbInf: 'essere',
		verbAux: 'essere',
		verbPart: 'stato'
	},
	{
		verbInf: 'fare',
		verbAux: 'avere',
		verbPart: 'fatto'
	},
	{
		verbInf: 'leggere',
		verbAux: 'avere',
		verbPart: 'letto'
	},
	{
		verbInf: 'mettere',
		verbAux: 'avere',
		verbPart: 'messo'
	},
	{
		verbInf: 'mettersi',
		verbAux: 'essere',
		verbPart: 'messo',
		isReflexive: true
	},
	{
		verbInf: 'morire',
		verbAux: 'essere',
		verbPart: 'morto'
	},
	{
		verbInf: 'nascere',
		verbAux: 'essere',
		verbPart: 'nato'
	},
	{
		verbInf: 'perdere',
		verbAux: 'avere',
		verbPart: 'perso'
	},
	{
		verbInf: 'pettinarsi',
		verbAux: 'essere',
		verbPart: 'pettinato',
		isReflexive: true
	},
	{
		verbInf: 'piacere',
		verbAux: 'essere',
		verbPart: 'piaciuto'
	},
	{
		verbInf: 'prendere',
		verbAux: 'avere',
		verbPart: 'preso'
	},
	{
		verbInf: 'radersi',
		verbAux: 'essere',
		verbPart: 'raso',
		isReflexive: true
	},
	{
		verbInf: 'ridere',
		verbAux: 'avere',
		verbPart: 'riso'
	},
	{
		verbInf: 'rimanere',
		verbAux: 'essere',
		verbPart: 'rimasto'
	},
	{
		verbInf: 'rispondere',
		verbAux: 'avere',
		verbPart: 'risposto'
	},
	{
		verbInf: 'scendere',
		verbAux: 'essere',
		verbPart: 'sceso'
	},
	{
		verbInf: 'scrivere',
		verbAux: 'avere',
		verbPart: 'scritto'
	},
	{
		verbInf: 'spegnere',
		verbAux: 'avere',
		verbPart: 'spento'
	},
	{
		verbInf: 'stare',
		verbAux: 'essere',
		verbPart: 'stato'
	},
	{
		verbInf: 'vedere',
		verbAux: 'avere',
		verbPart: 'visto'
	},
	{
		verbInf: 'venire',
		verbAux: 'essere',
		verbPart: 'venuto'
	},
	{
		verbInf: 'vivere',
		verbAux: 'avere/essere',
		verbPart: 'vissuto'
	},
	{
		verbInf: 'abbandonare',
		verbAux: 'avere',
		verbPart: 'abbandonato'
	},
	{
		verbInf: 'abitare',
		verbAux: 'avere',
		verbPart: 'abitato'
	},
	{
		verbInf: 'accompagnare',
		verbAux: 'avere',
		verbPart: 'accompagnato'
	},
	{
		verbInf: 'adorare',
		verbAux: 'avere',
		verbPart: 'adorato'
	},
	{
		verbInf: 'aggiungere',
		verbAux: 'avere',
		verbPart: 'aggiunto'
	},
	{
		verbInf: 'aiutare',
		verbAux: 'avere',
		verbPart: 'aiutato'
	},
    {
        verbInf: 'alzare',
        verbAux: 'avere',
        verbPart: 'alzato'
    },
    {
        verbInf: 'alzarsi',
        verbAux: 'essere',
        verbPart: 'alzato',
		isReflexive: true
    },
	{
		verbInf: 'andare',
		verbAux: 'essere',
		verbPart: 'andato'
	},
	{
		verbInf: 'annoiarsi',
		verbAux: 'essere',
		verbPart: 'annoiato',
		isReflexive: true
	},
	{
		verbInf: 'appartenere',
		verbAux: 'essere',
		verbPart: 'appartenuto'
	},
	{
		verbInf: 'aprire',
		verbAux: 'avere',
		verbPart: 'aperto'
	},
	{
		verbInf: 'ardere',
		verbAux: 'essere',
		verbPart: 'arso'
	},
	{
		verbInf: 'arrabbiarsi',
		verbAux: 'essere',
		verbPart: 'arrabiato',
		isReflexive: true
	},
	{
		verbInf: 'arrivare',
		verbAux: 'essere',
		verbPart: 'arrivato'
	},
	{
		verbInf: 'aspettare',
		verbAux: 'essere/avere',
		verbPart: 'aspettato'
	},
	{
		verbInf: 'assistere',
		verbAux: 'avere',
		verbPart: 'assistito'
	},
	{
		verbInf: 'attendere',
		verbAux: 'avere',
		verbPart: 'atteso'
	},
	{
		verbInf: 'avere',
		verbAux: 'avere',
		verbPart: 'avuto'
	},
	{
		verbInf: 'baciare',
		verbAux: 'avere',
		verbPart: 'baciato'
	},
	{
		verbInf: 'ballare',
		verbAux: 'avere',
		verbPart: 'ballato'
	},
	{
		verbInf: 'bere',
		verbAux: 'avere',
		verbPart: 'bevuto'
	},
	{
		verbInf: 'bloccare',
		verbAux: 'avere',
		verbPart: 'bloccato'
	},
	{
		verbInf: 'bollire',
		verbAux: 'avere',
		verbPart: 'bollito'
	},
	{
		verbInf: 'cadere',
		verbAux: 'essere',
		verbPart: 'caduto'
	},
	{
		verbInf: 'calmarsi',
		verbAux: 'essere',
		verbPart: 'calmato',
		isReflexive: true
	},
	{
		verbInf: 'cambiare',
		verbAux: 'avere',
		verbPart: 'cambiato'
	},
	{
		verbInf: 'camminare',
		verbAux: 'avere',
		verbPart: 'camminato'
	},
	{
		verbInf: 'cancellare',
		verbAux: 'avere',
		verbPart: 'cancelato'
	},
	{
		verbInf: 'cantare',
		verbAux: 'avere',
		verbPart: 'cantato'
	},
	{
		verbInf: 'capire',
		verbAux: 'avere',
		verbPart: 'capito'
	},
	{
		verbInf: 'celebrare',
		verbAux: 'avere',
		verbPart: 'celebrato'
	},
	{
		verbInf: 'cercare',
		verbAux: 'avere',
		verbPart: 'cercato'
	},
	{
		verbInf: 'chiamare',
		verbAux: 'avere',
		verbPart: 'chiamato'
	},
	{
		verbInf: 'chiamarsi',
		verbAux: 'essere',
		verbPart: 'chiamato',
		isReflexive: true
	},
	{
		verbInf: 'cogliere',
		verbAux: 'avere',
		verbPart: 'colto'
	},
	{
		verbInf: 'comandare',
		verbAux: 'avere',
		verbPart: 'comandato'
	},
	{
		verbInf: 'cominciare',
		verbAux: 'avere',
		verbPart: 'cominciato'
	},
	{
		verbInf: 'comprare',
		verbAux: 'avere',
		verbPart: 'comprato'
	},
	{
		verbInf: 'comprendere',
		verbAux: 'avere',
		verbPart: 'compreso'
	},
	{
		verbInf: 'concludere',
		verbAux: 'avere',
		verbPart: 'concluso'
	},
	{
		verbInf: 'convertire',
		verbAux: 'avere',
		verbPart: 'convertito'
	},
	{
		verbInf: 'costruire',
		verbAux: 'avere',
		verbPart: 'costruito'
	},
	{
		verbInf: 'credere',
		verbAux: 'avere',
		verbPart: 'creduto'
	},
	{
		verbInf: 'crescere',
		verbAux: 'avere/essere',
		verbPart: 'cresciuto'
	},
	{
		verbInf: 'cucire',
		verbAux: 'avere',
		verbPart: 'cucito'
	},
	{
		verbInf: 'cuocere',
		verbAux: 'avere',
		verbPart: 'cotto'
	},
	{
		verbInf: 'dare',
		verbAux: 'avere',
		verbPart: 'dato'
	},
	{
		verbInf: 'decidere',
		verbAux: 'avere',
		verbPart: 'deciso'
	},
	{
		verbInf: 'definire',
		verbAux: 'avere',
		verbPart: 'definito'
	},
	{
		verbInf: 'descrivere',
		verbAux: 'avere',
		verbPart: 'descritto'
	},
	{
		verbInf: 'desiderare',
		verbAux: 'avere',
		verbPart: 'desiderato'
	},
	{
		verbInf: 'difendere',
		verbAux: 'avere',
		verbPart: 'difeso'
	},
	{
		verbInf: 'dipendere',
		verbAux: 'essere',
		verbPart: 'dipeso'
	},
	{
		verbInf: 'discendere',
		verbAux: 'essere',
		verbPart: 'disceso'
	},
	{
		verbInf: 'disfare',
		verbAux: 'avere',
		verbPart: 'disfatto'
	},
	{
		verbInf: 'disgustare',
		verbAux: 'avere',
		verbPart: 'disgustato'
	},
	{
		verbInf: 'distinguere',
		verbAux: 'avere',
		verbPart: 'distinto'
	},
	{
		verbInf: 'distruggere',
		verbAux: 'avere',
		verbPart: 'distrutto'
	},
    {
        verbInf: 'divertersi',
        verbAux: 'essere',
        verbPart: 'divertito',
		isReflexive: true
    },
	{
		verbInf: 'divenire',
		verbAux: 'essere',
		verbPart: 'divenuto'
	},
	{
		verbInf: 'dividere',
		verbAux: 'avere',
		verbPart: 'diviso'
	},
	{
		verbInf: 'dolere',
		verbAux: 'essere',
		verbPart: 'doluto'
	},
	{
		verbInf: 'eliminare',
		verbAux: 'avere',
		verbPart: 'eliminato'
	},
	{
		verbInf: 'entrare',
		verbAux: 'essere',
		verbPart: 'entrato'
	},
	{
		verbInf: 'esaminare',
		verbAux: 'avere',
		verbPart: 'esaminato'
	},
	{
		verbInf: 'escludere',
		verbAux: 'avere',
		verbPart: 'escluto'
	},
	{
		verbInf: 'evitare',
		verbAux: 'avere',
		verbPart: 'evitato'
	},
	{
		verbInf: 'facilitare',
		verbAux: 'avere',
		verbPart: 'facilitato'
	},
	{
		verbInf: 'fermarsi',
		verbAux: 'essere',
		verbPart: 'fermato',
		isReflexive: true
	},
	{
		verbInf: 'finire',
		verbAux: 'avere',
		verbPart: 'finito'
	},
	{
		verbInf: 'firmare',
		verbAux: 'avere',
		verbPart: 'firmato'
	},
	{
		verbInf: 'formare',
		verbAux: 'avere',
		verbPart: 'formato'
	},
	{
		verbInf: 'frigere',
		verbAux: 'avere',
		verbPart: 'fritto'
	},
	{
		verbInf: 'fumare',
		verbAux: 'avere',
		verbPart: 'fumato'
	},
	{
		verbInf: 'funzionare',
		verbAux: 'avere',
		verbPart: 'funzionato'
	},
	{
		verbInf: 'generare',
		verbAux: 'avere',
		verbPart: 'generato'
	},
	{
		verbInf: 'giocare',
		verbAux: 'avere',
		verbPart: 'giocato'
	},
	{
		verbInf: 'girare',
		verbAux: 'avere',
		verbPart: 'girato'
	},
	{
		verbInf: 'giurare',
		verbAux: 'avere',
		verbPart: 'giurato'
	},
	{
		verbInf: 'glorificare',
		verbAux: 'avere',
		verbPart: 'glorificato'
	},
	{
		verbInf: 'guardare',
		verbAux: 'avere',
		verbPart: 'guardato'
	},
	{
		verbInf: 'guarire',
		verbAux: 'avere/essere',
		verbPart: 'guarito'
	},
	{
		verbInf: 'guidare',
		verbAux: 'avere',
		verbPart: 'guidato'
	},
	{
		verbInf: 'gustare',
		verbAux: 'avere',
		verbPart: 'gustato'
	},
	{
		verbInf: 'imbucare',
		verbAux: 'avere',
		verbPart: 'imbucato'
	},
	{
		verbInf: 'imparare',
		verbAux: 'avere',
		verbPart: 'imparato'
	},
	{
		verbInf: 'impazzire',
		verbAux: 'avere',
		verbPart: 'impazzito'
	},
	{
		verbInf: 'impiegare',
		verbAux: 'avere',
		verbPart: 'impiegato'
	},
	{
		verbInf: 'implicare',
		verbAux: 'avere',
		verbPart: 'implicato'
	},
	{
		verbInf: 'includere',
		verbAux: 'avere',
		verbPart: 'incluso'
	},
	{
		verbInf: 'incontrare',
		verbAux: 'avere',
		verbPart: 'incontrato'
	},
	{
		verbInf: 'indicare',
		verbAux: 'avere',
		verbPart: 'indicato'
	},
	{
		verbInf: 'informare',
		verbAux: 'avere',
		verbPart: 'informato'
	},
    {
        verbInf: 'innamorarsi',
        verbAux: 'essere',
        verbPart: 'innamorato',
		isReflexive: true
    },
	{
		verbInf: 'insistere',
		verbAux: 'avere',
		verbPart: 'insistito'
	},
	{
		verbInf: 'intendere',
		verbAux: 'avere',
		verbPart: 'inteso'
	},
	{
		verbInf: 'interrompere',
		verbAux: 'avere',
		verbPart: 'interrotto'
	},
	{
		verbInf: 'lasciare',
		verbAux: 'avere',
		verbPart: 'lasciato'
	},
	{
		verbInf: 'laurearsi',
		verbAux: 'essere',
		verbPart: 'laureato',
		isReflexive: true
	},
	{
		verbInf: 'lavare',
		verbAux: 'avere',
		verbPart: 'lavato'
	},
	{
		verbInf: 'lavarsi',
		verbAux: 'essere',
		verbPart: 'lavato',
		isReflexive: true
	},
	{
		verbInf: 'lavorare',
		verbAux: 'avere',
		verbPart: 'lavorato'
	},
	{
		verbInf: 'liberare',
		verbAux: 'avere',
		verbPart: 'liberato'
	},
	{
		verbInf: 'lodare',
		verbAux: 'avere',
		verbPart: 'lodato'
	},
	{
		verbInf: 'mandare',
		verbAux: 'avere',
		verbPart: 'mandato'
	},
	{
		verbInf: 'mangiare',
		verbAux: 'avere',
		verbPart: 'mangiato'
	},
	{
		verbInf: 'mantenere',
		verbAux: 'avere',
		verbPart: 'mantenuto'
	},
	{
		verbInf: 'mentire',
		verbAux: 'avere',
		verbPart: 'mentito'
	},
	{
		verbInf: 'meritare',
		verbAux: 'avere',
		verbPart: 'meritato'
	},
	{
		verbInf: 'migliorare',
		verbAux: 'avere/essere',
		verbPart: 'migliorato'
	},
	{
		verbInf: 'misurare',
		verbAux: 'avere',
		verbPart: 'misurato'
	},
	{
		verbInf: 'modificare',
		verbAux: 'avere',
		verbPart: 'modificato'
	},
	{
		verbInf: 'muovere',
		verbAux: 'avere',
		verbPart: 'mosso'
	},
	{
		verbInf: 'navigare',
		verbAux: 'avere',
		verbPart: 'navigato'
	},
	{
		verbInf: 'nevicare',
		verbAux: 'avere/essere',
		verbPart: 'nevicato'
	},
	{
		verbInf: 'notificare',
		verbAux: 'avere',
		verbPart: 'notificato'
	},
	{
		verbInf: 'obbligare',
		verbAux: 'avere',
		verbPart: 'obbligato'
	},
	{
		verbInf: 'occupare',
		verbAux: 'avere',
		verbPart: 'occupato'
	},
	{
		verbInf: 'offendere',
		verbAux: 'avere',
		verbPart: 'offeso'
	},
	{
		verbInf: 'offrire',
		verbAux: 'avere',
		verbPart: 'offerto'
	},
	{
		verbInf: 'ordinare',
		verbAux: 'avere',
		verbPart: 'ordinato'
	},
	{
		verbInf: 'organizzare',
		verbAux: 'avere',
		verbPart: 'organizzato'
	},
	{
		verbInf: 'ottendere',
		verbAux: 'avere',
		verbPart: 'ottenuto'
	},
	{
		verbInf: 'pagare',
		verbAux: 'avere',
		verbPart: 'pagato'
	},
	{
		verbInf: 'parlare',
		verbAux: 'avere',
		verbPart: 'parlato'
	},
	{
		verbInf: 'partire',
		verbAux: 'essere',
		verbPart: 'partito'
	},
	{
		verbInf: 'passare',
		verbAux: 'avere/essere',
		verbPart: 'passato'
	},
	{
		verbInf: 'pensare',
		verbAux: 'avere',
		verbPart: 'pensato'
	},
	{
		verbInf: 'perdere',
		verbAux: 'avere',
		verbPart: 'perso'
	},
	{
		verbInf: 'piangere',
		verbAux: 'avere',
		verbPart: 'pianto'
	},
	{
		verbInf: 'piovere',
		verbAux: 'essere',
		verbPart: 'piovuto'
	},
	{
		verbInf: 'portare',
		verbAux: 'avere',
		verbPart: 'portato'
	},
	{
		verbInf: 'potere',
		verbAux: 'avere',
		verbPart: 'potuto'
	},
	{
		verbInf: 'preferire',
		verbAux: 'avere',
		verbPart: 'preferito'
	},
	{
		verbInf: 'pulire',
		verbAux: 'avere',
		verbPart: 'pulito'
	},
	{
		verbInf: 'raccomandare',
		verbAux: 'avere',
		verbPart: 'raccomandato'
	},
	{
		verbInf: 'raccontare',
		verbAux: 'avere',
		verbPart: 'raccontato'
	},
	{
		verbInf: 'raggiungere',
		verbAux: 'avere',
		verbPart: 'raggiunto'
	},
	{
		verbInf: 'resistere',
		verbAux: 'avere',
		verbPart: 'resistito'
	},
	{
		verbInf: 'respirare',
		verbAux: 'avere',
		verbPart: 'respirato'
	},
	{
		verbInf: 'restituire',
		verbAux: 'avere',
		verbPart: 'restituito'
	},
	{
		verbInf: 'riconoscere',
		verbAux: 'avere',
		verbPart: 'riconosciuto'
	},
	{
		verbInf: 'ricordare',
		verbAux: 'avere',
		verbPart: 'ricordato'
	},
	{
		verbInf: 'ridere',
		verbAux: 'avere',
		verbPart: 'riso'
	},
	{
		verbInf: 'rifutare',
		verbAux: 'avere',
		verbPart: 'rifutato'
	},
	{
		verbInf: 'rinnovare',
		verbAux: 'avere',
		verbPart: 'rinnovato'
	},
	{
		verbInf: 'riscaldare',
		verbAux: 'avere',
		verbPart: 'riscaldato'
	},
	{
		verbInf: 'risolvere',
		verbAux: 'avere',
		verbPart: 'risolto'
	},
	{
		verbInf: 'rispondere',
		verbAux: 'avere',
		verbPart: 'risposto'
	},
	{
		verbInf: 'ritrarre',
		verbAux: 'avere',
		verbPart: 'ritratto'
	},
    {
        verbInf: 'riunire',
        verbAux: 'avere',
        verbPart: 'riunito'
    },
    {
        verbInf: 'riuscire',
        verbAux: 'essere',
        verbPart: 'riuscito'
    },
    {
        verbInf: 'rompere',
        verbAux: 'avere',
        verbPart: 'rotto'
    },
    {
        verbInf: 'rubare',
        verbAux: 'avere',
        verbPart: 'rubato'
    },
    {
		verbInf: 'stare',
		verbAux: 'essere',
		verbPart: 'stato'
	},
	{
		verbInf: 'salire',
		verbAux: 'essere',
		verbPart: 'salito'
	},
	{
		verbInf: 'saltare',
		verbAux: 'avere/essere',
		verbPart: 'saltato'
	},
	{
		verbInf: 'salvare',
		verbAux: 'avere',
		verbPart: 'salvato'
	},
	{
		verbInf: 'sapere',
		verbAux: 'avere',
		verbPart: 'saputo'
	},
	{
		verbInf: 'sbagliare',
		verbAux: 'avere',
		verbPart: 'sbagliato'
	},
	{
		verbInf: 'sbagliarsi',
		verbAux: 'essere',
		verbPart: 'sbagliato',
		isReflexive: true
	},
	{
		verbInf: 'scaldare',
		verbAux: 'avere',
		verbPart: 'scaldato'
	},
	{
		verbInf: 'scegliere',
		verbAux: 'avere',
		verbPart: 'scelto'
	},
	{
		verbInf: 'scopriere',
		verbAux: 'avere',
		verbPart: 'scoperto'
	},
	{
		verbInf: 'sedere',
		verbAux: 'avere',
		verbPart: 'seduto'
	},
    {
        verbInf: 'sedersi',
        verbAux: 'essere',
        verbPart: 'seduto',
		isReflexive: true
    },
	{
		verbInf: 'seguire',
		verbAux: 'avere',
		verbPart: 'seguito'
	},
	{
		verbInf: 'sentire',
		verbAux: 'avere',
		verbPart: 'sentito'
	},
	{
		verbInf: 'sentirsi',
		verbAux: 'essere',
		verbPart: 'sentito',
		isReflexive: true
	},
	{
		verbInf: 'separare',
		verbAux: 'avere',
		verbPart: 'separato'
	},
	{
		verbInf: 'soffrire',
		verbAux: 'avere',
		verbPart: 'sofferto'
	},
	{
		verbInf: 'sognare',
		verbAux: 'avere',
		verbPart: 'sognato'
	},
	{
		verbInf: 'sorgere',
		verbAux: 'essere',
		verbPart: 'sorto'
	},
	{
		verbInf: 'sorprendere',
		verbAux: 'avere',
		verbPart: 'sorpreso'
	},
	{
		verbInf: 'sorprendersi',
		verbAux: 'essere',
		verbPart: 'sorpreso',
		isReflexive: true
	},
	{
		verbInf: 'spedire',
		verbAux: 'avere',
		verbPart: 'spedito'
	},
	{
		verbInf: 'spegnere',
		verbAux: 'avere',
		verbPart: 'spento'
	},
	{
		verbInf: 'spegnere',
		verbAux: 'avere',
		verbPart: 'speso'
	},
	{
		verbInf: 'spingere',
		verbAux: 'avere',
		verbPart: 'spinto'
	},
	{
		verbInf: 'sposare',
		verbAux: 'avere',
		verbPart: 'sposato'
	},
	{
		verbInf: 'sposarsi',
		verbAux: 'essere',
		verbPart: 'sposato',
		isReflexive: true
	},
	{
		verbInf: 'studiare',
		verbAux: 'avere',
		verbPart: 'studiato'
	},
	{
		verbInf: 'succedere',
		verbAux: 'essere',
		verbPart: 'succeduto'
	},
	{
		verbInf: 'suonare',
		verbAux: 'avere',
		verbPart: 'suonato'
	},
	{
		verbInf: 'svegliarsi',
		verbAux: 'essere',
		verbPart: 'svegliato',
		isReflexive: true
	},
	{
		verbInf: 'tagliare',
		verbAux: 'avere',
		verbPart: 'tagliato'
	},
	{
		verbInf: 'temere',
		verbAux: 'avere',
		verbPart: 'temuto'
	},
	{
		verbInf: 'temersi',
		verbAux: 'essere',
		verbPart: 'temuto',
		isReflexive: true
	},
	{
		verbInf: 'tenere',
		verbAux: 'avere',
		verbPart: 'tenuto'
	},
	{
		verbInf: 'tentare',
		verbAux: 'avere',
		verbPart: 'tentato'
	},
	{
		verbInf: 'tirare',
		verbAux: 'avere',
		verbPart: 'tirato'
	},
	{
		verbInf: 'togliere',
		verbAux: 'avere',
		verbPart: 'tolto'
	},
	{
		verbInf: 'tradurre',
		verbAux: 'avere',
		verbPart: 'tradotto'
	},
	{
		verbInf: 'trasferire',
		verbAux: 'avere',
		verbPart: 'trasferito'
	},
	{
		verbInf: 'trattare',
		verbAux: 'avere',
		verbPart: 'trattato'
	},
	{
		verbInf: 'trovare',
		verbAux: 'avere',
		verbPart: 'trovato'
	},
	{
		verbInf: 'turbarsi',
		verbAux: 'essere',
		verbPart: 'turbato',
		isReflexive: true
	},
	{
		verbInf: 'uccidere',
		verbAux: 'avere',
		verbPart: 'ucciso'
	},
	{
		verbInf: 'umiliarsi',
		verbAux: 'essere',
		verbPart: 'umiliato',
		isReflexive: true
	},
	{
		verbInf: 'ungere',
		verbAux: 'avere',
		verbPart: 'unto'
	},
	{
		verbInf: 'unire',
		verbAux: 'avere',
		verbPart: 'unito'
	},
	{
		verbInf: 'urlare',
		verbAux: 'avere',
		verbPart: 'urlato'
	},
	{
		verbInf: 'usare',
		verbAux: 'avere',
		verbPart: 'usato'
	},
	{
		verbInf: 'uscire',
		verbAux: 'essere',
		verbPart: 'uscito'
	},
	{
		verbInf: 'vendere',
		verbAux: 'avere',
		verbPart: 'venduto'
	},
	{
		verbInf: 'verificare',
		verbAux: 'avere',
		verbPart: 'verificato'
	},
	{
		verbInf: 'versare',
		verbAux: 'avere',
		verbPart: 'versato'
	},
	{
		verbInf: 'vestirsi',
		verbAux: 'essere',
		verbPart: 'vestito',
		isReflexive: true
	},
	{
		verbInf: 'vietare',
		verbAux: 'avere',
		verbPart: 'vietato'
	},
	{
		verbInf: 'vincere',
		verbAux: 'avere',
		verbPart: 'vinto'
	},
	{
		verbInf: 'visitare',
		verbAux: 'avere',
		verbPart: 'visitato'
	},
	{
		verbInf: 'volare',
		verbAux: 'avere/essere',
		verbPart: 'volato'
	},
	{
		verbInf: 'volere',
		verbAux: 'avere',
		verbPart: 'voluto'
	},
	{
		verbInf: 'volgere',
		verbAux: 'avere',
		verbPart: 'volto'
	},
	{
		verbInf: 'votare',
		verbAux: 'avere',
		verbPart: 'votato'
	},
];