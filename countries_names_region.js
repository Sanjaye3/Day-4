var XMLHttpRequest = require('xhr2');

let url = 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json'

var country_information = new Object();
var xmlreq = new XMLHttpRequest();
xmlreq.open('GET', url)

xmlreq.send();

xmlreq.onload = function(){

    

    if(xmlreq.status === 200){
        let data = JSON.parse(this.responseText)

        for(let i = 0; i < data.length; i++){
            let c_name = data[i].name;
            let c_flag = data[i].flag;
            let c_sub = data[i].subregion;
            let c_pop = data[i].population;

            country_information[c_name]= {"flag" : c_flag,
                                "sub_region":c_sub,
                                "population":c_pop};
        }

        console.log(country_information)

    }
};



// output:
// flag: 'https://restcountries.eu/data/chn.svg',
// sub_region: 'Eastern Asia',
// population: 1377422166
// },
// 'Christmas Island': {
// flag: 'https://restcountries.eu/data/cxr.svg',
// sub_region: 'Australia and New Zealand',
// population: 2072
// },
// 'Cocos (Keeling) Islands': {
// flag: 'https://restcountries.eu/data/cck.svg',
// sub_region: 'Australia and New Zealand',
// population: 550
// },
// Colombia: {
// flag: 'https://restcountries.eu/data/col.svg',
// sub_region: 'South America',
// population: 48759958
// },
// Comoros: {
// flag: 'https://restcountries.eu/data/com.svg',
// sub_region: 'Eastern Africa',
// population: 806153
// },
// Congo: {
// flag: 'https://restcountries.eu/data/cog.svg',
// sub_region: 'Middle Africa',
// population: 4741000
// },
// 'Congo (Democratic Republic of the)': {
// flag: 'https://restcountries.eu/data/cod.svg',
// sub_region: 'Middle Africa',
// population: 85026000
// },
// 'Cook Islands': {
// flag: 'https://restcountries.eu/data/cok.svg',
// sub_region: 'Polynesia',
// population: 18100
// },
// 'Costa Rica': {
// flag: 'https://restcountries.eu/data/cri.svg',
// sub_region: 'Central America',
// population: 4890379
// },
// Croatia: {
// flag: 'https://restcountries.eu/data/hrv.svg',
// sub_region: 'Southern Europe',
// population: 4190669
// },
// Cuba: {
// flag: 'https://restcountries.eu/data/cub.svg',
// sub_region: 'Caribbean',
// population: 11239004
// },
// 'Curaçao': {
// flag: 'https://restcountries.eu/data/cuw.svg',
// sub_region: 'Caribbean',
// population: 154843
// },
// Cyprus: {
// flag: 'https://restcountries.eu/data/cyp.svg',
// sub_region: 'Southern Europe',
// population: 847000
// },
// 'Czech Republic': {
// flag: 'https://restcountries.eu/data/cze.svg',
// sub_region: 'Eastern Europe',
// population: 10558524
// },
// Denmark: {
// flag: 'https://restcountries.eu/data/dnk.svg',
// sub_region: 'Northern Europe',
// population: 5717014
// },
// Djibouti: {
// flag: 'https://restcountries.eu/data/dji.svg',
// sub_region: 'Eastern Africa',
// population: 900000
// },
// Dominica: {
// flag: 'https://restcountries.eu/data/dma.svg',
// sub_region: 'Caribbean',
// population: 71293
// },
// 'Dominican Republic': {
// flag: 'https://restcountries.eu/data/dom.svg',
// sub_region: 'Caribbean',
// population: 10075045
// },
// Ecuador: {
// flag: 'https://restcountries.eu/data/ecu.svg',
// sub_region: 'South America',
// population: 16545799
// },
// Egypt: {
// flag: 'https://restcountries.eu/data/egy.svg',
// sub_region: 'Northern Africa',
// population: 91290000
// },
// 'El Salvador': {
// flag: 'https://restcountries.eu/data/slv.svg',
// sub_region: 'Central America',
// population: 6520675
// },
// 'Equatorial Guinea': {
// flag: 'https://restcountries.eu/data/gnq.svg',
// sub_region: 'Middle Africa',
// population: 1222442
// },
// Eritrea: {
// flag: 'https://restcountries.eu/data/eri.svg',
// sub_region: 'Eastern Africa',
// population: 5352000
// },
// Estonia: {
// flag: 'https://restcountries.eu/data/est.svg',
// sub_region: 'Northern Europe',
// population: 1315944
// },
// Ethiopia: {
// flag: 'https://restcountries.eu/data/eth.svg',
// sub_region: 'Eastern Africa',
// population: 92206005
// },
// 'Falkland Islands (Malvinas)': {
// flag: 'https://restcountries.eu/data/flk.svg',
// sub_region: 'South America',
// population: 2563
// },
// 'Faroe Islands': {
// flag: 'https://restcountries.eu/data/fro.svg',
// sub_region: 'Northern Europe',
// population: 49376
// },
// Fiji: {
// flag: 'https://restcountries.eu/data/fji.svg',
// sub_region: 'Melanesia',
// population: 867000
// },
// Finland: {
// flag: 'https://restcountries.eu/data/fin.svg',
// sub_region: 'Northern Europe',
// population: 5491817
// },
// France: {
// flag: 'https://restcountries.eu/data/fra.svg',
// sub_region: 'Western Europe',
// population: 66710000
// },
// 'French Guiana': {
// flag: 'https://restcountries.eu/data/guf.svg',
// sub_region: 'South America',
// population: 254541
// },
// 'French Polynesia': {
// flag: 'https://restcountries.eu/data/pyf.svg',
// sub_region: 'Polynesia',
// population: 271800
// },
// 'French Southern Territories': {
// flag: 'https://restcountries.eu/data/atf.svg',
// sub_region: 'Southern Africa',
// population: 140
// },
// Gabon: {
// flag: 'https://restcountries.eu/data/gab.svg',
// sub_region: 'Middle Africa',
// population: 1802278
// },
// Gambia: {
// flag: 'https://restcountries.eu/data/gmb.svg',
// sub_region: 'Western Africa',
// population: 1882450
// },
// Georgia: {
// flag: 'https://restcountries.eu/data/geo.svg',
// sub_region: 'Western Asia',
// population: 3720400
// },
// Germany: {
// flag: 'https://restcountries.eu/data/deu.svg',
// sub_region: 'Western Europe',
// population: 81770900
// },
// Ghana: {
// flag: 'https://restcountries.eu/data/gha.svg',
// sub_region: 'Western Africa',
// population: 27670174
// },
// Gibraltar: {
// flag: 'https://restcountries.eu/data/gib.svg',
// sub_region: 'Southern Europe',
// population: 33140
// },
// Greece: {
// flag: 'https://restcountries.eu/data/grc.svg',
// sub_region: 'Southern Europe',
// population: 10858018
// },
// Greenland: {
// flag: 'https://restcountries.eu/data/grl.svg',
// sub_region: 'Northern America',
// population: 55847
// },
// Grenada: {
// flag: 'https://restcountries.eu/data/grd.svg',
// sub_region: 'Caribbean',
// population: 103328
// },
// Guadeloupe: {
// flag: 'https://restcountries.eu/data/glp.svg',
// sub_region: 'Caribbean',
// population: 400132
// },
// Guam: {
// flag: 'https://restcountries.eu/data/gum.svg',
// sub_region: 'Micronesia',
// population: 184200
// },
// Guatemala: {
// flag: 'https://restcountries.eu/data/gtm.svg',
// sub_region: 'Central America',
// population: 16176133
// },
// Guernsey: {
// flag: 'https://restcountries.eu/data/ggy.svg',
// sub_region: 'Northern Europe',
// population: 62999
// },
// Guinea: {
// flag: 'https://restcountries.eu/data/gin.svg',
// sub_region: 'Western Africa',
// population: 12947000
// },
// 'Guinea-Bissau': {
// flag: 'https://restcountries.eu/data/gnb.svg',
// sub_region: 'Western Africa',
// population: 1547777
// },
// Guyana: {
// flag: 'https://restcountries.eu/data/guy.svg',
// sub_region: 'South America',
// population: 746900
// },
// Haiti: {
// flag: 'https://restcountries.eu/data/hti.svg',
// sub_region: 'Caribbean',
// population: 11078033
// },
// 'Heard Island and McDonald Islands': {
// flag: 'https://restcountries.eu/data/hmd.svg',
// sub_region: '',
// population: 0
// },
// 'Holy See': {
// flag: 'https://restcountries.eu/data/vat.svg',
// sub_region: 'Southern Europe',
// population: 451
// },
// Honduras: {
// flag: 'https://restcountries.eu/data/hnd.svg',
// sub_region: 'Central America',
// population: 8576532
// },
// 'Hong Kong': {
// flag: 'https://restcountries.eu/data/hkg.svg',
// sub_region: 'Eastern Asia',
// population: 7324300
// },
// Hungary: {
// flag: 'https://restcountries.eu/data/hun.svg',
// sub_region: 'Eastern Europe',
// population: 9823000
// },
// Iceland: {
// flag: 'https://restcountries.eu/data/isl.svg',
// sub_region: 'Northern Europe',
// population: 334300
// },
// India: {
// flag: 'https://restcountries.eu/data/ind.svg',
// sub_region: 'Southern Asia',
// population: 1295210000
// },
// Indonesia: {
// flag: 'https://restcountries.eu/data/idn.svg',
// sub_region: 'South-Eastern Asia',
// population: 258705000
// },
// "Côte d'Ivoire": {
// flag: 'https://restcountries.eu/data/civ.svg',
// sub_region: 'Western Africa',
// population: 22671331
// },
// 'Iran (Islamic Republic of)': {
// flag: 'https://restcountries.eu/data/irn.svg',
// sub_region: 'Southern Asia',
// population: 79369900
// },
// Iraq: {
// flag: 'https://restcountries.eu/data/irq.svg',
// sub_region: 'Western Asia',
// population: 37883543
// },
// Ireland: {
// flag: 'https://restcountries.eu/data/irl.svg',
// sub_region: 'Northern Europe',
// population: 6378000
// },
// 'Isle of Man': {
// flag: 'https://restcountries.eu/data/imn.svg',
// sub_region: 'Northern Europe',
// population: 84497
// },
// Israel: {
// flag: 'https://restcountries.eu/data/isr.svg',
// sub_region: 'Western Asia',
// population: 8527400
// },
// Italy: {
// flag: 'https://restcountries.eu/data/ita.svg',
// sub_region: 'Southern Europe',
// population: 60665551
// },
// Jamaica: {
// flag: 'https://restcountries.eu/data/jam.svg',
// sub_region: 'Caribbean',
// population: 2723246
// },
// Japan: {
// flag: 'https://restcountries.eu/data/jpn.svg',
// sub_region: 'Eastern Asia',
// population: 126960000
// },
// Jersey: {
// flag: 'https://restcountries.eu/data/jey.svg',
// sub_region: 'Northern Europe',
// population: 100800
// },
// Jordan: {
// flag: 'https://restcountries.eu/data/jor.svg',
// sub_region: 'Western Asia',
// population: 9531712
// },
// Kazakhstan: {
// flag: 'https://restcountries.eu/data/kaz.svg',
// sub_region: 'Central Asia',
// population: 17753200
// },
// Kenya: {
// flag: 'https://restcountries.eu/data/ken.svg',
// sub_region: 'Eastern Africa',
// population: 47251000
// },
// Kiribati: {
// flag: 'https://restcountries.eu/data/kir.svg',
// sub_region: 'Micronesia',
// population: 113400
// },
// Kuwait: {
// flag: 'https://restcountries.eu/data/kwt.svg',
// sub_region: 'Western Asia',
// population: 4183658
// },
// Kyrgyzstan: {
// flag: 'https://restcountries.eu/data/kgz.svg',
// sub_region: 'Central Asia',
// population: 6047800
// },
// "Lao People's Democratic Republic": {
// flag: 'https://restcountries.eu/data/lao.svg',
// sub_region: 'South-Eastern Asia',
// population: 6492400
// },
// Latvia: {
// flag: 'https://restcountries.eu/data/lva.svg',
// sub_region: 'Northern Europe',
// population: 1961600
// },
// Lebanon: {
// flag: 'https://restcountries.eu/data/lbn.svg',
// sub_region: 'Western Asia',
// population: 5988000
// },
// Lesotho: {
// flag: 'https://restcountries.eu/data/lso.svg',
// sub_region: 'Southern Africa',
// population: 1894194
// },
// Liberia: {
// flag: 'https://restcountries.eu/data/lbr.svg',
// sub_region: 'Western Africa',
// population: 4615000
// },
// Libya: {
// flag: 'https://restcountries.eu/data/lby.svg',
// sub_region: 'Northern Africa',
// population: 6385000
// },
// Liechtenstein: {
// flag: 'https://restcountries.eu/data/lie.svg',
// sub_region: 'Western Europe',
// population: 37623
// },
// Lithuania: {
// flag: 'https://restcountries.eu/data/ltu.svg',
// sub_region: 'Northern Europe',
// population: 2872294
// },
// Luxembourg: {
// flag: 'https://restcountries.eu/data/lux.svg',
// sub_region: 'Western Europe',
// population: 576200
// },
// Macao: {
// flag: 'https://restcountries.eu/data/mac.svg',
// sub_region: 'Eastern Asia',
// population: 649100
// },
// 'Macedonia (the former Yugoslav Republic of)': {
// flag: 'https://restcountries.eu/data/mkd.svg',
// sub_region: 'Southern Europe',
// population: 2058539
// },
// Madagascar: {
// flag: 'https://restcountries.eu/data/mdg.svg',
// sub_region: 'Eastern Africa',
// population: 22434363
// },
// Malawi: {
// flag: 'https://restcountries.eu/data/mwi.svg',
// sub_region: 'Eastern Africa',
// population: 16832910
// },
// Malaysia: {
// flag: 'https://restcountries.eu/data/mys.svg',
// sub_region: 'South-Eastern Asia',
// population: 31405416
// },
// Maldives: {
// flag: 'https://restcountries.eu/data/mdv.svg',
// sub_region: 'Southern Asia',
// population: 344023
// },
// Mali: {
// flag: 'https://restcountries.eu/data/mli.svg',
// sub_region: 'Western Africa',
// population: 18135000
// },
// Malta: {
// flag: 'https://restcountries.eu/data/mlt.svg',
// sub_region: 'Southern Europe',
// population: 425384
// },
// 'Marshall Islands': {
// flag: 'https://restcountries.eu/data/mhl.svg',
// sub_region: 'Micronesia',
// population: 54880
// },
// Martinique: {
// flag: 'https://restcountries.eu/data/mtq.svg',
// sub_region: 'Caribbean',
// population: 378243
// },
// Mauritania: {
// flag: 'https://restcountries.eu/data/mrt.svg',
// sub_region: 'Western Africa',
// population: 3718678
// },
// Mauritius: {
// flag: 'https://restcountries.eu/data/mus.svg',
// sub_region: 'Eastern Africa',
// population: 1262879
// },
// Mayotte: {
// flag: 'https://restcountries.eu/data/myt.svg',
// sub_region: 'Eastern Africa',
// population: 226915
// },
// Mexico: {
// flag: 'https://restcountries.eu/data/mex.svg',
// sub_region: 'Central America',
// population: 122273473
// },
// 'Micronesia (Federated States of)': {
// flag: 'https://restcountries.eu/data/fsm.svg',
// sub_region: 'Micronesia',
// population: 102800
// },
// 'Moldova (Republic of)': {
// flag: 'https://restcountries.eu/data/mda.svg',
// sub_region: 'Eastern Europe',
// population: 3553100
// },
// Monaco: {
// flag: 'https://restcountries.eu/data/mco.svg',
// sub_region: 'Western Europe',
// population: 38400
// },
// Mongolia: {
// flag: 'https://restcountries.eu/data/mng.svg',
// sub_region: 'Eastern Asia',
// population: 3093100
// },
// Montenegro: {
// flag: 'https://restcountries.eu/data/mne.svg',
// sub_region: 'Southern Europe',
// population: 621810
// },
// Montserrat: {
// flag: 'https://restcountries.eu/data/msr.svg',
// sub_region: 'Caribbean',
// population: 4922
// },
// Morocco: {
// flag: 'https://restcountries.eu/data/mar.svg',
// sub_region: 'Northern Africa',
// population: 33337529
// },
// Mozambique: {
// flag: 'https://restcountries.eu/data/moz.svg',
// sub_region: 'Eastern Africa',
// population: 26423700
// },
// Myanmar: {
// flag: 'https://restcountries.eu/data/mmr.svg',
// sub_region: 'South-Eastern Asia',
// population: 51419420
// },
// Namibia: {
// flag: 'https://restcountries.eu/data/nam.svg',
// sub_region: 'Southern Africa',
// population: 2324388
// },
// Nauru: {
// flag: 'https://restcountries.eu/data/nru.svg',
// sub_region: 'Micronesia',
// population: 10084
// },
// Nepal: {
// flag: 'https://restcountries.eu/data/npl.svg',
// sub_region: 'Southern Asia',
// population: 28431500
// },
// Netherlands: {
// flag: 'https://restcountries.eu/data/nld.svg',
// sub_region: 'Western Europe',
// population: 17019800
// },
// 'New Caledonia': {
// flag: 'https://restcountries.eu/data/ncl.svg',
// sub_region: 'Melanesia',
// population: 268767
// },
// 'New Zealand': {
// flag: 'https://restcountries.eu/data/nzl.svg',
// sub_region: 'Australia and New Zealand',
// population: 4697854
// },
// Nicaragua: {
// flag: 'https://restcountries.eu/data/nic.svg',
// sub_region: 'Central America',
// population: 6262703
// },
// Niger: {
// flag: 'https://restcountries.eu/data/ner.svg',
// sub_region: 'Western Africa',
// population: 20715000
// },
// Nigeria: {
// flag: 'https://restcountries.eu/data/nga.svg',
// sub_region: 'Western Africa',
// population: 186988000
// },
// Niue: {
// flag: 'https://restcountries.eu/data/niu.svg',
// sub_region: 'Polynesia',
// population: 1470
// },
// 'Norfolk Island': {
// flag: 'https://restcountries.eu/data/nfk.svg',
// sub_region: 'Australia and New Zealand',
// population: 2302
// },
// "Korea (Democratic People's Republic of)": {
// flag: 'https://restcountries.eu/data/prk.svg',
// sub_region: 'Eastern Asia',
// population: 25281000
// },
// 'Northern Mariana Islands': {
// flag: 'https://restcountries.eu/data/mnp.svg',
// sub_region: 'Micronesia',
// population: 56940
// },
// Norway: {
// flag: 'https://restcountries.eu/data/nor.svg',
// sub_region: 'Northern Europe',
// population: 5223256
// },
// Oman: {
// flag: 'https://restcountries.eu/data/omn.svg',
// sub_region: 'Western Asia',
// population: 4420133
// },
// Pakistan: {
// flag: 'https://restcountries.eu/data/pak.svg',
// sub_region: 'Southern Asia',
// population: 194125062
// },
// Palau: {
// flag: 'https://restcountries.eu/data/plw.svg',
// sub_region: 'Micronesia',
// population: 17950
// },
// 'Palestine, State of': {
// flag: 'https://restcountries.eu/data/pse.svg',
// sub_region: 'Western Asia',
// population: 4682467
// },
// Panama: {
// flag: 'https://restcountries.eu/data/pan.svg',
// sub_region: 'Central America',
// population: 3814672
// },
// 'Papua New Guinea': {
// flag: 'https://restcountries.eu/data/png.svg',
// sub_region: 'Melanesia',
// population: 8083700
// },
// Paraguay: {
// flag: 'https://restcountries.eu/data/pry.svg',
// sub_region: 'South America',
// population: 6854536
// },
// Peru: {
// flag: 'https://restcountries.eu/data/per.svg',
// sub_region: 'South America',
// population: 31488700
// },
// Philippines: {
// flag: 'https://restcountries.eu/data/phl.svg',
// sub_region: 'South-Eastern Asia',
// population: 103279800
// },
// Pitcairn: {
// flag: 'https://restcountries.eu/data/pcn.svg',
// sub_region: 'Polynesia',
// population: 56
// },
// Poland: {
// flag: 'https://restcountries.eu/data/pol.svg',
// sub_region: 'Eastern Europe',
// population: 38437239
// },
// Portugal: {
// flag: 'https://restcountries.eu/data/prt.svg',
// sub_region: 'Southern Europe',
// population: 10374822
// },
// 'Puerto Rico': {
// flag: 'https://restcountries.eu/data/pri.svg',
// sub_region: 'Caribbean',
// population: 3474182
// },
// Qatar: {
// flag: 'https://restcountries.eu/data/qat.svg',
// sub_region: 'Western Asia',
// population: 2587564
// },
// 'Republic of Kosovo': {
// flag: 'https://restcountries.eu/data/kos.svg',
// sub_region: 'Eastern Europe',
// population: 1733842
// },
// 'Réunion': {
// flag: 'https://restcountries.eu/data/reu.svg',
// sub_region: 'Eastern Africa',
// population: 840974
// },
// Romania: {
// flag: 'https://restcountries.eu/data/rou.svg',
// sub_region: 'Eastern Europe',
// population: 19861408
// },
// 'Russian Federation': {
// flag: 'https://restcountries.eu/data/rus.svg',
// sub_region: 'Eastern Europe',
// population: 146599183
// },
// Rwanda: {
// flag: 'https://restcountries.eu/data/rwa.svg',
// sub_region: 'Eastern Africa',
// population: 11553188
// },
// 'Saint Barthélemy': {
// flag: 'https://restcountries.eu/data/blm.svg',
// sub_region: 'Caribbean',
// population: 9417
// },
// 'Saint Helena, Ascension and Tristan da Cunha': {
// flag: 'https://restcountries.eu/data/shn.svg',
// sub_region: 'Western Africa',
// population: 4255
// },
// 'Saint Kitts and Nevis': {
// flag: 'https://restcountries.eu/data/kna.svg',
// sub_region: 'Caribbean',
// population: 46204
// },
// 'Saint Lucia': {
// flag: 'https://restcountries.eu/data/lca.svg',
// sub_region: 'Caribbean',
// population: 186000
// },
// 'Saint Martin (French part)': {
// flag: 'https://restcountries.eu/data/maf.svg',
// sub_region: 'Caribbean',
// population: 36979
// },
// 'Saint Pierre and Miquelon': {
// flag: 'https://restcountries.eu/data/spm.svg',
// sub_region: 'Northern America',
// population: 6069
// },
// 'Saint Vincent and the Grenadines': {
// flag: 'https://restcountries.eu/data/vct.svg',
// sub_region: 'Caribbean',
// population: 109991
// },
// Samoa: {
// flag: 'https://restcountries.eu/data/wsm.svg',
// sub_region: 'Polynesia',
// population: 194899
// },
// 'San Marino': {
// flag: 'https://restcountries.eu/data/smr.svg',
// sub_region: 'Southern Europe',
// population: 33005
// },
// 'Sao Tome and Principe': {
// flag: 'https://restcountries.eu/data/stp.svg',
// sub_region: 'Middle Africa',
// population: 187356
// },
// 'Saudi Arabia': {
// flag: 'https://restcountries.eu/data/sau.svg',
// sub_region: 'Western Asia',
// population: 32248200
// },
// Senegal: {
// flag: 'https://restcountries.eu/data/sen.svg',
// sub_region: 'Western Africa',
// population: 14799859
// },
// Serbia: {
// flag: 'https://restcountries.eu/data/srb.svg',
// sub_region: 'Southern Europe',
// population: 7076372
// },
// Seychelles: {
// flag: 'https://restcountries.eu/data/syc.svg',
// sub_region: 'Eastern Africa',
// population: 91400
// },
// 'Sierra Leone': {
// flag: 'https://restcountries.eu/data/sle.svg',
// sub_region: 'Western Africa',
// population: 7075641
// },
// Singapore: {
// flag: 'https://restcountries.eu/data/sgp.svg',
// sub_region: 'South-Eastern Asia',
// population: 5535000
// },
// 'Sint Maarten (Dutch part)': {
// flag: 'https://restcountries.eu/data/sxm.svg',
// sub_region: 'Caribbean',
// population: 38247
// },
// Slovakia: {
// flag: 'https://restcountries.eu/data/svk.svg',
// sub_region: 'Eastern Europe',
// population: 5426252
// },
// Slovenia: {
// flag: 'https://restcountries.eu/data/svn.svg',
// sub_region: 'Southern Europe',
// population: 2064188
// },
// 'Solomon Islands': {
// flag: 'https://restcountries.eu/data/slb.svg',
// sub_region: 'Melanesia',
// population: 642000
// },
// Somalia: {
// flag: 'https://restcountries.eu/data/som.svg',
// sub_region: 'Eastern Africa',
// population: 11079000
// },
// 'South Africa': {
// flag: 'https://restcountries.eu/data/zaf.svg',
// sub_region: 'Southern Africa',
// population: 55653654
// },
// 'South Georgia and the South Sandwich Islands': {
// flag: 'https://restcountries.eu/data/sgs.svg',
// sub_region: 'South America',
// population: 30
// },
// 'Korea (Republic of)': {
// flag: 'https://restcountries.eu/data/kor.svg',
// sub_region: 'Eastern Asia',
// population: 50801405
// },
// 'South Sudan': {
// flag: 'https://restcountries.eu/data/ssd.svg',
// sub_region: 'Middle Africa',
// population: 12131000
// },
// Spain: {
// flag: 'https://restcountries.eu/data/esp.svg',
// sub_region: 'Southern Europe',
// population: 46438422
// },
// 'Sri Lanka': {
// flag: 'https://restcountries.eu/data/lka.svg',
// sub_region: 'Southern Asia',
// population: 20966000
// },
// Sudan: {
// flag: 'https://restcountries.eu/data/sdn.svg',
// sub_region: 'Northern Africa',
// population: 39598700
// },
// Suriname: {
// flag: 'https://restcountries.eu/data/sur.svg',
// sub_region: 'South America',
// population: 541638
// },
// 'Svalbard and Jan Mayen': {
// flag: 'https://restcountries.eu/data/sjm.svg',
// sub_region: 'Northern Europe',
// population: 2562
// },
// Swaziland: {
// flag: 'https://restcountries.eu/data/swz.svg',
// sub_region: 'Southern Africa',
// population: 1132657
// },
// Sweden: {
// flag: 'https://restcountries.eu/data/swe.svg',
// sub_region: 'Northern Europe',
// population: 9894888
// },
// Switzerland: {
// flag: 'https://restcountries.eu/data/che.svg',
// sub_region: 'Western Europe',
// population: 8341600
// },
// 'Syrian Arab Republic': {
// flag: 'https://restcountries.eu/data/syr.svg',
// sub_region: 'Western Asia',
// population: 18564000
// },
// Taiwan: {
// flag: 'https://restcountries.eu/data/twn.svg',
// sub_region: 'Eastern Asia',
// population: 23503349
// },
// Tajikistan: {
// flag: 'https://restcountries.eu/data/tjk.svg',
// sub_region: 'Central Asia',
// population: 8593600
// },
// 'Tanzania, United Republic of': {
// flag: 'https://restcountries.eu/data/tza.svg',
// sub_region: 'Eastern Africa',
// population: 55155000
// },
// Thailand: {
// flag: 'https://restcountries.eu/data/tha.svg',
// sub_region: 'South-Eastern Asia',
// population: 65327652
// },
// 'Timor-Leste': {
// flag: 'https://restcountries.eu/data/tls.svg',
// sub_region: 'South-Eastern Asia',
// population: 1167242
// },
// Togo: {
// flag: 'https://restcountries.eu/data/tgo.svg',
// sub_region: 'Western Africa',
// population: 7143000
// },
// Tokelau: {
// flag: 'https://restcountries.eu/data/tkl.svg',
// sub_region: 'Polynesia',
// population: 1411
// },
// Tonga: {
// flag: 'https://restcountries.eu/data/ton.svg',
// sub_region: 'Polynesia',
// population: 103252
// },
// 'Trinidad and Tobago': {
// flag: 'https://restcountries.eu/data/tto.svg',
// sub_region: 'Caribbean',
// population: 1349667
// },
// Tunisia: {
// flag: 'https://restcountries.eu/data/tun.svg',
// sub_region: 'Northern Africa',
// population: 11154400
// },
// Turkey: {
// flag: 'https://restcountries.eu/data/tur.svg',
// sub_region: 'Western Asia',
// population: 78741053
// },
// Turkmenistan: {
// flag: 'https://restcountries.eu/data/tkm.svg',
// sub_region: 'Central Asia',
// population: 4751120
// },
// 'Turks and Caicos Islands': {
// flag: 'https://restcountries.eu/data/tca.svg',
// sub_region: 'Caribbean',
// population: 31458
// },
// Tuvalu: {
// flag: 'https://restcountries.eu/data/tuv.svg',
// sub_region: 'Polynesia',
// population: 10640
// },
// Uganda: {
// flag: 'https://restcountries.eu/data/uga.svg',
// sub_region: 'Eastern Africa',
// population: 33860700
// },
// Ukraine: {
// flag: 'https://restcountries.eu/data/ukr.svg',
// sub_region: 'Eastern Europe',
// population: 42692393
// },
// 'United Arab Emirates': {
// flag: 'https://restcountries.eu/data/are.svg',
// sub_region: 'Western Asia',
// population: 9856000
// },
// 'United Kingdom of Great Britain and Northern Ireland': {
// flag: 'https://restcountries.eu/data/gbr.svg',
// sub_region: 'Northern Europe',
// population: 65110000
// },
// 'United States of America': {
// flag: 'https://restcountries.eu/data/usa.svg',
// sub_region: 'Northern America',
// population: 323947000
// },
// Uruguay: {
// flag: 'https://restcountries.eu/data/ury.svg',
// sub_region: 'South America',
// population: 3480222
// },
// Uzbekistan: {
// flag: 'https://restcountries.eu/data/uzb.svg',
// sub_region: 'Central Asia',
// population: 31576400
// },
// Vanuatu: {
// flag: 'https://restcountries.eu/data/vut.svg',
// sub_region: 'Melanesia',
// population: 277500
// },
// 'Venezuela (Bolivarian Republic of)': {
// flag: 'https://restcountries.eu/data/ven.svg',
// sub_region: 'South America',
// population: 31028700
// },
// 'Viet Nam': {
// flag: 'https://restcountries.eu/data/vnm.svg',
// sub_region: 'South-Eastern Asia',
// population: 92700000
// },
// 'Wallis and Futuna': {
// flag: 'https://restcountries.eu/data/wlf.svg',
// sub_region: 'Polynesia',
// population: 11750
// },
// 'Western Sahara': {
// flag: 'https://restcountries.eu/data/esh.svg',
// sub_region: 'Northern Africa',
// population: 510713
// },
// Yemen: {
// flag: 'https://restcountries.eu/data/yem.svg',
// sub_region: 'Western Asia',
// population: 27478000
// },
// Zambia: {
// flag: 'https://restcountries.eu/data/zmb.svg',
// sub_region: 'Eastern Africa',
// population: 15933883
// },
// Zimbabwe: {
// flag: 'https://restcountries.eu/data/zwe.svg',
// sub_region: 'Eastern Africa',
// population: 14240168
// }
// }