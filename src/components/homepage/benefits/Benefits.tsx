import React, {useRef, useState} from 'react';

import './Benefits.css';

import checkImg from '../../../assets/images/check-img.png';
import xImg from '../../../assets/images/x-mark.png';
import {useIsVisible} from "../../../utils/Utils";

function Benefits() {
    const ref = useRef(null);
    const isVisible = useIsVisible(ref);

    const [mobileBenefitsDisplayed, setMobileBenefitsDisplayed] = useState('signature');

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const element = event.currentTarget.dataset.benefits === undefined? '': event.currentTarget.dataset.benefits;
        setMobileBenefitsDisplayed(element);
    };

    return (
        <section id="benefits" className={isVisible? 'fade-in-visible show': 'fade-in-visible'} ref={ref}>
            <div className="benefits-inner">
                <h2>Benefits</h2>
                <div className="row text-inner">
                    {/* <div className="col-md-6">
                        <p>Holders of the IT’S JUST A JOKE card collection get access to</p>
                        <p>Join us on this hilarious and meaningful journey! Buy one of our NFT joke cards today and become a part of a community that's making the world a better place, one joke at a time!</p>
                    </div> */}
                    <div className="col-md-12">
                        <p>As a member of our community, you'll have access to exclusive content, comedy events and festivals, behind-the-scenes glimpses into the creation of our joke cards, and opportunities to connect with other comedy lovers.</p>
                        <p>Holders of the IT’S JUST A JOKE card collection get access to:</p>
                        {/* <p>We're committed to creating a safe, inclusive, and supportive environment where everyone can feel welcome and valued</p> */}
                    </div>
                </div>

                <div className="row benefits-table benefits-table-desktop">
                    <div className="row first-row-benefits-table">
                        <div className="col-md-4 transparent">
                            <p>Features</p>
                        </div>
                        <div className="col-md-2 black">
                            <p>Signature <br/>Card</p>
                        </div>
                        <div className="col-md-2 silver">
                            <p>Silver <br/>Card</p>
                        </div>
                        <div className="col-md-2 gold">
                            <p>Gold <br/>Card</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 transparent">
                            <p>Exclusive access and discounts to IRL comedy events</p>
                        </div>
                        <div className="col-md-2 black">
                            <div className="black-inner">
                                <img src={checkImg} alt="checked"/>
                            </div>
                        </div>
                        <div className="col-md-2 silver">
                            <div className="silver-inner">
                                <img src={checkImg} alt="checked"/>
                            </div>
                        </div>
                        <div className="col-md-2 gold">
                            <div className="gold-inner">
                                <img src={checkImg} alt="checked"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 transparent">
                            <p>Exclusive access to limited-edition merch & memorabilia store (“Y C A  F”)</p>
                        </div>
                        <div className="col-md-2 black">
                            <div className="black-inner">
                                <img src={checkImg} alt="checked"/>
                            </div>
                        </div>
                        <div className="col-md-2 silver">
                            <div className="silver-inner">
                                <img src={checkImg} alt="checked"/>
                            </div>
                        </div>
                        <div className="col-md-2 gold">
                            <div className="gold-inner">
                                <img src={checkImg} alt="checked"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 transparent">
                            <p>Access to IRL Community Only Events (BBQs, comedy shows, bars, etc.)</p>
                        </div>
                        <div className="col-md-2 black">
                            <div className="black-inner">
                                <img src={checkImg} alt="checked"/>
                                <h5>(RSVP)</h5>
                            </div>
                        </div>
                        <div className="col-md-2 silver">
                            <div className="silver-inner">
                                <img src={checkImg} alt="checked"/>
                                <h5>(PRIORITY)</h5>
                            </div>
                        </div>
                        <div className="col-md-2 gold">
                            <div className="gold-inner">
                                <img src={checkImg} alt="checked"/>
                                <h5>(GUARANTEED)</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 transparent">
                            <p>Guaranteed Invitation to VIP Merch Launch Event</p>
                        </div>
                        <div className="col-md-2 black">
                            <div className="black-inner">
                                <img src={checkImg} alt="checked"/>
                                <h5>(RSVP)</h5>
                            </div>
                        </div>
                        <div className="col-md-2 silver">
                            <div className="silver-inner">
                                <img src={checkImg} alt="checked"/>
                            </div>
                        </div>
                        <div className="col-md-2 gold">
                            <div className="gold-inner">
                                <img src={checkImg} alt="checked"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 transparent">
                            <p>Free “LOL Face” PFP NFT - Drop 02</p>
                        </div>
                        <div className="col-md-2 black">
                            <div className="black-inner">
                                <img src={checkImg} alt="checked"/>
                                <h5>(1 Free)</h5>
                            </div>
                        </div>
                        <div className="col-md-2 silver">
                            <div className="silver-inner">
                                <img src={checkImg} alt="checked"/>
                                <h5>(2 Free)</h5>
                            </div>
                        </div>
                        <div className="col-md-2 gold">
                            <div className="gold-inner">
                                <img src={checkImg} alt="checked"/>
                                <h5>(5 Free)</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 transparent">
                            <p>First access to Jokesters podcasts series and live tapings</p>
                        </div>
                        <div className="col-md-2 black">
                            <div className="black-inner">
                                <img src={checkImg} alt="checked"/>
                                <h5>(RSVP)</h5>
                            </div>
                        </div>
                        <div className="col-md-2 silver">
                            <div className="silver-inner">
                                <img src={checkImg} alt="checked"/>
                            </div>
                        </div>
                        <div className="col-md-2 gold">
                            <div className="gold-inner">
                                <img src={checkImg} alt="checked"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 transparent">
                            <p>Free tickets to Televised TV comedy shows and late night specials</p>
                        </div>
                        <div className="col-md-2 black">
                            <div className="black-inner">
                                <img src={xImg} alt="checked"/>
                            </div>
                        </div>
                        <div className="col-md-2 silver">
                            <div className="silver-inner">
                                <img src={checkImg} alt="checked"/>
                            </div>
                        </div>
                        <div className="col-md-2 gold">
                            <div className="gold-inner">
                                <img src={checkImg} alt="checked"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 transparent">
                            <p>Free custom “NFTs Are A Joke” Hoodie</p>
                        </div>
                        <div className="col-md-2 black">
                            <div className="black-inner">
                                <img src={xImg} alt="checked"/>
                            </div>
                        </div>
                        <div className="col-md-2 silver">
                            <div className="silver-inner">
                                <img src={checkImg} alt="checked"/>
                            </div>
                        </div>
                        <div className="col-md-2 gold">
                            <div className="gold-inner">
                                <img src={checkImg} alt="checked"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 transparent">
                            <p>Limited Edition Autographed items from comedians and VIP partners</p>
                        </div>
                        <div className="col-md-2 black">
                            <div className="black-inner">
                                <img src={xImg} alt="checked"/>
                            </div>
                        </div>
                        <div className="col-md-2 silver">
                            <div className="silver-inner">
                                <img src={checkImg} alt="checked"/>
                            </div>
                        </div>
                        <div className="col-md-2 gold">
                            <div className="gold-inner">
                                <img src={checkImg} alt="checked"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 transparent">
                            <p>IRL Private Comedy show for you and up to 25 invited friends</p>
                        </div>
                        <div className="col-md-2 black">
                            <div className="black-inner">
                                <img src={xImg} alt="checked"/>
                            </div>
                        </div>
                        <div className="col-md-2 silver">
                            <div className="silver-inner">
                                <img src={xImg} alt="checked"/>
                            </div>
                        </div>
                        <div className="col-md-2 gold">
                            <div className="gold-inner">
                                <img src={checkImg} alt="checked"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 transparent">
                            <p>Lifetime access to all Laugh out Labs projects (free mints for ALL future drops)</p>
                        </div>
                        <div className="col-md-2 black">
                            <div className="black-inner">
                                <img src={xImg} alt="checked"/>
                            </div>
                        </div>
                        <div className="col-md-2 silver">
                            <div className="silver-inner">
                                <img src={xImg} alt="checked"/>
                            </div>
                        </div>
                        <div className="col-md-2 gold">
                            <div className="gold-inner">
                                <img src={checkImg} alt="checked"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 transparent">
                            <p>Private Dinner for you and 4 lucky friends with a famous comedian</p>
                        </div>
                        <div className="col-md-2 black">
                            <div className="black-inner">
                                <img src={xImg} alt="checked"/>
                            </div>
                        </div>
                        <div className="col-md-2 silver">
                            <div className="silver-inner">
                                <img src={xImg} alt="checked"/>
                            </div>
                        </div>
                        <div className="col-md-2 gold">
                            <div className="gold-inner">
                                <img src={checkImg} alt="checked"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row benefits-filters-mobile">
                    <button
                        onClick={handleButtonClick}
                        data-benefits="signature"
                        className={mobileBenefitsDisplayed === 'signature'? 'active': ''}
                    >Signature</button>
                    <button
                        onClick={handleButtonClick}
                        data-benefits="silver"
                        className={mobileBenefitsDisplayed === 'silver'? 'active': ''}
                    >Silver</button>
                    <button
                        onClick={handleButtonClick}
                        data-benefits="gold"
                        className={mobileBenefitsDisplayed === 'gold'? 'active': ''}
                    >Gold</button>
                </div>

                {mobileBenefitsDisplayed === 'signature' && (
                    <div className="row benefits-table benefits-table-mobile">

                        <div className="row first-row-benefits-table">
                            <div className="col-6 transparent">
                                <p>Features</p>
                            </div>
                            <div className="col-6 black">
                                <p>Signature</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>Exclusive access and discounts to IRL comedy events</p>
                            </div>
                            <div className="col-6 black">
                                <div className="black-inner">
                                    <img src={checkImg} alt="checked"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>Exclusive access to limited-edition merch & memorabilia store (“Y C A  F”)</p>
                            </div>
                            <div className="col-6 black">
                                <div className="black-inner">
                                    <img src={checkImg} alt="checked"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>Access to IRL Community Only Events (BBQs, comedy shows, bars, etc.)</p>
                            </div>
                            <div className="col-6 black">
                                <div className="black-inner">
                                    <img src={checkImg} alt="checked"/>
                                    <h5>(RSVP)</h5>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>Guaranteed Invitation to VIP Merch Launch Event</p>
                            </div>
                            <div className="col-6 black">
                                <div className="black-inner">
                                    <img src={checkImg} alt="checked"/>
                                    <h5>(RSVP)</h5>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>Free “LOL Face” PFP NFT - Drop 02</p>
                            </div>
                            <div className="col-6 black">
                                <div className="black-inner">
                                    <img src={checkImg} alt="checked"/>
                                    <h5>(1 Free)</h5>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>First access to Jokesters podcasts series and live tapings</p>
                            </div>
                            <div className="col-6 black">
                                <div className="black-inner">
                                    <img src={checkImg} alt="checked"/>
                                    <h5>(RSVP)</h5>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>Free tickets to Televised TV comedy shows and late night specials</p>
                            </div>
                            <div className="col-6 black">
                                <div className="black-inner">
                                    <img src={xImg} alt="checked"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>Free custom “NFTs Are A Joke” Hoodie</p>
                            </div>
                            <div className="col-6 black">
                                <div className="black-inner">
                                    <img src={xImg} alt="checked"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>Limited Edition Autographed items from comedians and VIP partners</p>
                            </div>
                            <div className="col-6 black">
                                <div className="black-inner">
                                    <img src={xImg} alt="checked"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>IRL Private Comedy show for you and up to 25 invited friends</p>
                            </div>
                            <div className="col-6 black">
                                <div className="black-inner">
                                    <img src={xImg} alt="checked"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>Lifetime access to all Laugh out Labs projects (free mints for ALL future drops)</p>
                            </div>
                            <div className="col-6 black">
                                <div className="black-inner">
                                    <img src={xImg} alt="checked"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>Private Dinner for you and 4 lucky friends with a famous comedian</p>
                            </div>
                            <div className="col-6 black">
                                <div className="black-inner">
                                    <img src={xImg} alt="checked"/>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {mobileBenefitsDisplayed === 'gold' && (
                    <div className="row benefits-table benefits-table-mobile">

                        <div className="row first-row-benefits-table">
                            <div className="col-6 transparent">
                                <p>Features</p>
                            </div>
                            <div className="col-6 gold">
                                <p>Gold</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>Exclusive access and discounts to IRL comedy events</p>
                            </div>
                            <div className="col-6 gold">
                                <div className="gold-inner">
                                    <img src={checkImg} alt="checked"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>Exclusive access to limited-edition merch & memorabilia store (“Y C A  F”)</p>
                            </div>
                            <div className="col-6 gold">
                                <div className="gold-inner">
                                    <img src={checkImg} alt="checked"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>Access to IRL Community Only Events (BBQs, comedy shows, bars, etc.)</p>
                            </div>
                            <div className="col-6 gold">
                                <div className="gold-inner">
                                    <img src={checkImg} alt="checked"/>
                                    <h5>(GUARANTEED)</h5>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>Guaranteed Invitation to VIP Merch Launch Event</p>
                            </div>
                            <div className="col-6 gold">
                                <div className="gold-inner">
                                    <img src={checkImg} alt="checked"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>Free “LOL Face” PFP NFT - Drop 02</p>
                            </div>
                            <div className="col-6 gold">
                                <div className="gold-inner">
                                    <img src={checkImg} alt="checked"/>
                                    <h5>(5 Free)</h5>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>First access to Jokesters podcasts series and live tapings</p>
                            </div>
                            <div className="col-6 gold">
                                <div className="gold-inner">
                                    <img src={checkImg} alt="checked"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>Free tickets to Televised TV comedy shows and late night specials</p>
                            </div>
                            <div className="col-6 gold">
                                <div className="gold-inner">
                                    <img src={checkImg} alt="checked"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>Free custom “NFTs Are A Joke” Hoodie</p>
                            </div>
                            <div className="col-6 gold">
                                <div className="gold-inner">
                                    <img src={checkImg} alt="checked"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>Limited Edition Autographed items from comedians and VIP partners</p>
                            </div>
                            <div className="col-6 gold">
                                <div className="gold-inner">
                                    <img src={checkImg} alt="checked"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>IRL Private Comedy show for you and up to 25 invited friends</p>
                            </div>
                            <div className="col-6 gold">
                                <div className="gold-inner">
                                    <img src={checkImg} alt="checked"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>Lifetime access to all Laugh out Labs projects (free mints for ALL future drops)</p>
                            </div>
                            <div className="col-6 gold">
                                <div className="gold-inner">
                                    <img src={checkImg} alt="checked"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>Private Dinner for you and 4 lucky friends with a famous comedian</p>
                            </div>
                            <div className="col-6 gold">
                                <div className="gold-inner">
                                    <img src={checkImg} alt="checked"/>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {mobileBenefitsDisplayed === 'silver' && (
                    <div className="row benefits-table benefits-table-mobile">

                        <div className="row first-row-benefits-table">
                            <div className="col-6 transparent">
                                <p>Features</p>
                            </div>
                            <div className="col-6 silver">
                                <p>Silver</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>Exclusive access and discounts to IRL comedy events</p>
                            </div>
                            <div className="col-6 silver">
                                <div className="silver-inner">
                                    <img src={checkImg} alt="checked"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>Exclusive access to limited-edition merch & memorabilia store (“Y C A  F”)</p>
                            </div>
                            <div className="col-6 silver">
                                <div className="silver-inner">
                                    <img src={checkImg} alt="checked"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>Access to IRL Community Only Events (BBQs, comedy shows, bars, etc.)</p>
                            </div>
                            <div className="col-6 silver">
                                <div className="silver-inner">
                                    <img src={checkImg} alt="checked"/>
                                    <h5>(PRIORITY)</h5>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>Guaranteed Invitation to VIP Merch Launch Event</p>
                            </div>
                            <div className="col-6 silver">
                                <div className="silver-inner">
                                    <img src={checkImg} alt="checked"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>Free “LOL Face” PFP NFT - Drop 02</p>
                            </div>
                            <div className="col-6 silver">
                                <div className="silver-inner">
                                    <img src={checkImg} alt="checked"/>
                                    <h5>(2 Free)</h5>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>First access to Jokesters podcasts series and live tapings</p>
                            </div>
                            <div className="col-6 silver">
                                <div className="silver-inner">
                                    <img src={checkImg} alt="checked"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>Free tickets to Televised TV comedy shows and late night specials</p>
                            </div>
                            <div className="col-6 silver">
                                <div className="silver-inner">
                                    <img src={checkImg} alt="checked"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>Free custom “NFTs Are A Joke” Hoodie</p>
                            </div>
                            <div className="col-6 silver">
                                <div className="silver-inner">
                                    <img src={checkImg} alt="checked"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>Limited Edition Autographed items from comedians and VIP partners</p>
                            </div>
                            <div className="col-6 silver">
                                <div className="silver-inner">
                                    <img src={checkImg} alt="checked"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>IRL Private Comedy show for you and up to 25 invited friends</p>
                            </div>
                            <div className="col-6 silver">
                                <div className="silver-inner">
                                    <img src={xImg} alt="checked"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>Lifetime access to all Laugh out Labs projects (free mints for ALL future drops)</p>
                            </div>
                            <div className="col-6 silver">
                                <div className="silver-inner">
                                    <img src={xImg} alt="checked"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 transparent">
                                <p>Private Dinner for you and 4 lucky friends with a famous comedian</p>
                            </div>
                            <div className="col-6 silver">
                                <div className="silver-inner">
                                    <img src={xImg} alt="checked"/>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}

export default Benefits;