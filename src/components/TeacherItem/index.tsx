import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
        <header>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/SRI_Curtis_R_Carlson_2010_cropped.jpg/220px-SRI_Curtis_R_Carlson_2010_cropped.jpg" alt="Curtis Carlson" />
          <div>
            <strong>Curtis Carlson</strong>
            <span>Innovation</span>
          </div>
        </header>

        <p>
          Curtis Raymond Carlson was president and CEO of SRI International from 1998 to 2014 and is a prominent technologist and pioneer in developing and using innovation best practices.
          <br/><br/>
          While CEO of SRI International, revenue tripled to $550 million per year and tens of billions of dollars of new marketplace value was created, such as through Siri, an SRI spin-off company that was bought by Steve Jobs at Apple. While Carlson was CEO Mayfield Ventures partner, David Ladd, said, “SRI is now the best enterprise at turning its technology into economic value.”
        </p>

        <footer>
          <p>
            Preço/hora
            <strong>R$ 80,00</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="Whatsapp" />
            Entrar em Contato
          </button>
        </footer>
      </article>
  );
}

export default TeacherItem;