import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Plysaci } from '../components/Plysaci'

// const name1 = 'Silvestr';
// const image1 = 'https://kodim.cz/cms/assets/czechitas/js2/lekce/sablony-komponenty/cv-komponenty/plysaci/elephant.jpg';
// const text1 = 'Silvestr rád pozoruje dění za oknem a upřímně se usmívá na všechno kolem'
// const name2 = 'Ctirad';
// const image2 = 'https://kodim.cz/cms/assets/czechitas/js2/lekce/sablony-komponenty/cv-komponenty/plysaci/mouse.jpg';
// const text2 = 'Ctirad tráví svůj čas v blízkosti lednice a s očekáváním pozoruje její bílé dveře'

// const Silvestr = () => {
//   return (
//     <div className="plushy">
//       <img className="plushy__image" src ={image1}/>
//       <h2 className="plushy__name">{name1}</h2>
//       <p className="plushy__text">{text1}</p></div>
//   )
// }

// const Ctirad = () => {
//   return (
//     <div className="plushy">
//       <img className="plushy__image" src ={image2}/>
//       <h2 className="plushy__name">{name2}</h2>
//       <p className="plushy__text">{text2}</p></div>
//   )
// }

document.querySelector('#root').innerHTML = render(
  <>  
    <h1 className='titel'>Plyšáci</h1>
    <div>
      <Plysaci />
    </div>
  </>
);
