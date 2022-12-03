import React, { useState, useEffect } from 'react';
import { getAllUsers, getAllPagedUsers, getDetailsUsers, login } from '../../services/fetchExample';

import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Chip, Divider, IconButton, Switch, Typography } from '@mui/material';
import { Edit, LocationOn } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import { Box } from '@mui/system';

const FetchEmample = () => {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [totalUsers, setTotalUsers] = useState(12);
    const [usersPerPage, setUsersPerPage] = useState(6)
    const [pages, setPages] = useState(2);


    useEffect(() => {
        obatainUsers();
    }, []);

    const obatainUsers = () => {
        getAllUsers()
            .then((response) => {
                console.log("todo los usuarios: ", response.data)
                setUsers(response.data)
            })
            .catch((err) => {
                alert(`A ocurrido un problema ${err}`)
            })
            .finally(() => console.table(users))
    }

    const obtainPagedUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                console.log('All Paged Users', response.data);
                setUsers(response.data);
                setTotalUsers(response.total);
                setUsersPerPage(response.per_page);
                setPages(response.total_pages);
            })
            .catch((error) => {
                alert(`Error while retreiving the users: ${error}`)
            })
            .finally(() => {
                console.log('Ended obtaining users:');
                console.table(users);
            });
    }

    const obtainUserDetails = (id) => {
        getDetailsUsers(id)
            .then((response) => {
                setSelectedUser(response.data)
            })
            .catch((error) => {
                alert(`Error while retreiving the users: ${error}`)
            })
            .finally(() => {
                console.log('Ended obtaining datails users:');
                console.table(selectedUser);
            });
    }


    const authUser = () => {
        login('eve.holt@reqres.in', 'cityslicka')
            .then((response) => {
                console.log('Token', response.token);
                sessionStorage.setItem('TOKEN', response.token);
                
            })
            .catch((error) => {
                alert(`Error while login users: ${error}`)
            })
            .finally(() => {
                console.log('Ended login users:');
                console.table(selectedUser);
            });
    }






    return (
        <div>
            <h2>
                Users
            </h2>
            {
                users.map((user, index) => {
                    return (<p key={index} onClick={() => obtainUserDetails(user.id)}>
                        {user.first_name} {user.last_name}
                    </p>)
                })
            }

            <p>Showing {usersPerPage} users of {totalUsers} in total.</p>
            <button onClick={() => obtainPagedUsers(1)}>
                1
            </button>
            <button onClick={() => obtainPagedUsers(2)}>
                2
            </button>

            <div>
                {selectedUser != null ?
                    (
                        <div>
                            <h3>
                                User Details
                            </h3>
                            <p>Name: {selectedUser.first_name}</p>
                            <p>Last Name: {selectedUser.last_name}</p>
                            <p>Email: {selectedUser.email}</p>
                            <img alt='Avatar' src={selectedUser.avatar} style={{ height: '150px', width: '150px' }} />
                        </div>
                    ) :
                    (<h5>Please click on a User to see its details</h5>)
                }
            </div>


            <button onClick={() => authUser()}>
                LOGIN
            </button>






        </div>



        // todos los usuario con elemento card de material_ui
        // <div>

        //     {

        //         users.map((user) => {
        //             return (

        //                 <Card>
        //                     <Box sx={{ p: 2, display: 'flex' }}>
        //                         <Avatar variant="rounded" src={user.avatar} />
        //                         <Stack spacing={0.5}>
        //                             <Typography fontWeight={700}>{`${user.first_name} ${user.last_name}`}</Typography>
        //                             <Typography variant="body2" color="text.secondary">
        //                                 <LocationOn sx={{ color: grey[500] }} />{user.email}
        //                             </Typography>
        //                         </Stack>
        //                         <IconButton>
        //                             <Edit sx={{ fontSize: 14 }} />
        //                         </IconButton>
        //                     </Box>
        //                     <Divider />
        //                     <Stack
        //                         direction="row"
        //                         alignItems="center"
        //                         justifyContent="space-between"
        //                         sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
        //                     >
        //                         <Chip>Active account</Chip>
        //                         <Switch />
        //                     </Stack>
        //                 </Card>
        //             )
        //         })

        //     }



        //     <p>Showing {usersPerPage} users of {totalUsers} in total.</p>
        //     <button onClick={() => obtainPagedUsers(1)}>
        //         1
        //     </button>
        //     <button onClick={() => obtainPagedUsers(2)}>
        //         2
        //     </button>

        // </div>


    );
}

export default FetchEmample;
