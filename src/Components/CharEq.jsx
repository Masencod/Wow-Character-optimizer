import { useEffect, useState } from 'react';



const CharacterEq = ({ char }) => {
    const [equipment, setEquipment] = useState({});
    const [weekly, setWeekly] = useState('');
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
    const getWeekly = (e) => {
      switch (e) {
        case 20:
          return 447;
        case 19:
          return "444";
        case 18:
          return "444";
        case 17:
          return "441";
        case 16:
          return "441";
        case 15:
          return "437";
        case 14:
          return "437";
        case 13:
          return "434";
        case 12:
          return "434";
        case 11:
          return "431";
        case 10:
          return "431";
        case 9:
          return "428";
        case 8:
          return "428";
        case 7:
          return "424";
        case 6:
          return "424";
        case 5:
          return "421";
        case 4:
          return "421";
        case 3:
          return "418";
        case 2:
          return "415";
      }
    }
    useEffect(() => {
      if (char && char.name && char.realm && char.region) {
        fetch(`https://raider.io/api/v1/characters/profile?region=${char.region}&realm=${char.realm}&name=${char.name}&fields=gear%2Cguild%2Ctalents%2Craid_progression%2Cmythic_plus_scores_by_season%2Cmythic_plus_weekly_highest_level_runs`)
          .then(response => response.json())
          .then((data) => setEquipment(data))
          .catch(err => console.warn(err));
      }
    }, [char])
    useEffect(() => {
      if (equipment.name) {
        console.log(equipment)
        const firsWeekly = equipment.mythic_plus_weekly_highest_level_runs.map(e => e.mythic_level).sort((a,b) => a-b).splice(1,1)
        const secondWeekly = equipment.mythic_plus_weekly_highest_level_runs.map(e => e.mythic_level).sort((a,b) => a-b).splice(1,4)
        const thirdWeekly = equipment.mythic_plus_weekly_highest_level_runs.map(e => e.mythic_level).sort((a,b) => a-b).splice(1,8)
        const weeklies = `[${firsWeekly.length > 0 ? getWeekly(firsWeekly.shift()) : 0}-${secondWeekly.length > 3 ? getWeekly(secondWeekly.shift()) : 0}-${thirdWeekly.length > 7 ? thirdWeekly.shift() : 0}]`
        setWeekly(weeklies)
      }
      
    }, [equipment])
    return (
    <div className='mt-5 flex flex-col gap-4 items-start justify-center items-center sm:flex-row sm:items-center'>
      <div className='flex gap-5'>
        {equipment.thumbnail_url && <img src={equipment.thumbnail_url} className='rounded-xl' alt="" />}
        <div className=''>
          {equipment.name && <a className='hover:text-lime-400 transition-colors duration-300 ease-in-out' href={`https://worldofwarcraft.blizzard.com/en-gb/character/${char.region}/${char.realm}/${char.name}`}>{equipment.name}</a>}
          {equipment.guild && <p><a className='hover:text-lime-400 transition-colors duration-300 ease-in-out' href={`https://worldofwarcraft.blizzard.com/en-us/guild/${char.region}/${char.realm}/${equipment.guild.name}`}>{`<${equipment.guild.name}>`}</a></p>}
          {equipment.active_spec_name && <p className={`${getSpecColor(equipment.class)}`}>{`${equipment.active_spec_name} ${equipment.class}`}</p>}
        </div>
        <div className='grid grid-cols-2 grid-rows-2 gap-x-5'>
          {equipment.guild && <a href={`https://wowanalyzer.com/character/${char.region}/${char.realm}/${char.name}/`}><img className='h-6 w-6 rounded-full' src="/src/assets/ANALYZE.png" alt="wowanalyzer" /></a>}
          {equipment.guild && <a href={`https://raider.io/characters/${char.region}/${char.realm}/${char.name}`}><img className='h-6 w-6 rounded-full' src="/src/assets/rio.webp" alt="raider.io" /></a>}
          {equipment.guild && <a href={`https://www.warcraftlogs.com/character/${char.region}/${char.realm}/${char.name}`}><img className='h-6 w-6 rounded-full' src="/src/assets/WLOGS.jpg" alt="warcraft logs" /></a>}
          {equipment.guild && <a href={`https://www.raidbots.com/simbot/quick?region=${char.region}&realm=${char.realm}&name=${char.name}`}><img className='h-6 w-6 rounded-full' src="/src/assets/bots.webp" alt="raidbots" /></a>}
        </div>
      </div>
      <div className='mb-5 flex gap-x-4'>
        {equipment.name && <a className='hover:text-lime-400 transition-colors duration-300 ease-in-out' href={`https://www.raidbots.com/simbot/render/talents/${equipment.talentLoadout.loadout_text}?width=800&level=70&bgcolor=242424`}>Check Talents here</a>}
        {equipment.name && <p>{equipment.raid_progression['aberrus-the-shadowed-crucible'].summary}</p>}
        {equipment.name && <p>{`Ilvl: ${equipment.gear.item_level_equipped}`}</p>}
      </div>
      <div>
        <div>
          {weekly && <p>M+ Vault</p>}
          {weekly && <p>{weekly}</p>}
        </div>
      </div>
    </div>
    );
  };
  
  export default CharacterEq;