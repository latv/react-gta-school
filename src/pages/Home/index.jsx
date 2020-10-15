import React from 'react';
import "./style.css";
import { NavLink } from 'react-router-dom';
const Home = () => {

    return (

        <>
        <div name="about" class="about">
            <p>Grand Theft Auto ir brīvā stila datorspēle, kuru izveidoja Deivs Džons un galvenokārt to izstrādā skotu
                kompānija Rockstar North (pirms tam DMA Design) un publicē Rockstar Games.</p>
            <p>Spēle sastāv no darbības, piedzīvojumu, braukšanas, lomu, šaušanas un sacensību spēļu elementiem. Spēle
                ir par kādu noziedznieku, kurš cenšas izrauties priekšā un kļūt bagāts. Līdz 2008. gada martam sērija ir
                pārdevusi vairāk kā 70 miljonu kopiju. Sērijā šobrīd ir vienpadsmit spēles un divpadsmito spēli šobrīd
                izstrādā Nintendo DS konsolei.</p>
        </div>

        <div name="table">
            <table class="gtaTable">
                <tr>
                    <th>Gads</th>
                    <th>Nosaukums</th>
                    <th>izstrādātāji</th>

                </tr>
                <tr>
                    <td>1997</td>
                    <td>Grand Theft Auto</td>
                    <td rowspan="3">DMA Design</td>
                </tr>
                <tr>
                    <td>1999</td>
                    <td>Grand Theft Auto 2</td>
                </tr>
                <tr>
                    <td>2001</td>
                    <td>Grand Theft Auto III</td>

                </tr>
                <tr>
                    <td>2002</td>
                    <td>Grand Theft Auto: Vice City</td>
                    <td rowspan="4">Rockstar North</td>
                </tr>
                <tr>
                    <td>2004</td>
                    <td>Grand Theft Auto: San Andreas</td>

                </tr>
                <tr>
                    <td>2008</td>
                    <td>Grand Theft Auto IV</td>

                </tr>
                <tr>
                    <td>2013</td>
                    <td>Grand Theft Auto V
                    </td>

                </tr>
            </table>

        </div>
        </>
    )

}
export default Home;