import './index.css';
import { Plysak } from './Plysak'

export const Plysaci = () => {
  return (
    <div className='plushies'>
      <Plysak
        imgLocation="https://kodim.cz/cms/assets/czechitas/js2/lekce/sablony-komponenty/cv-komponenty/plysaci/elephant.jpg"
        plysakName="Silvestr"
        plysakDescription= "Silvestr rád pozoruje dění za oknem a upřímně se usmívá na všechno kolem"
      />
      <Plysak
        imgLocation="https://kodim.cz/cms/assets/czechitas/js2/lekce/sablony-komponenty/cv-komponenty/plysaci/mouse.jpg"
        plysakName="Ctirad"
        plysakDescription= "Ctirad tráví svůj čas v blízkosti lednice a s očekáváním pozoruje její bílé dveře"
      />
    </div>
  )
}
