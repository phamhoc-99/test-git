//boc 2 thanh ngang
import React from 'react';
import './listPhoto.css'

import ListProduct from './../ListProduct/ListProduct';

class CategoryBegin extends React.Component {
     render() {
          return (
               <div className="bg-light">
                    <div className="container">
                         <div className="categories__post">
                              <div className="container bg-white ">
                                   <div className="row">
                                        <div className="w-full md:w-full border-right">
                                             <ListProduct />
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          );
     }
}

export default CategoryBegin;