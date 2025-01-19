export const calcularVacio = (indexfila,indexSeccion, indexElemento) =>{
    switch (indexfila) {
      case 1:
        if(indexSeccion == 1){
          if(indexElemento > 1){
            return "vacio"
          }
        }
        if(indexSeccion == 2){
          if(indexElemento > 0){
            return "vacio"
          }
        }
        if(indexSeccion == 3){
          if(indexElemento < 6){
            return "vacio"
          }
        }
        return;
        case 2 :
        case 3 :
          if(indexSeccion == 1){
            if(indexElemento > 2){
              return "vacio"
            }
          }
          if(indexSeccion == 2){
              return "vacio"
            
          }
          return
      default:
        return '';
    }
  }



// export const calcularVacio = (indexfila, indexSeccion, indexElemento) => {
//     switch (indexfila) {
//       case 1:
//         if (indexSeccion === 1 && indexElemento > 1) return "vacio";
//         if (indexSeccion === 2) return "vacio";
//         if (indexSeccion === 3 && indexElemento < 6) return "vacio";
//         return "";
//       case 2:
//       case 3:
//         if (indexSeccion === 1 && indexElemento > 2) return "vacio";
//         if (indexSeccion === 2) return "vacio";
//         return "";
//       default:
//         return "";
//     }
//   };
  
  