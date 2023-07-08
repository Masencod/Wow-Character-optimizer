import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Wlogs = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get access token
        const authResponse = await axios.post(
          'https://www.warcraftlogs.com/oauth/token',
          {
            grant_type: 'client_credentials',
          },
          {
            auth: {
              username: '9998d5df-6b6d-424f-9a9d-c08d3977e620',
              password: '-',
            },
          }
        );
        
        const accessToken = authResponse.data.access_token;

        // Make request to GraphQL API
        const apiResponse = await axios.post(
          'https://www.warcraftlogs.com/api/v2/client',
          {
            query: `
                query {
                    reportData {
                    reports(
                        guildID: null
                        guildName: null
                        startTime: null
                        endTime: null
                        limit: 100
                        classes: ["Mage"]
                        metric: dps
                        difficulty: null
                    ) {
                        data {
                        rank
                        total
                        startTime
                        endTime
                        fightID
                        percentile
                        report {
                            code
                            title
                            owner {
                            name
                            }
                        }
                        character {
                            name
                            server {
                            name
                            }
                        }
                        }
                    }
                    }
                }
            `,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        setData(apiResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        // Render your data here
        <pre>data is here</pre>
      ) : (
        // Render loading state or placeholder
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Wlogs;