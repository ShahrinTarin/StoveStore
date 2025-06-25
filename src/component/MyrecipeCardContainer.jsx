import React, { use, useState } from 'react';
import MyRecipeCard from './MyRecipeCard';
import { AuthContext } from '../provider/AuthProvider';
import EmptyPage from './EmptyPage';
import Swal from 'sweetalert2';

const MyrecipeCardContainer = ({ initialRecipes }) => {
    const { user } = use(AuthContext);
    const myrecipes = initialRecipes.filter(myrecipe => myrecipe.email == user?.email)
    const [myRecipes, setMyRecipes] = useState(myrecipes)
    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    const updatedRecipes = myRecipes.filter((myRecipe) => myRecipe._id !== _id);
                    setMyRecipes(updatedRecipes);
                    fetch(`https://assignment-10-server-blond-ten.vercel.app/recipe/${_id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deleteCount) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your Recipe has been deleted.",
                                    icon: "success"
                                });
                            }
                        })


                }
            });
    }


    return (
        <div>
            <div className='grid grid-cols-1 p-5 lg:p-12 lg:grid-cols-2 gap-10 gap-y-8 md:w-11/12 mx-auto'>
                {
                    (myRecipes.length === 0) ? <EmptyPage></EmptyPage> : myRecipes.map(recipe => <MyRecipeCard handleDelete={handleDelete} key={recipe._id} recipe={recipe}></MyRecipeCard>)
                }
            </div>
        </div>
    );
};

export default MyrecipeCardContainer;