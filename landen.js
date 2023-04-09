const landInfo = {
    Belgie: {
      Antwerpen: {
      },
      Henegouwen: {
      },
      Limburg: {
      },
      Luik: {
      },
      Luxemburg: {
      },
      Namen: {
      },
      Oost_Vlaanderen: {
      },
      Vlaams_Brabant: {
      },
      Waals_Brabant: {
      },
      West_Vlaanderen: {
      },
      
    },
    Nederland: {
      Drenthe: {
      },
      Flevoland: {
      },
      Friesland: {
      },
      Gelderland: {
      },
      Groningen: {
      },
      Limburg: {
      },
      Noord_Brabant: {
      },
      Noord_Holland: {
      },
      Overijssel: {
      },
      Utrecht: {
      },
      Zeeland: {
      },
      Zuid_Holland: {
      },
    },
    Frankrijk: {
      Auvergne_Rhône_Alpes: {
      },
      Bourgogne_Franche_Comté: {
      },
      Bretagne: {
      },
      Centre_Val_de_Loire: {
      },
      Grand_Est: {
      },
      Hauts_de_France: {
      },
      Île_de_France: {
      },
      Normandië: {
      },
      Nouvelle_Aquitaine: {
      },
      Occitanie: {
      },
      Pays_de_la_Loire: {
      },
      Provence_Alpes_Côte_d_Azur: {
      },
      Corsica: {
      },

    },
  };

  //Loader function
  window.onload = function (){

    const landSelection = document.querySelector("#land"),
    provincieSelection = document.querySelector("#provincie"),
    postcodeSelection = document.querySelector("#postcode");


    provincieSelection.disabled = true;
    postcodeSelection.disabled = true;

  
    
    

    for(let land in landInfo){
      landSelection.options[landSelection.options.length] = new Option(land,land);
    }

    //Land//
        //Land change
    landSelection.onchange = (e) => {
        provincieSelection.disabled=false;

        provincieSelection.length = 1;
        postcodeSelection.length = 1;

        for(let provincie in landInfo [e.target.value]){
            provincieSelection.options[provincieSelection.options.length] = new Option(provincie,provincie);
        }
    }

    //Provincie//
        //Provincie change
    provincieSelection.onchange = (e) => {
        postcodeSelection.disabled=false;

        //Clear all options
        postcodeSelection.length = 1;

        let postcodes = 
          landInfo[landSelection.value][provincieSelection.value][e.target.value
        ];

        for(let i = 0; i < postcodes.length; i++){
          postcodeSelection.options[postcodeSelection.options.length] = new Option(postcodes[i],postcodes[i]);
      }
    }
}