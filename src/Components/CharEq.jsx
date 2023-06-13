import React, { useEffect, useState } from 'react';

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer EUR1iJkE6C9VJPAEAamM35owruJERZfoz1");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

const CharacterEq = ({ realm, charName }) => {
    const [equipmentSlot, setEquipmentSlot] = useState('');
    const [equipmentImage, setEquipmentImage] = useState('');
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://eu.api.blizzard.com/profile/wow/character/${realm}/${charName}/equipment?namespace=profile-eu&locale=en_US&access_token=EU8xX5qx5zUSj0Mm9vwlIYeB1vMVh4vIBx`, requestOptions);
          if (response.ok) {
            const data = await response.json();
            console.log(data)
            const slotName = data['equipped_items'][0]['slot']['name'];
            setEquipmentSlot(slotName);
          } else {
            throw new Error('Request failed');
          }
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, [realm, charName]);
  
    return (
      <div>
        <p>Equipment Slot: {equipmentSlot}</p>
      </div>
    );
  };
  
  export default CharacterEq;