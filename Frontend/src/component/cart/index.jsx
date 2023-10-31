import styles from './style.module.css'
import getRoute from '../../server';
import {setMoreDetailsAlert}  from '../alerts/cart.jsx';
import { useContext } from 'react';
import CartContext from '../../context/cart/Context';

export default function Items() {
    const { seller,productDetails,deleteFromCart,updateQuantity } = useContext(CartContext);
    

    const prodArr = productDetails.map(function (item, i) {
        if(item.product_id==null){
            return(
                <div className="col-12 col-md-3 pt-5" key={i}>
                    <div className={`${styles.card} card`}>
                        <div className={styles.img}>
                         <img className={styles.image} src={getRoute('/' + item.img)} alt="no-products.jpg" />
                         <div className={`${styles.cardText} card-text pl-2 pt-4`}>
                         <h5>Product Deleted!!</h5>
                         <p>Product is not Available</p>
                         <p>Or deleted from database</p>
                         <p>You may delete this product.</p>
                         </div>
               <div className={`${styles.btnn} btnn d-flex justify-content-around`}>
                  <button type="submit" className={`${styles.btn} btn btn-danger`} onClick={deleteFromCart(item.cart_id,i)}>Delete</button>
               </div>
               
                        </div>
                    </div>
                </div>
            )
        }else{
           console.log(item)
            return(
            <div className="col-12 col-md-3 pt-5" key={i}>
         <div className={`${styles.card} card`}>
            <div className={styles.img}>
               <img className={styles.image} src={getRoute('/images/' + item.cartItems[0].img)} alt={item.cartItems[0].img} />
               <div className={`${styles.cardText} card-text pl-2 pt-3`}>
                  <h5>{item.cartItems[0].p_name}</h5>
                  <p>Price: ₹{item.cartItems[0].price}</p>
                  <p>Seller(discount): <br/><select className="form-control-sm">
                        <option>{item.cartItems[0].s_name}</option>
                        {seller.map(function(sell,k){
                                if(item.cartItems[0].product_id==sell.product_id)
                                    return(
                                        <option key={k}>{sell.s_name} ({sell.discount}%)</option>
                                    )
                                })
                        }

                        </select></p>
                    <p>shipping_charges: </p>
                  <p>Quantity: <span>{(item.stock < item.quantity)?"<strike>"+item.quantity+"</strike>":item.quantity} </span><button className="btn btn-primary ml-2" onClick={updateQuantity(item._id,0)}>-</button><button className="btn btn-primary ml-2" onClick={updateQuantity(item._id,1)}>+</button></p>
                  <span style={{color:"red"}}>{(item.stock < item.quantity)?"Out of stock":""}</span>
                  </div>
               <div className={`${styles.btnn} btnn d-flex justify-content-around`}>
                  <button type="submit" className={`${styles.btn} btn btn-danger`} onClick={deleteFromCart(item._id,i)}>Delete</button>
                  <button className={`${styles.btn} btn btn-success`} onClick={setMoreDetailsAlert(item)}>View</button>
               </div>
            </div>
         </div>
      </div>
            )
        }
    })
    return (
        <>{prodArr}</>
            
    )
}
 