import React from 'react'
import styles from './Productour.module.css'

const Productour = () => {
  return (
 <div>
    <div className={styles.ourProducts}>
        <span>Popular Products</span>
        <h2>Our Products</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae{" "}
          <br /> nostrum natus excepturi fuga ullam accusantium vel ut eveniet
          aut <br /> consequatur laboriosam ipsam.
        </p>
      </div>

      <div className={styles.cards}>
        <div className="row">
          <div className="col-4">
            <div className={styles.card}>
              <div className={styles.image}>
                <img className={styles.womens}
                  src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg"
                  alt="image"
                />
              </div>
              <div className={styles.cardtext}>
                <h4>Wild West Hoodie</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur <br /> adipisicing.
                </p>
                <button className="btn btn-outline-dark">Cart</button>
                <button className="btn btn-light">View</button>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className={styles.card}>
              <div className={styles.image}>
                <img className={styles.womens}
                  src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg"
                  alt="image"
                />
              </div>
              <div className={styles.cardtext}>
                <h4>Wild West Hoodie</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur <br /> adipisicing.
                </p>
                <button className="btn btn-outline-dark">Cart</button>
                <button className="btn btn-light">View</button>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className={styles.card}>
              <div className={styles.image}>
                <img className={styles.womens}
                  src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg"
                  alt="image"
                />
              </div>
              <div className={styles.cardtext}>
                <h4>Wild West Hoodie</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur <br /> adipisicing.
                </p>
                <button className="btn btn-outline-dark">Cart</button>
                <button className="btn btn-light">View</button>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className={styles.card}>
              <div className={styles.image}>
                <img className={styles.womens}
                  src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg"
                  alt="image"
                />
              </div>
              <div className={styles.cardtext}>
                <h4>Wild West Hoodie</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur <br /> adipisicing.
                </p>
                <button className="btn btn-outline-dark">Cart</button>
                <button className="btn btn-light">View</button>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className={styles.card}>
              <div className={styles.image}>
                <img className={styles.womens}
                  src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg"
                  alt="image"
                />
              </div>
              <div className={styles.cardtext}>
                <h4>Wild West Hoodie</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur <br /> adipisicing.
                </p>
                <button className="btn btn-outline-dark">Cart</button>
                <button className="btn btn-light">View</button>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className={styles.card}>
              <div className={styles.image}>
                <img className={styles.womens}
                  src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg"
                  alt="image"
                />
              </div>
              <div className={styles.cardtext}>
                <h4>Wild West Hoodie</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur <br /> adipisicing.
                </p>
                <button className="btn btn-outline-dark">Cart</button>
                <button className="btn btn-light">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
 </div>
  )
}

export default Productour
