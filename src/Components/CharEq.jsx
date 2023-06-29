import { useEffect, useState } from 'react';



const CharacterEq = ({ char }) => {
    const [equipment, setEquipment] = useState({});
    const getSpecColor = (e) => {
      switch (e) {
        case 'Mage':
          return "text-blue-300";
        case 'Monk':
          return "text-green-500";
        case 'Rogue':
          return "text-yellow-300";
        case 'Death Knight':
          return "text-red-500";
        case 'Druid':
          return "text-orange-400";
        case 'Hunter':
          return "text-green-300";
        case 'Priest':
          return "text-white";
        case 'Paladin':
          return "text-pink-300";
        case 'Shaman':
          return "text-blue-500";
        case 'Warlock':
          return "text-purple-700";
        case 'Warrior':
          return "text-amber-800";
        case 'Demon Hunter':
          return "text-purple-500";
        case 'Evoker':
          return "text-green-700";
        
      }
    }
      const [screenSize, setScreenSize] = useState(getCurrentDimension());
    
        function getCurrentDimension(){
          return {
              width: window.innerWidth,
              height: window.innerHeight
          }
        }
      
        useEffect(() => {
            const updateDimension = () => {
                setScreenSize(getCurrentDimension())
            }
            window.addEventListener('resize', updateDimension);
        
        
            return(() => {
                window.removeEventListener('resize', updateDimension);
            })
        }, [screenSize])
    useEffect(() => {
      if (char && char.name && char.realm && char.region) {
        fetch(`https://raider.io/api/v1/characters/profile?region=${char.region}&realm=${char.realm}&name=${char.name}&fields=gear%2Cguild%2Ctalents%2Craid_progression`)
          .then(response => response.json())
          .then((data) => setEquipment(data))
          .catch(err => console.warn(err));
      }
    }, [char])
    useEffect(() => {
      console.log(equipment);
    }, [equipment])
    return (
    <div className='p-5 mt-5 flex flex-col gap-4 items-start'>
      <div className='flex gap-5'>
        {equipment.thumbnail_url && <img src={equipment.thumbnail_url} className='rounded-xl' alt="" />}
        <div className=''>
          {equipment.name && <p>{equipment.name}</p>}
          {equipment.guild && <p><a className='hover:text-lime-400 transition-colors duration-300 ease-in-out' href={`https://worldofwarcraft.blizzard.com/en-us/guild/${char.region}/${char.realm}/${equipment.guild.name}`}>{`<${equipment.guild.name}>`}</a></p>}
          {equipment.active_spec_name && <p className={`${getSpecColor(equipment.class)}`}>{`${equipment.active_spec_name} ${equipment.class}`}</p>}
        </div>
      </div>
      <div className=''>
        {equipment.name && <a className='hover:text-lime-400 transition-colors duration-300 ease-in-out' href={`https://www.raidbots.com/simbot/render/talents/${equipment.talentLoadout.loadout_text}?width=800&level=70&bgcolor=242424`}>Check Talents here</a>}
      </div>
    </div>
    );
  };
  
  export default CharacterEq;