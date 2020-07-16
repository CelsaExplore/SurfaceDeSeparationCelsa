import config from '../../config';
import React, { Component } from 'react';
import Edito from '../Edito/Edito';
import Element from '../Element/Element';
import Video from '../Video/Video';
import Masthead from '../Masthead/Masthead';
import './Board_web.css';
import move from '../../js/move';

var carteList = ["carte1_web.png","carte2_web.png","carte3_web.png"];
var index = 0;
var carteAct = "carte1_web.png";
var btnL;
var btnR;

function moinsCarte() {
    if (index > 0) {
        index--;
    } else {
        index = 2;
    }

    if (index === 0) {
        btnL = document.getElementById("btnLeft");
        btnL.hidden = true;
        btnR = document.getElementById("btnRight");
        btnR.hidden = false;
    }

    if (index === 1) {
        btnL = document.getElementById("btnLeft");
        btnL.hidden = false;
        btnR = document.getElementById("btnRight");
        btnR.hidden = false;
    }

    if (index === 2) {
        btnL = document.getElementById("btnLeft");
        btnL.hidden = false;
        btnR = document.getElementById("btnRight");
        btnR.hidden = true;
    }

    carteAct = carteList[index];

    var image;
    for(var i = 0; i < 3; i++) {
        if(carteList[i] === carteAct) {
            image = document.getElementById(carteList[i]);
            image.hidden = false;
        } else {
            image = document.getElementById(carteList[i]);
            image.hidden = true;
        }
    }
}

function plusCarte() {
    if (index < 2) {
        index++;
    } else {
        index = 0;
    }

    if (index === 0) {
        btnL = document.getElementById("btnLeft");
        btnL.hidden = true;
        btnR = document.getElementById("btnRight");
        btnR.hidden = false;
    }

    if (index === 1) {
        btnL = document.getElementById("btnLeft");
        btnL.hidden = false;
        btnR = document.getElementById("btnRight");
        btnR.hidden = false;
    }

    if (index === 2) {
        btnL = document.getElementById("btnLeft");
        btnL.hidden = false;
        btnR = document.getElementById("btnRight");
        btnR.hidden = true;
    }

    carteAct = carteList[index];

    var image;
    for(var i = 0; i < 3; i++) {
        if(carteList[i] === carteAct) {
            image = document.getElementById(carteList[i]);
            image.hidden = false;
        } else {
            image = document.getElementById(carteList[i]);
            image.hidden = true;
        }
    }
}

function getSizes() {
    var width = Math.min(document.documentElement.clientWidth, config.ratio.width),
		height = Math.min(document.documentElement.clientHeight, config.ratio.height),
		mobile = false,
        slideWidth = width,
        boardHeight = height,
        boardTop = 0;

	if (width < config.ratio.width) {
		mobile = true;
	}
    if (width / height < config.ratio.width / config.ratio.height) {
        boardHeight = config.ratio.height * width / config.ratio.width;
        boardTop = (document.documentElement.clientHeight - boardHeight) / 2;
	}

    return {
        slideWidth: slideWidth,
        boardHeight: boardHeight,
		boardTop: boardTop,
		mobile : mobile
    }
}

export default class Board_web extends Component {

    constructor(props) {
        super(props);

        this.state = {
            slideWidth:getSizes().slideWidth,
            boardHeight:getSizes().boardHeight,
			boardTop:getSizes().boardTop,
			mobile:getSizes().mobile
        };
    }

    componentDidMount() {
        var _this = this;
        window.addEventListener('resize', function () {
            _this.setState({
                slideWidth:getSizes().slideWidth,
                boardHeight:getSizes().boardHeight,
				boardTop:getSizes().boardTop,
				mobile:getSizes().mobile
            });
        });
        document.getElementById("btnLeft").addEventListener("click", moinsCarte);
        document.getElementById("btnRight").addEventListener("click", plusCarte);
    }

    render() {
        if (window.innerWidth < 1920/2) {
            return (
                <div id="board" className="Board_web" style={{marginTop:this.state.boardTop, left:0,  minWidth:this.state.slideWidth, height: this.state.boardHeight}}>
                    {/*Slide 1*/}
                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p>9 octobre 2019. Jarinje, à la frontière entre</p><p>la Serbie et le Kosovo. Un important dispositif</p><p>policier attend le bus des joueurs de l’Étoile</p><p>Rouge Belgrade. Le club de football serbe est</p><p>attendu dans la ville de Mitrovica pour disputer</p><p>un seizième de finale de Coupe de Serbie face</p><p>au FK Trepča. <b>Une équipe basée au Kosovo</b></p><p><b>mais exclusivement composée de Serbes.</b></p>" positionTop="10%" positionLeft="-10%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                    </div>

                    {/*Slide 2*/}
                    <div className="Board__slide Board__slide--top">
                        <Element idImg="carte1_web.png" name="carte1_web.png" hidde={false} positionTop="2%"/>
                        <Element idImg="carte2_web.png" name="carte2_web.png" hidde={true} positionTop="2%"/>
                        <Element idImg="carte3_web.png" name="carte3_web.png" hidde={true} positionTop="2%"/>
                        <input id="btnLeft" type="button" className="BoutonLeftWeb" hidden={true}/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <input id="btnRight" type="button" className="BoutonRightWeb" hidden={false}/>
                    </div>

                    {/*Slide 3*/}
                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p>Le match aura finalement lieu le lendemain...</p><p>à Belgrade. Pour les autorités kosovares,</p><p>pas question de laisser entrer l’Étoile Rouge</p><p>Belgrade sur ses terres. La Serbie ne reconnaît</p><p>pas l’indépendance, proclamée en 2008,</p><p>de son ancienne province. Le Kosovo, lui,</p><p>considère cette rencontre organisée par la</p><p>Fédération serbe comme une violation de son</p><p>territoire. Pourtant, le FK Trepča participe au</p><p>Championnat serbe.</p>" positionTop="10%" positionLeft="-10%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Element name="titre1Web.png" positionLeft="-55%"/>
                        <Element name="montagne_web.png" index="p2" positionLeft="-20%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:white'><b>À Mitrovica nord, on accepte mal</b></p><p style='color:white'><b>l’indépendance du Kosovo.</b> Les voitures</p><p style='color:white'>ont des plaques d’immatriculation serbes,</p><p style='color:white'>le cyrillique est l’alphabet local et on vous</p><p style='color:white'>rendra la monnaie en dinars si vous payez</p><p style='color:white'>votre café en euros (pourtant la devise</p><p style='color:white'>officielle). C’est dans cette partie de la ville</p><p style='color:white'>que le FK Trepča a ses bureaux, pas son terrain.</p><p style='color:white'>Le club reçoit à Zvečan, petit bourg limitrophe</p><p style='color:white'>sur les hauteurs. Et 4 mois après l’incident</p><p style='color:white'>à la frontière, le stade sonne creux :</p><p style='color:white'>c’est la trêve hivernale.</p>" positionTop="15%" positionLeft="-60%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:white'>Créé en 1932, le FK Trepča évolue aujourd’hui</p><p style='color:white'>dans la 3<sup>e</sup> Division serbe, qui oblige les joueurs</p><p style='color:white'>à parcourir la Serbie et faire de longs voyages</p><p style='color:white'>jusqu’à Bogatić, à 450 km de Mitrovica, ou</p><p style='color:white'>à Rabrovo, à 540 km. Mais pour rien au monde</p><p style='color:white'>le club n'abandonnerait le Championnat serbe</p><p style='color:white'>pour rejoindre le système kosovar.</p>" positionTop="15%" positionLeft="-100%"/>
                        <Element name="stade_web.png" index="p2" positionLeft="-30%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:#87F8D0'>« LES SERBES NOUS</p><p style='color:#87F8D0'>AIDENT. CE SONT EUX</p><p style='color:#87F8D0'>QUI ONT CONSTRUIT</p><p style='color:#87F8D0'>LE STADE »</p><p style='color:white'>PETAR MILOSAVLJEVIC</p>" positionTop="15%" positionLeft="-100%" ti={true}/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Element name="logo_trepca_web.png" positionLeft="-60%"/>
                        <Edito content="<p style='color:white'>Alors, impossible pour le club de recevoir</p><p style='color:white'>des subventions de la municipalité</p><p style='color:white'>de Mitrovica nord, rattachée au pouvoir</p><p style='color:white'>de Pristina, la capitale. Pourtant, les joueurs</p><p style='color:white'>touchent des primes, de 150 à 400 €.</p>" positionTop="15%" positionLeft="-80%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:white'>Mais d’où vient l’argent ? <i>« De Serbie »</i>, répond</p><p style='color:white'>Petar Milosavljevic. Il poursuit : <i>« Les Serbes</i></p><p style='color:white'><i>nous aident. Ce sont eux qui ont construit</i></p><p style='color:white'><i>le stade. »</i> Eux ? La Fédération serbe ?</p><p style='color:white'>Pas de réponse.</p>" positionTop="15%" positionLeft="-140%"/>
                        <Element name="local_web.png" index="p1" positionLeft="-85%"/>
                    </div>

                    {/*Slide 9*/}
                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:#003E3E'>PETAR MILOSAVLJEVIC</p>" contents="<p>Cet ancien joueur du FK Trepca</p><p>à l’époque yougoslave était secrétaire</p><p>du club jusqu’il y a encore 6 mois.</p><p>Un poste qu’il a dû quitter pour</p><p>des raisons de santé, à l’aube</p><p>de ses 81 ans. Petar est le seul,</p><p>côté serbe, à avoir osé s’exprimer.</p><p>La direction, elle, est devenue</p><p>extrêmement méfiante vis-à-vis</p><p>de la presse occidentale, jugée</p><p>partiale et hostile à sa position.</p>" positionTop="30%" positionLeft="-127%" ti={true}/>
                        <Element name="fiche_petar_web.png" positionLeft="-50%"/>
                    </div>

                    {/*Slide 10*/}
                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:white'>L’ex-secrétaire déplore des enjeux politiques</p><p style='color:white'>qui pèsent sur la situation actuelle du club :</p><p style='color:white'><i>« Pour l'instant, il y a encore beaucoup</i></p><p style='color:white'><i>de politique mais, si tu me permets l'expression,</i></p><p style='color:white'><i>la politique c'est de la merde. »</i> Si aujourd’hui</p><p style='color:white'>le FK Trepča survit grâce au maigre soutien</p><p style='color:white'>financier de Belgrade, il fut un temps où il</p><p style='color:white'>pouvait compter sur un mécène de taille :</p><p style='color:white'><b>les mines de Trepca, desquelles</b></p><p style='color:white'><b>le club tire son nom.</b></p>" positionTop="15%" positionLeft="-160%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p>Situées de part et d’autre de Mitrovica,</p><p>elles étaient le fleuron de l'économie</p><p>avant la guerre du Kosovo, entre</p><p>séparatistes albanais et forces</p><p>serbes (1998-1999). À l'époque yougoslave,</p><p>plus de 20 000 personnes y produisaient</p><p>les deux tiers des richesses de la région.</p><p><b>Les mineurs sont rapidement devenus</b></p><p><b>les premiers supporters de l’équipe.</b></p><p><i>« Une partie de leur salaire servait à financer</i></p><p><i>le club »</i>, se souvient Sabit Uka, un ex-joueur</p><p>du FK Trepca et neveu d’un mineur.</p>" positionTop="15%" positionLeft="-145%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:#EB445C'>« LES MINES DE TREPCA ONT</p><p style='color:#EB445C'>ÉTÉ LE POINT DE DÉPART DE</p><p style='color:#EB445C'>L'INDÉPENDANCE DU KOSOVO »</p><p>SABIT UKA</p>" positionTop="15%" positionLeft="-165%" ti={true}/>
                        <Element name="mineurs_web.png" index="p2" positionLeft="-105%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p>Beaucoup de mineurs ont pris part</p><p>au conflit, qui a fait 13 000 victimes</p><p>(11 000 Kosovars et 2000 Serbes*).</p><p><i>« Les mines de Trepca ont été le point</i></p><p><i>de départ de l'indépendance du Kosovo,</i></p><p>analyse Sabit. <i>Lorsque les mineurs albanais</i></p><p><i>ont fait grève en 1989, ils ont été sévèrement</i></p><p><i>réprimés par la police serbe. »</i> Les mines ont</p>finalement été nationalisées par le Kosovo</p><p>l’an passé et seules 1000 personnes y</p><p>travaillent encore. L'âge d'or des mines,</p><p>et celui du club de football, semblent</p><p>aujourd'hui bien loin.</p>" positionTop="15%" positionLeft="-210%"/>
                        <Element name="source1_web.png" positionLeft="-85%"/>
                        <Element name="photo_mines_web.png" positionLeft="5%"/>
                        <Element name="mineur_web.png" positionLeft="-35%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p><i>« Jusqu’en 1990, toutes les communautés</i></p><p><i>jouaient ensemble pour Trepca, sans</i></p><p><i>problèmes »</i>, se souvient Bardhec Seferi,</p><p>60 ans, une ancienne gloire de l’équipe.</p><p><b>Avant la scission, le FK Trepca était</b></p><p><b>un club respecté dans les Balkans.</b></p><p>En 1977, ceux qu’on surnomme</p><p>« Les Mineurs » accèdent à la 1<sup>ère</sup> Division</p><p>yougoslave pour la première fois de leur</p><p>histoire. L’année suivante, le club bat</p><p>le Dinamo Zagreb et se hisse en finale</p><p>de la Coupe de Yougoslavie, qu’il perd face</p><p>aux Croates de Rijeka (0-1).</p>" positionTop="15%" positionLeft="-25%"/>
                        <Element name="ticket_web.png" index="p2" positionLeft="25%" positionTop="-1%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Video id="yrGQSUuh5zg" positionLeft="10%" maxHeight="800" ratio="1"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Element name="photoarchive_web.png" positionLeft="40%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p>De l’Albanais Riza Lushta (1932-1934), formé</p><p>au club avant de devenir l’avant-centre</p><p>de la Juventus Turin, au Serbe Xhevat Prekazi</p><p>(1970-1975), parti ensuite au Partizan</p><p>Belgrade, les légendes ne manquent pas dans</p><p>l’histoire du club. Durant ses meilleures</p><p>années, le FK Trepca envoie même des joueurs</p><p>en équipe nationale et jouit d’une popularité</p><p>qui dépasse les frontières du Kosovo.</p>" positionTop="15%" positionLeft="-10%"/>
                        <Element name="click_web.png" positionLeft="100%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <div className="card-container">
                            <div className="card" style={{height: "730px", width: "529", top: "20%", left:"30%"}} onClick={move.prev}>
                                <div className="side">
                                    <img className="Panini" src={require("./img/panini_face1_web.png")} alt="" style={{height: "730px", width: "529"}}/>
                                </div>
                                <div className="side back">
                                    <img className="Panini" src={require("./img/panini_dos1_web.png")} alt="" style={{height: "730px", width: "529"}}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <div className="card-container">
                            <div className="card" style={{height: "730px", width: "529", top:"30%", left:"-25%"}} onClick={move.prev}>
                                <div className="side">
                                    <img className="Panini" src={require("./img/panini_face2_web.png")} alt="" style={{height: "730px", width: "529"}}/>
                                </div>
                                <div className="side back">
                                    <img className="Panini" src={require("./img/panini_dos2_web.png")} alt="" style={{height: "730px", width: "529"}}/>
                                </div>
                            </div>
                            <div className="card" style={{height: "730px", width: "529", top:"10%", left:"70%"}} onClick={move.prev}>
                                <div className="side">
                                    <img className="Panini" src={require("./img/panini_face3_web.png")} alt="" style={{height: "730px", width: "529"}}/>
                                </div>
                                <div className="side back">
                                    <img className="Panini" src={require("./img/panini_dos3_web.png")} alt="" style={{height: "730px", width: "529"}}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Element name="graphique_hitoire_web.png" positionLeft="40%" positionTop="1%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:#EB445C'>LE TEMPS DU SUCCÈS</p>" contents="<p>Lorsque Serbes et Albanais évoluaient</p><p>ensemble, le FK Trepca a remporté de</p><p>nombreux titres.</p>" positionTop="15%" positionLeft="-160%" ti={true}/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p>L’entente au sein du club ne résiste pas</p><p>à la montée des tensions entre Serbes</p><p>et Albanais, liées à l’arrivée au pouvoir</p><p>de Slobodan Milosevic, en 1989.</p><p>Le nationaliste met fin à l’autonomie</p><p>du Kosovo. Les Albanais sont marginalisés</p><p>et Mitrovica se déchire. <b>Dès 1991,</b></p><p><b>plusieurs joueurs albanais quittent</b></p><p><b>l’équipe et fondent le KF Trepça,</b></p><p>le club kosovar issu de cette scission.</p><p>Bardhec et les siens rejoignent alors</p><p>le Championnat du Kosovo, une Ligue</p><p>clandestine aux yeux de Belgrade.</p>" positionTop="15%" positionLeft="-160%"/>
                        <Element name="titre2Web.png" positionLeft="30%"/>
                        <Element name="cathédrale_web.png" index="p1" positionLeft="70%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:white'><b>« Le Kosovo, c’est la Serbie »</b>, peut-on</p><p style='color:white'>lire sur la place centrale de Mitrovica nord.</p><p style='color:white'>Plus haut, l’église orthodoxe Saint-Dimitri</p><p style='color:white'>surplombe la cité. Elle symbolise le Kosovo</p><p style='color:white'>serbe et chrétien, qui subsiste sur la rive</p><p style='color:white'>droite de l’Ibar. De ce côté du pont,</p><p style='color:white'>les drapeaux serbes sont omniprésents</p><p style='color:white'>et les habitants vivent sous l’autorité</p><p style='color:white'>de Belgrade. Les violences qui ont marqué</p><p style='color:white'>l’opinion internationale dans les années 2000</p><p style='color:white'>sont devenues sporadiques, mais des tensions</p><p style='color:white'>subsistent encore.</p>" positionTop="15%" positionLeft="-140%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Video id="maDT3sAwKmY" positionLeft="-20%" maxHeight="800" ratio="1"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Element name="chronologie_web.png" positionLeft="50%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                    </div>

                    <div className="Board__slide Board__slide--top">
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:white'>Érigée en 2016, la statue du roi Lazar symbolise</p><p style='color:white'>l’emprise de la Serbie sur le nord de la ville.</p><p style='color:white'>Martyr selon l’Église orthodoxe, ce seigneur</p><p style='color:white'>des Serbes, au XIII<sup>e</sup> siècle, pointe l’index gauche</p><p style='color:white'>vers le Sud et le reste du pays, que Belgrade</p><p style='color:white'>considère encore comme une province</p><p style='color:white'>serbe autonome.</p>" positionTop="15%" positionLeft="-150%"/>
                        <Element name="statue_web.png" index="p2" positionLeft="10%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:white'>Un jardin aménagé a remplacé les pavés</p><p style='color:white'>et les barricades, mais les blindés de la Kosovo</p><p style='color:white'>Force (KFOR) surveillent toujours le pont</p><p style='color:white'>de Mitrovica. En juin 1999, les troupes de l’OTAN</p><p style='color:white'>divisent la ville en deux et l’Ibar fait alors office</p><p style='color:white'>de frontière naturelle entre Serbes et Albanais.</p><p style='color:white'>Fermé à la circulation routière, le pont demeure,</p><p style='color:white'>vingt ans après la fin de la guerre,</p><p style='color:white'><b>le symbole de la fracture ethnique,</b></p><p style='color:white'><b>politique et religieuse</b> qui a touché la ville.</p>" positionTop="15%" positionLeft="-50%"/>
                        <Element name="pont_web.png" positionLeft="0%" positionTop="2%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Element name="photo_pont_web.png" positionLeft="20%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p>À quelques encablures du pont, la mosquée</p><p>Isa Beg illustre le changement de décor.</p><p><b>Quelque 70 000 Kosovars albanais</b></p><p>(sur les 89 000* habitants de Mitrovica),</p><p>musulmans pour la plupart, vivent au pied</p><p>des collines de Trepca. Des drapeaux, rouges</p><p>avec un aigle noir à deux têtes au centre,</p><p>flottent au rythme du vent. De ce côté,</p><p>on est albanais avant d’être kosovar.</p>" positionTop="15%" positionLeft="-50%"/>
                        <Element name="source2_web.png" positionLeft="0%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Element name="eglise_web.png" index="p2" positionLeft="-15%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p>L’atmosphère paraît moins lourde, les regards</p><p>ont l'air moins fuyants et les visages plus</p><p>lumineux. Le Sud semble encore en</p><p>reconstruction. Des chantiers d’immeubles,</p><p>de complexes de loisirs, poussent un peu</p><p>partout autour du centre-ville et près du</p><p>stade olympique. Avant la guerre, Mitrovica</p><p>était la première ville du Kosovo. Mais, depuis,</p><p>beaucoup d’habitants sont partis vivre</p><p>à Pristina.</p>" positionTop="15%" positionLeft="-80%"/>
                        <Element name="drapeau_web.png" index="p2" positionLeft="60%" positionTop="-1%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Element name="titre3Web.png" positionLeft="30%"/>
                        <Element name="blanson2.png" positionLeft="85%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:white'>Après la guerre, <b>Pristina s’est imposée</b></p><p style='color:white'><b>comme le haut lieu du football kosovar,</b></p><p style='color:white'>au détriment de Mitrovica. C’est d’ailleurs</p><p style='color:white'>dans la capitale que les joueurs du KF Trepça</p><p style='color:white'>passent leur visite médicale, au matin</p><p style='color:white'>du 4 février. Ensuite, c’est devant l’entrée</p><p style='color:white'>principale du stade Fadil Vokrri - où évolue</p><p style='color:white'>la sélection nationale - qu’ils ont rendez-vous.</p><p style='color:white'>Un à un, ils montent dans un bus aux couleurs</p><p style='color:white'>du club. Leur entraînement doit débuter dans</p><p style='color:white'>moins d’une heure, à 40 km d’ici.</p>" positionTop="15%" positionLeft="-185%"/>
                        <Element name="stade.png" positionLeft="54%" positionTop="2%"/>
                        <Element name="photo_equipe_web.png" positionLeft="-20%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:white'>À peine revenus à Mitrovica, les joueurs</p><p style='color:white'>s’élancent sur le terrain d’entraînement,</p><p style='color:white'>synthétique et gorgé d’eau. En arrière-plan</p><p style='color:white'>se dessine le stade Adem Jashari, l’enceinte</p><p style='color:white'>historique de la ville. Ancienne propriété</p><p style='color:white'>du FK Trepca à l’époque yougoslave, il a été</p><p style='color:white'>rebaptisé du nom du grand fondateur</p><p style='color:white'>de la nation kosovare.</p>" positionTop="15%" positionLeft="-40%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Video id="fp062HCvi2M" positionLeft="0%" maxHeight="800" ratio="1"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:white'>Nouvelle recrue du KF Trepça, Lekë Babaj,</p><p style='color:white'>18 ans, jongle entre son statut de joueur</p><p style='color:white'>et son travail de serveur. En 2<sup>e</sup> Division,</p><p style='color:white'>les émoluments dépassent rarement</p><p style='color:white'>300 € par mois, la moyenne nationale</p><p style='color:white'>au Kosovo. <i>« Dans l’équipe, personne ne peut</i></p><p style='color:white'><i>vivre uniquement de son salaire de joueur »,</i></p><p style='color:white'>avoue Lekë. Seuls les meilleurs joueurs</p><p style='color:white'>de 1<sup>ère</sup> Division peuvent espérer des revenus</p><p style='color:white'>à quatre chiffres, pourtant loin des standards</p><p style='color:white'>des Championnats européens.</p>" positionTop="15%" positionLeft="-20%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:#87F8D0'>« J’AI PERDU UN PROCHE</p><p style='color:#87F8D0'>À CAUSE DES SERBES,</p><p style='color:#87F8D0'>MAIS JE SERAIS PRÊT À EN</p><p style='color:#87F8D0'>ACCUEILLIR DANS L’ÉQUIPE »</p><p style='color:white'>LEKË BABAJ</p>" positionTop="15%" positionLeft="-50%" ti={true}/>
                        <Element name="photo_léké_web.png" index="p2" positionLeft="60%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:white'>Le quartier nord se trouve à quelques</p><p style='color:white'>centaines de mètres du terrain. <i>« On évite</i></p><p style='color:white'><i>d’aller là-bas, nous souffle un joueur. En tant</i></p><p style='color:white'><i>que Kosovars albanais, on aurait des ennuis. »</i></p><p style='color:white'>Peu de footballeurs acceptent de parler</p><p style='color:white'>des rancœurs qui rythment leur quotidien.</p><p style='color:white'><b>Certains prétendent ne pas connaître</b></p><p style='color:white'><b>le FK Trep<span style='color:#87F8D0'>č</span>a : <i>« Vous savez qu’il y a deux</i></b></p><p style='color:white'><b><i>Trep<span style='color:#87F8D0'>ç</span>a à Mitrovica ? »</i></b>, lance un joueur en</p><p style='color:white'>plein échauffement. Ici, aucune référence</p><p style='color:white'>au voisin serbe, mais plutôt au KF Trepça ‘89,</p><p style='color:white'>l’autre club albanais de la ville.</p>" positionTop="15%" positionLeft="-735%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:white'>Lekë ne porte pas les Serbes dans son cœur.</p><p style='color:white'>Mais, dans l’intérêt du football et à l’image</p><p style='color:white'>de toute une jeune génération, il est prêt</p><p style='color:white'>à tourner la page. <i>« J’ai perdu un proche à cause</i></p><p style='color:white'><i>des Serbes. Mais je serais prêt à en accueillir</i></p><p style='color:white'><i>dans l’équipe. Beaucoup de Kosovars ont fait</i></p><p style='color:white'><i>carrière en Serbie, comme Fadil Vokrri. Il y a</i></p><p style='color:white'><i>de plus en plus de jeunes, comme moi, qui veulent</i></p><p style='color:white'><i>arrêter de vivre dans le passé et simplement aller</i></p><p style='color:white'><i>de l’avant. »</i></p>" positionTop="15%" positionLeft="-100%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <div className="card-container">
                            <div className="card" style={{height: "770px", width: "555px", top: "15%", left:"-40%"}} onClick={move.prev}>
                                <div className="side">
                                    <img className="Panini" src={require("./img/carte_face_fadil_mobile.png")} alt="" style={{height: "770px", width: "555px"}}/>
                                </div>
                                <div className="side back">
                                    <img className="Panini" src={require("./img/carte_dos_fadil_mobile.png")} alt="" style={{height: "770px", width: "555px"}}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:white'>Pour Avni Haxhiu, son président,</p><p style='color:white'>le KF Trepça est une histoire de famille.</p><p style='color:white'>Commissionnaire en douane, il a pris</p><p style='color:white'>la succession de son frère en 2011,</p><p style='color:white'>et soutient financièrement le club.</p><p style='color:white'><i>« Depuis 2004, ma famille a investi près</i></p><p style='color:white'><i>de 3,5 M€. Aujourd’hui, la Fédération nous</i></p><p style='color:white'><i>donne seulement 10 000 € par an »,</i></p><p style='color:white'>explique-t-il. Des conditions financières</p><p style='color:white'>insuffisantes, qui empêchent les joueurs</p><p style='color:white'>de se préparer au très haut niveau</p><p style='color:white'>et ont provoqué la chute du club</p><p style='color:white'>en 2<sup>e</sup> Division.</p>" positionTop="15%" positionLeft="-100%"/>
                        <Element name="photo_avni.png" index="p1" positionLeft="10%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:white'>Lorsqu’il est question du rival serbe, Avni</p><p style='color:white'>explique : <i>« Nous avons proposé aux Serbes de</i></p><p style='color:white'><i>Mitrovica de rejoindre le Championnat kosovar,</i></p><p style='color:white'><i>mais ils ont refusé. Certains ont déjà voulu jouer</i></p><p style='color:white'><i>pour des clubs du Kosovo, mais ils ont subi des</i></p><p style='color:white'><i>pressions de la part de Belgrade et ont renoncé. »</i></p>" positionTop="15%" positionLeft="-200%"/>
                        <Element name="controle.png" index="p2" positionLeft="0%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p>Ces tentatives d'approche des clubs</p><p>à dominante serbe ont aussi été opérées</p><p>au niveau national par la Fédération</p><p>de football du Kosovo. <i>« Mon père a toujours</i></p><p><i>proposé aux quatre, cinq équipes à majorité</i></p><p><i>ethnique serbe de jouer dans le Championnat</i></p><p><i>kosovar mais elles ne voulaient pas. Je ne sais</i></p><p><i>pas si c'était par fierté ou à cause des pressions</i></p><p><i>de Belgrade »</i>, se souvient Gramoz Vokrri,</p><p>fils de celui qui fut aussi président de</p><p>la Fédération, Fadil Vokrri, décédé en 2018.</p>" positionTop="15%" positionLeft="-30%"/>
                        <Element name="photo_gramoz.png" index="p1" positionLeft="70%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:#EB445C'>« LA SERBIE FAISAIT DU</p><p style='color:#EB445C'>LOBBYING AUPRÈS DES</p><p style='color:#EB445C'>PAYS MEMBRES POUR</p><p style='color:#EB445C'>EMPÊCHER NOTRE</p><p style='color:#EB445C'>ADMISSION »</p><p>GRAMOZ VOKRRI</p>" positionTop="15%" positionLeft="-80%" ti={true}/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p><b>Les tensions géopolitiques ont eu</b></p><p><b>un impact direct sur la Fédération.</b></p><p>Créée en 2008, elle n’a été admise au sein</p><p>de l'UEFA et de la FIFA qu’en 2016. <i>« La Serbie</i></p><p><i>faisait du lobbying auprès des pays membres pour</i></p><p><i>empêcher notre admission »</i>, accuse Gramoz.</p><p>Eroll Salihu, le secrétaire général de l’instance,</p><p>évoque pourtant de bonnes relations avec</p><p>les clubs serbes du Kosovo : <i>« Ils ont envie</i></p><p><i>de discuter, mais ils ont peur. S’il n’y avait pas</i></p><p><i>de problèmes politiques, ils joueraient dans</i></p><p><i>notre Championnat. »</i></p>" positionTop="15%" positionLeft="-140%"/>

                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Video id="7nrTfI3y1XI" positionLeft="-20%" maxHeight="800" ratio="1"/>

                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:#EB445C'>« J’ESPÈRE VOIR LES</p><p style='color:#EB445C'>DEUX CLUBS DE TREPCA</p><p style='color:#EB445C'>REFUSIONNER AVANT</p><p style='color:#EB445C'>MA MORT »</p><p>PETAR MILOSAVLJEVIC</p>" positionTop="15%" positionLeft="-30%" ti={true}/>

                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p>À l’inverse d’Avni Haxhiu, Eroll Salihu souligne</p><p>un nombre croissant de Serbes en Superliga.</p><p>Mais la mésentente persiste, y compris sur</p><p>le terrain. En témoigne le cas du jeune Ilija Ivić,</p><p>17 ans, originaire de l’enclave de Gračanica.</p><p>Sélectionné chez les U19 kosovars,</p><p><b>il est le premier joueur d'origine serbe</b></p><p><b>à intégrer l'équipe nationale du Kosovo,</b></p><p>ce qui lui a valu d'être qualifié de « traître »</p><p>sur les réseaux sociaux. Sa mère a quant</p><p>à elle perdu son poste à la mairie de Gračanica,</p><p>sans explication.</p>" positionTop="15%" positionLeft="-50%"/>
                        <Element name="photo_tweet_web.png" positionLeft="80%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Element name="fiche_loic_web.png" positionLeft="80%"/>

                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:#E4DBDC'>LOÏC TRÉGOURÈS</p>" contents="<p style='color:white'>Docteur en sciences politiques</p><p style='color:white'>et spécialiste des Balkans.</p><p style='color:white'><i>« Vu de Serbie, la décision de ce jeune</i></p><p style='color:white'><i>passe très mal. La Fédération serbe n'a</i></p><p style='color:white'><i>pas d'autonomie politique et le sportif</i></p><p style='color:white'><i>procède du politique, et non l'inverse.</i></p><p style='color:white'><i>Le jour où la Serbie reconnaîtra</i></p><p style='color:white'><i>le Kosovo dans ses frontières, alors</i></p><p style='color:white'><i>tout le reste suivra. En attendant,</i></p><p style='color:white'><i>il n'y a pas de raison de penser que ça</i></p><p style='color:white'><i>(la venue d’un Serbe au KF Trepça)</i></p><p style='color:white'><i>pourrait se produire. »</i></p>" positionTop="30%" positionLeft="-67%" ti={true}/>

                    </div>

                    <div className="Board__slide only_blue black">
                        <Edito content="<p><i>« J’espère voir les deux clubs de Trepca</i></p><p><i>refusionner avant ma mort. »</i> Si Petar</p><p>Milosavljevic rêve d’un apaisement</p><p>des tensions à Mitrovica, Eroll, lui,</p><p>souhaite une réconciliation politique</p><p>à l’échelle nationale. Il nourrit un espoir :</p><p>que cette dernière permette</p><p>d’organiser, un jour, <b>un match amical</b></p><p><b>entre les deux pays.</b></p>" positionTop="15%" positionLeft="-60%"/>
                        <Element name="conduite_web.png" index="p2" positionLeft="90%"/>
                    </div>

                    <div className="Board__slide only_blue black">
                        <Masthead />
                    </div>
                </div>
            )
        } else {
            return (
                <div id="board" className="Board_web" style={{marginTop:this.state.boardTop, left:0,  minWidth:this.state.slideWidth, height: this.state.boardHeight}}>
                    {/*Slide 1*/}
                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p>9 octobre 2019. Jarinje, à la frontière entre</p><p>la Serbie et le Kosovo. Un important dispositif</p><p>policier attend le bus des joueurs de l’Étoile</p><p>Rouge Belgrade. Le club de football serbe est</p><p>attendu dans la ville de Mitrovica pour disputer</p><p>un seizième de finale de Coupe de Serbie face</p><p>au FK Trepča. <b>Une équipe basée au Kosovo</b></p><p><b>mais exclusivement composée de Serbes.</b></p>" positionTop="10%" positionLeft="-10%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                    </div>

                    {/*Slide 2*/}
                    <div className="Board__slide Board__slide--top">
                        <Element idImg="carte1_web.png" name="carte1_web.png" hidde={false} positionTop="2%"/>
                        <Element idImg="carte2_web.png" name="carte2_web.png" hidde={true} positionTop="2%"/>
                        <Element idImg="carte3_web.png" name="carte3_web.png" hidde={true} positionTop="2%"/>
                        <input id="btnLeft" type="button" className="BoutonLeftWeb" hidden={true}/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <input id="btnRight" type="button" className="BoutonRightWeb" hidden={false}/>
                    </div>

                    {/*Slide 3*/}
                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p>Le match aura finalement lieu le lendemain...</p><p>à Belgrade. Pour les autorités kosovares,</p><p>pas question de laisser entrer l’Étoile Rouge</p><p>Belgrade sur ses terres. La Serbie ne reconnaît</p><p>pas l’indépendance, proclamée en 2008,</p><p>de son ancienne province. Le Kosovo, lui,</p><p>considère cette rencontre organisée par la</p><p>Fédération serbe comme une violation de son</p><p>territoire. Pourtant, le FK Trepča participe au</p><p>Championnat serbe.</p>" positionTop="10%" positionLeft="-50%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Element name="titre1Web.png" positionLeft="20%"/>
                        <Element name="montagne_web.png" index="p2" positionLeft="55%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:white'><b>À Mitrovica nord, on accepte mal</b></p><p style='color:white'><b>l’indépendance du Kosovo.</b> Les voitures</p><p style='color:white'>ont des plaques d’immatriculation serbes,</p><p style='color:white'>le cyrillique est l’alphabet local et on vous</p><p style='color:white'>rendra la monnaie en dinars si vous payez</p><p style='color:white'>votre café en euros (pourtant la devise</p><p style='color:white'>officielle). C’est dans cette partie de la ville</p><p style='color:white'>que le FK Trepča a ses bureaux, pas son terrain.</p><p style='color:white'>Le club reçoit à Zvečan, petit bourg limitrophe</p><p style='color:white'>sur les hauteurs. Et 4 mois après l’incident</p><p style='color:white'>à la frontière, le stade sonne creux :</p><p style='color:white'>c’est la trêve hivernale.</p>" positionTop="15%" positionLeft="-10%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:white'>Créé en 1932, le FK Trepča évolue aujourd’hui</p><p style='color:white'>dans la 3<sup>e</sup> Division serbe, qui oblige les joueurs</p><p style='color:white'>à parcourir la Serbie et faire de longs voyages</p><p style='color:white'>jusqu’à Bogatić, à 450 km de Mitrovica, ou</p><p style='color:white'>à Rabrovo, à 540 km. Mais pour rien au monde</p><p style='color:white'>le club n'abandonnerait le Championnat serbe</p><p style='color:white'>pour rejoindre le système kosovar.</p>" positionTop="15%" positionLeft="-15%"/>
                        <Element name="stade_web.png" index="p2" positionLeft="5%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:#87F8D0'>« LES SERBES NOUS</p><p style='color:#87F8D0'>AIDENT. CE SONT EUX</p><p style='color:#87F8D0'>QUI ONT CONSTRUIT</p><p style='color:#87F8D0'>LE STADE »</p><p style='color:white'>PETAR MILOSAVLJEVIC</p>" positionTop="15%" positionLeft="10%" ti={true}/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Element name="logo_trepca_web.png" positionLeft="-20%"/>
                        <Edito content="<p style='color:white'>Alors, impossible pour le club de recevoir</p><p style='color:white'>des subventions de la municipalité</p><p style='color:white'>de Mitrovica nord, rattachée au pouvoir</p><p style='color:white'>de Pristina, la capitale. Pourtant, les joueurs</p><p style='color:white'>touchent des primes, de 150 à 400 €.</p>" positionTop="15%" positionLeft="0%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:white'>Mais d’où vient l’argent ? <i>« De Serbie »</i>, répond</p><p style='color:white'>Petar Milosavljevic. Il poursuit : <i>« Les Serbes</i></p><p style='color:white'><i>nous aident. Ce sont eux qui ont construit</i></p><p style='color:white'><i>le stade. »</i> Eux ? La Fédération serbe ?</p><p style='color:white'>Pas de réponse.</p>" positionTop="15%" positionLeft="-65%"/>
                        <Element name="local_web.png" index="p1" positionLeft="-40%"/>
                    </div>

                    {/*Slide 9*/}
                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:#003E3E'>PETAR MILOSAVLJEVIC</p>" contents="<p>Cet ancien joueur du FK Trepca</p><p>à l’époque yougoslave était secrétaire</p><p>du club jusqu’il y a encore 6 mois.</p><p>Un poste qu’il a dû quitter pour</p><p>des raisons de santé, à l’aube</p><p>de ses 81 ans. Petar est le seul,</p><p>côté serbe, à avoir osé s’exprimer.</p><p>La direction, elle, est devenue</p><p>extrêmement méfiante vis-à-vis</p><p>de la presse occidentale, jugée</p><p>partiale et hostile à sa position.</p>" positionTop="30%" positionLeft="-35%" ti={true}/>
                        <Element name="fiche_petar_web.png" positionLeft="0%"/>
                    </div>

                    {/*Slide 10*/}
                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:white'>L’ex-secrétaire déplore des enjeux politiques</p><p style='color:white'>qui pèsent sur la situation actuelle du club :</p><p style='color:white'><i>« Pour l'instant, il y a encore beaucoup</i></p><p style='color:white'><i>de politique mais, si tu me permets l'expression,</i></p><p style='color:white'><i>la politique c'est de la merde. »</i> Si aujourd’hui</p><p style='color:white'>le FK Trepča survit grâce au maigre soutien</p><p style='color:white'>financier de Belgrade, il fut un temps où il</p><p style='color:white'>pouvait compter sur un mécène de taille :</p><p style='color:white'><b>les mines de Trepca, desquelles</b></p><p style='color:white'><b>le club tire son nom.</b></p>" positionTop="15%" positionLeft="-50%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p>Situées de part et d’autre de Mitrovica,</p><p>elles étaient le fleuron de l'économie</p><p>avant la guerre du Kosovo, entre</p><p>séparatistes albanais et forces</p><p>serbes (1998-1999). À l'époque yougoslave,</p><p>plus de 20 000 personnes y produisaient</p><p>les deux tiers des richesses de la région.</p><p><b>Les mineurs sont rapidement devenus</b></p><p><b>les premiers supporters de l’équipe.</b></p><p><i>« Une partie de leur salaire servait à financer</i></p><p><i>le club »</i>, se souvient Sabit Uka, un ex-joueur</p><p>du FK Trepca et neveu d’un mineur.</p>" positionTop="15%" positionLeft="-50%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:#EB445C'>« LES MINES DE TREPCA ONT</p><p style='color:#EB445C'>ÉTÉ LE POINT DE DÉPART DE</p><p style='color:#EB445C'>L'INDÉPENDANCE DU KOSOVO »</p><p>SABIT UKA</p>" positionTop="15%" positionLeft="-50%" ti={true}/>
                        <Element name="mineurs_web.png" index="p2" positionLeft="-50%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p>Beaucoup de mineurs ont pris part</p><p>au conflit, qui a fait 13 000 victimes</p><p>(11 000 Kosovars et 2000 Serbes*).</p><p><i>« Les mines de Trepca ont été le point</i></p><p><i>de départ de l'indépendance du Kosovo,</i></p><p>analyse Sabit. <i>Lorsque les mineurs albanais</i></p><p><i>ont fait grève en 1989, ils ont été sévèrement</i></p><p><i>réprimés par la police serbe. »</i> Les mines ont</p>finalement été nationalisées par le Kosovo</p><p>l’an passé et seules 1000 personnes y</p><p>travaillent encore. L'âge d'or des mines,</p><p>et celui du club de football, semblent</p><p>aujourd'hui bien loin.</p>" positionTop="15%" positionLeft="-100%"/>
                        <Element name="source1_web.png" positionLeft="-20%"/>
                        <Element name="mineur_web.png" index="p2" positionLeft="15%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Element name="photo_mines_web.png" positionLeft="-30%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p><i>« Jusqu’en 1990, toutes les communautés</i></p><p><i>jouaient ensemble pour Trepca, sans</i></p><p><i>problèmes »</i>, se souvient Bardhec Seferi,</p><p>60 ans, une ancienne gloire de l’équipe.</p><p><b>Avant la scission, le FK Trepca était</b></p><p><b>un club respecté dans les Balkans.</b></p><p>En 1977, ceux qu’on surnomme</p><p>« Les Mineurs » accèdent à la 1<sup>ère</sup> Division</p><p>yougoslave pour la première fois de leur</p><p>histoire. L’année suivante, le club bat</p><p>le Dinamo Zagreb et se hisse en finale</p><p>de la Coupe de Yougoslavie, qu’il perd face</p><p>aux Croates de Rijeka (0-1).</p>" positionTop="15%" positionLeft="-80%"/>
                        <Element name="ticket_web.png" index="p2" positionLeft="-10%" positionTop="-1%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Video id="yrGQSUuh5zg" positionLeft="-20%" maxHeight="800" ratio="1"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Element name="photoarchive_web.png" positionLeft="-20%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p>De l’Albanais Riza Lushta (1932-1934), formé</p><p>au club avant de devenir l’avant-centre</p><p>de la Juventus Turin, au Serbe Xhevat Prekazi</p><p>(1970-1975), parti ensuite au Partizan</p><p>Belgrade, les légendes ne manquent pas dans</p><p>l’histoire du club. Durant ses meilleures</p><p>années, le FK Trepca envoie même des joueurs</p><p>en équipe nationale et jouit d’une popularité</p><p>qui dépasse les frontières du Kosovo.</p>" positionTop="15%" positionLeft="-80%"/>
                        <Element name="click_web.png" positionLeft="55%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <div className="card-container">
                            <div className="card" style={{height: "730px", width: "529", top: "20%", left:"-50%"}} onClick={move.prev}>
                                <div className="side">
                                    <img className="Panini" src={require("./img/panini_face1_web.png")} alt="" style={{height: "730px", width: "529"}}/>
                                </div>
                                <div className="side back">
                                    <img className="Panini" src={require("./img/panini_dos1_web.png")} alt="" style={{height: "730px", width: "529"}}/>
                                </div>
                            </div>

                            <div className="card" style={{height: "730px", width: "529", top:"30%", left:"40%"}} onClick={move.prev}>
                                <div className="side">
                                    <img className="Panini" src={require("./img/panini_face2_web.png")} alt="" style={{height: "730px", width: "529"}}/>
                                </div>
                                <div className="side back">
                                    <img className="Panini" src={require("./img/panini_dos2_web.png")} alt="" style={{height: "730px", width: "529"}}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <div className="card-container">
                            <div className="card" style={{height: "730px", width: "529", top:"10%", left:"-30%"}} onClick={move.prev}>
                                <div className="side">
                                    <img className="Panini" src={require("./img/panini_face3_web.png")} alt="" style={{height: "730px", width: "529"}}/>
                                </div>
                                <div className="side back">
                                    <img className="Panini" src={require("./img/panini_dos3_web.png")} alt="" style={{height: "730px", width: "529"}}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:#EB445C'>LE TEMPS DU SUCCÈS</p>" contents="<p>Lorsque Serbes et Albanais évoluaient</p><p>ensemble, le FK Trepca a remporté de</p><p>nombreux titres.</p>" positionTop="15%" positionLeft="-150%" ti={true}/>
                        <Element name="graphique_hitoire_web.png" positionLeft="-50%" positionTop="1%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p>L’entente au sein du club ne résiste pas</p><p>à la montée des tensions entre Serbes</p><p>et Albanais, liées à l’arrivée au pouvoir</p><p>de Slobodan Milosevic, en 1989.</p><p>Le nationaliste met fin à l’autonomie</p><p>du Kosovo. Les Albanais sont marginalisés</p><p>et Mitrovica se déchire. <b>Dès 1991,</b></p><p><b>plusieurs joueurs albanais quittent</b></p><p><b>l’équipe et fondent le KF Trepça,</b></p><p>le club kosovar issu de cette scission.</p><p>Bardhec et les siens rejoignent alors</p><p>le Championnat du Kosovo, une Ligue</p><p>clandestine aux yeux de Belgrade.</p>" positionTop="15%" positionLeft="0%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Element name="titre2Web.png" positionLeft="40%"/>
                        <Element name="cathédrale_web.png" index="p1" positionLeft="70%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:white'><b>« Le Kosovo, c’est la Serbie »</b>, peut-on</p><p style='color:white'>lire sur la place centrale de Mitrovica nord.</p><p style='color:white'>Plus haut, l’église orthodoxe Saint-Dimitri</p><p style='color:white'>surplombe la cité. Elle symbolise le Kosovo</p><p style='color:white'>serbe et chrétien, qui subsiste sur la rive</p><p style='color:white'>droite de l’Ibar. De ce côté du pont,</p><p style='color:white'>les drapeaux serbes sont omniprésents</p><p style='color:white'>et les habitants vivent sous l’autorité</p><p style='color:white'>de Belgrade. Les violences qui ont marqué</p><p style='color:white'>l’opinion internationale dans les années 2000</p><p style='color:white'>sont devenues sporadiques, mais des tensions</p><p style='color:white'>subsistent encore.</p>" positionTop="15%" positionLeft="-120%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Video id="maDT3sAwKmY" positionLeft="0%" maxHeight="800" ratio="1"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Element name="chronologie_web.png" positionLeft="30%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:white'>Érigée en 2016, la statue du roi Lazar symbolise</p><p style='color:white'>l’emprise de la Serbie sur le nord de la ville.</p><p style='color:white'>Martyr selon l’Église orthodoxe, ce seigneur</p><p style='color:white'>des Serbes, au XIII<sup>e</sup> siècle, pointe l’index gauche</p><p style='color:white'>vers le Sud et le reste du pays, que Belgrade</p><p style='color:white'>considère encore comme une province</p><p style='color:white'>serbe autonome.</p>" positionTop="15%" positionLeft="-50%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Element name="statue_web.png" index="p2" positionLeft="-60%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:white'>Un jardin aménagé a remplacé les pavés</p><p style='color:white'>et les barricades, mais les blindés de la Kosovo</p><p style='color:white'>Force (KFOR) surveillent toujours le pont</p><p style='color:white'>de Mitrovica. En juin 1999, les troupes de l’OTAN</p><p style='color:white'>divisent la ville en deux et l’Ibar fait alors office</p><p style='color:white'>de frontière naturelle entre Serbes et Albanais.</p><p style='color:white'>Fermé à la circulation routière, le pont demeure,</p><p style='color:white'>vingt ans après la fin de la guerre,</p><p style='color:white'><b>le symbole de la fracture ethnique,</b></p><p style='color:white'><b>politique et religieuse</b> qui a touché la ville.</p>" positionTop="15%" positionLeft="-50%"/>
                        <Element name="pont_web.png" positionLeft="-6%" positionTop="2%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Element name="photo_pont_web.png" positionLeft="20%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p>À quelques encablures du pont, la mosquée</p><p>Isa Beg illustre le changement de décor.</p><p><b>Quelque 70 000 Kosovars albanais</b></p><p>(sur les 89 000* habitants de Mitrovica),</p><p>musulmans pour la plupart, vivent au pied</p><p>des collines de Trepca. Des drapeaux, rouges</p><p>avec un aigle noir à deux têtes au centre,</p><p>flottent au rythme du vent. De ce côté,</p><p>on est albanais avant d’être kosovar.</p>" positionTop="15%" positionLeft="-50%"/>
                        <Element name="source2_web.png" positionLeft="5%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Element name="eglise_web.png" index="p2" positionLeft="-40%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p>L’atmosphère paraît moins lourde, les regards</p><p>ont l'air moins fuyants et les visages plus</p><p>lumineux. Le Sud semble encore en</p><p>reconstruction. Des chantiers d’immeubles,</p><p>de complexes de loisirs, poussent un peu</p><p>partout autour du centre-ville et près du</p><p>stade olympique. Avant la guerre, Mitrovica</p><p>était la première ville du Kosovo. Mais, depuis,</p><p>beaucoup d’habitants sont partis vivre</p><p>à Pristina.</p>" positionTop="15%" positionLeft="-100%"/>
                        <Element name="drapeau_web.png" index="p2" positionLeft="50%" positionTop="-1%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Element name="titre3Web.png" positionLeft="10%"/>
                        <Element name="blanson2.png" positionLeft="65%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:white'>Après la guerre, <b>Pristina s’est imposée</b></p><p style='color:white'><b>comme le haut lieu du football kosovar,</b></p><p style='color:white'>au détriment de Mitrovica. C’est d’ailleurs</p><p style='color:white'>dans la capitale que les joueurs du KF Trepça</p><p style='color:white'>passent leur visite médicale, au matin</p><p style='color:white'>du 4 février. Ensuite, c’est devant l’entrée</p><p style='color:white'>principale du stade Fadil Vokrri - où évolue</p><p style='color:white'>la sélection nationale - qu’ils ont rendez-vous.</p><p style='color:white'>Un à un, ils montent dans un bus aux couleurs</p><p style='color:white'>du club. Leur entraînement doit débuter dans</p><p style='color:white'>moins d’une heure, à 40 km d’ici.</p>" positionTop="15%" positionLeft="-35%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Element name="stade.png" positionLeft="22%" positionTop="2%"/>
                        <Element name="photo_equipe_web.png" positionLeft="-50%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:white'>À peine revenus à Mitrovica, les joueurs</p><p style='color:white'>s’élancent sur le terrain d’entraînement,</p><p style='color:white'>synthétique et gorgé d’eau. En arrière-plan</p><p style='color:white'>se dessine le stade Adem Jashari, l’enceinte</p><p style='color:white'>historique de la ville. Ancienne propriété</p><p style='color:white'>du FK Trepca à l’époque yougoslave, il a été</p><p style='color:white'>rebaptisé du nom du grand fondateur</p><p style='color:white'>de la nation kosovare.</p>" positionTop="15%" positionLeft="-110%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:white'>Le quartier nord se trouve à quelques</p><p style='color:white'>centaines de mètres du terrain. <i>« On évite</i></p><p style='color:white'><i>d’aller là-bas, nous souffle un joueur. En tant</i></p><p style='color:white'><i>que Kosovars albanais, on aurait des ennuis. »</i></p><p style='color:white'>Peu de footballeurs acceptent de parler</p><p style='color:white'>des rancœurs qui rythment leur quotidien.</p><p style='color:white'><b>Certains prétendent ne pas connaître</b></p><p style='color:white'><b>le FK Trep<span style='color:#87F8D0'>č</span>a : <i>« Vous savez qu’il y a deux</i></b></p><p style='color:white'><b><i>Trep<span style='color:#87F8D0'>ç</span>a à Mitrovica ? »</i></b>, lance un joueur en</p><p style='color:white'>plein échauffement. Ici, aucune référence</p><p style='color:white'>au voisin serbe, mais plutôt au KF Trepça ‘89,</p><p style='color:white'>l’autre club albanais de la ville.</p>" positionTop="15%" positionLeft="-25%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Video id="fp062HCvi2M" positionLeft="0%" maxHeight="800" ratio="1"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:white'>Nouvelle recrue du KF Trepça, Lekë Babaj,</p><p style='color:white'>18 ans, jongle entre son statut de joueur</p><p style='color:white'>et son travail de serveur. En 2<sup>e</sup> Division,</p><p style='color:white'>les émoluments dépassent rarement</p><p style='color:white'>300 € par mois, la moyenne nationale</p><p style='color:white'>au Kosovo. <i>« Dans l’équipe, personne ne peut</i></p><p style='color:white'><i>vivre uniquement de son salaire de joueur »,</i></p><p style='color:white'>avoue Lekë. Seuls les meilleurs joueurs</p><p style='color:white'>de 1<sup>ère</sup> Division peuvent espérer des revenus</p><p style='color:white'>à quatre chiffres, pourtant loin des standards</p><p style='color:white'>des Championnats européens.</p>" positionTop="15%" positionLeft="-45%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:#87F8D0'>« J’AI PERDU UN PROCHE</p><p style='color:#87F8D0'>À CAUSE DES SERBES,</p><p style='color:#87F8D0'>MAIS JE SERAIS PRÊT À EN</p><p style='color:#87F8D0'>ACCUEILLIR DANS L’ÉQUIPE »</p><p style='color:white'>LEKË BABAJ</p>" positionTop="15%" positionLeft="-100%" ti={true}/>
                        <Element name="photo_léké_web.png" index="p2" positionLeft="20%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:white'>Lekë ne porte pas les Serbes dans son cœur.</p><p style='color:white'>Mais, dans l’intérêt du football et à l’image</p><p style='color:white'>de toute une jeune génération, il est prêt</p><p style='color:white'>à tourner la page. <i>« J’ai perdu un proche à cause</i></p><p style='color:white'><i>des Serbes. Mais je serais prêt à en accueillir</i></p><p style='color:white'><i>dans l’équipe. Beaucoup de Kosovars ont fait</i></p><p style='color:white'><i>carrière en Serbie, comme Fadil Vokrri. Il y a</i></p><p style='color:white'><i>de plus en plus de jeunes, comme moi, qui veulent</i></p><p style='color:white'><i>arrêter de vivre dans le passé et simplement aller</i></p><p style='color:white'><i>de l’avant. »</i></p>" positionTop="15%" positionLeft="-180%"/>
                        <div className="card-container">
                            <div className="card" style={{height: "770px", width: "555px", top: "15%", left:"0%"}} onClick={move.prev}>
                                <div className="side">
                                    <img className="Panini" src={require("./img/carte_face_fadil_mobile.png")} alt="" style={{height: "770px", width: "555px"}}/>
                                </div>
                                <div className="side back">
                                    <img className="Panini" src={require("./img/carte_dos_fadil_mobile.png")} alt="" style={{height: "770px", width: "555px"}}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:white'>Pour Avni Haxhiu, son président,</p><p style='color:white'>le KF Trepça est une histoire de famille.</p><p style='color:white'>Commissionnaire en douane, il a pris</p><p style='color:white'>la succession de son frère en 2011,</p><p style='color:white'>et soutient financièrement le club.</p><p style='color:white'><i>« Depuis 2004, ma famille a investi près</i></p><p style='color:white'><i>de 3,5 M€. Aujourd’hui, la Fédération nous</i></p><p style='color:white'><i>donne seulement 10 000 € par an »,</i></p><p style='color:white'>explique-t-il. Des conditions financières</p><p style='color:white'>insuffisantes, qui empêchent les joueurs</p><p style='color:white'>de se préparer au très haut niveau</p><p style='color:white'>et ont provoqué la chute du club</p><p style='color:white'>en 2<sup>e</sup> Division.</p>" positionTop="15%" positionLeft="-50%"/>
                        <Element name="photo_avni.png" index="p2" positionLeft="70%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:white'>Lorsqu’il est question du rival serbe, Avni</p><p style='color:white'>explique : <i>« Nous avons proposé aux Serbes de</i></p><p style='color:white'><i>Mitrovica de rejoindre le Championnat kosovar,</i></p><p style='color:white'><i>mais ils ont refusé. Certains ont déjà voulu jouer</i></p><p style='color:white'><i>pour des clubs du Kosovo, mais ils ont subi des</i></p><p style='color:white'><i>pressions de la part de Belgrade et ont renoncé. »</i></p>" positionTop="15%" positionLeft="-60%"/>
                        <Element name="controle.png" index="p2" positionLeft="60%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p>Ces tentatives d'approche des clubs</p><p>à dominante serbe ont aussi été opérées</p><p>au niveau national par la Fédération</p><p>de football du Kosovo. <i>« Mon père a toujours</i></p><p><i>proposé aux quatre, cinq équipes à majorité</i></p><p><i>ethnique serbe de jouer dans le Championnat</i></p><p><i>kosovar mais elles ne voulaient pas. Je ne sais</i></p><p><i>pas si c'était par fierté ou à cause des pressions</i></p><p><i>de Belgrade »</i>, se souvient Gramoz Vokrri,</p><p>fils de celui qui fut aussi président de</p><p>la Fédération, Fadil Vokrri, décédé en 2018.</p>" positionTop="15%" positionLeft="-165%"/>
                        <Element name="photo_gramoz.png" index="p1" positionLeft="20%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:#EB445C'>« LA SERBIE FAISAIT DU</p><p style='color:#EB445C'>LOBBYING AUPRÈS DES</p><p style='color:#EB445C'>PAYS MEMBRES POUR</p><p style='color:#EB445C'>EMPÊCHER NOTRE</p><p style='color:#EB445C'>ADMISSION »</p><p>GRAMOZ VOKRRI</p>" positionTop="15%" positionLeft="0%" ti={true}/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p><b>Les tensions géopolitiques ont eu</b></p><p><b>un impact direct sur la Fédération.</b></p><p>Créée en 2008, elle n’a été admise au sein</p><p>de l'UEFA et de la FIFA qu’en 2016. <i>« La Serbie</i></p><p><i>faisait du lobbying auprès des pays membres pour</i></p><p><i>empêcher notre admission »</i>, accuse Gramoz.</p><p>Eroll Salihu, le secrétaire général de l’instance,</p><p>évoque pourtant de bonnes relations avec</p><p>les clubs serbes du Kosovo : <i>« Ils ont envie</i></p><p><i>de discuter, mais ils ont peur. S’il n’y avait pas</i></p><p><i>de problèmes politiques, ils joueraient dans</i></p><p><i>notre Championnat. »</i></p>" positionTop="15%" positionLeft="-60%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Video id="7nrTfI3y1XI" positionLeft="0%" maxHeight="800" ratio="1"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:#EB445C'>« J’ESPÈRE VOIR LES</p><p style='color:#EB445C'>DEUX CLUBS DE TREPCA</p><p style='color:#EB445C'>REFUSIONNER AVANT</p><p style='color:#EB445C'>MA MORT »</p><p>PETAR MILOSAVLJEVIC</p>" positionTop="15%" positionLeft="-30%" ti={true}/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p>À l’inverse d’Avni Haxhiu, Eroll Salihu souligne</p><p>un nombre croissant de Serbes en Superliga.</p><p>Mais la mésentente persiste, y compris sur</p><p>le terrain. En témoigne le cas du jeune Ilija Ivić,</p><p>17 ans, originaire de l’enclave de Gračanica.</p><p>Sélectionné chez les U19 kosovars,</p><p><b>il est le premier joueur d'origine serbe</b></p><p><b>à intégrer l'équipe nationale du Kosovo,</b></p><p>ce qui lui a valu d'être qualifié de « traître »</p><p>sur les réseaux sociaux. Sa mère a quant</p><p>à elle perdu son poste à la mairie de Gračanica,</p><p>sans explication.</p>" positionTop="15%" positionLeft="-50%"/>
                        <Element name="photo_tweet_web.png" positionLeft="80%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Element name="fiche_loic_web.png" positionLeft="80%"/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p style='color:#E4DBDC'>LOÏC TRÉGOURÈS</p>" contents="<p style='color:white'>Docteur en sciences politiques</p><p style='color:white'>et spécialiste des Balkans.</p><p style='color:white'><i>« Vu de Serbie, la décision de ce jeune</i></p><p style='color:white'><i>passe très mal. La Fédération serbe n'a</i></p><p style='color:white'><i>pas d'autonomie politique et le sportif</i></p><p style='color:white'><i>procède du politique, et non l'inverse.</i></p><p style='color:white'><i>Le jour où la Serbie reconnaîtra</i></p><p style='color:white'><i>le Kosovo dans ses frontières, alors</i></p><p style='color:white'><i>tout le reste suivra. En attendant,</i></p><p style='color:white'><i>il n'y a pas de raison de penser que ça</i></p><p style='color:white'><i>(la venue d’un Serbe au KF Trepça)</i></p><p style='color:white'><i>pourrait se produire. »</i></p>" positionTop="30%" positionLeft="-73%" ti={true}/>
                    </div>

                    <div className="Board__slide Board__slide--top">
                        <Edito content="<p><i>« J’espère voir les deux clubs de Trepca</i></p><p><i>refusionner avant ma mort. »</i> Si Petar</p><p>Milosavljevic rêve d’un apaisement</p><p>des tensions à Mitrovica, Eroll, lui,</p><p>souhaite une réconciliation politique</p><p>à l’échelle nationale. Il nourrit un espoir :</p><p>que cette dernière permette</p><p>d’organiser, un jour, <b>un match amical</b></p><p><b>entre les deux pays.</b></p>" positionTop="15%" positionLeft="-60%"/>
                    </div>

                    <div className="Board__slide only_blue black">
                        <Masthead />
                        <Element name="conduite_web.png" index="p2" positionLeft="-40%"/>
                    </div>
                </div>
            )
        }
    }
}