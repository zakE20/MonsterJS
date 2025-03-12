export default class Cookie {
  ligne=0;
  colone=0;
  type=0;
  htmlImage=undefined;

  static urlsImagesNormales = [
    "./assets/images/Croissant@2x.png",
    "./assets/images/Cupcake@2x.png",
    "./assets/images/Danish@2x.png",
    "./assets/images/Donut@2x.png",
    "./assets/images/Macaroon@2x.png",
    "./assets/images/SugarCookie@2x.png",
  ];
  static urlsImagesSurlignees = [
    "./assets/images/Croissant-Highlighted@2x.png",
    "./assets/images/Cupcake-Highlighted@2x.png",
    "./assets/images/Danish-Highlighted@2x.png",
    "./assets/images/Donut-Highlighted@2x.png",
    "./assets/images/Macaroon-Highlighted@2x.png",
    "./assets/images/SugarCookie-Highlighted@2x.png",
  ];

  constructor(type, ligne, colonne) {
    this.type = type;
    this.ligne = ligne;
    this.colonne = colonne;

    // On récupère l'URL de l'image correspondant au type
    // qui est un nombre entre 0 et 5
    const url = Cookie.urlsImagesNormales[type];

    // On crée une image HTML avec l'API du DOM
    let img = document.createElement("img");
    img.src = url;
    img.width = 80;
    img.height = 80;
    // pour pouvoir récupérer la ligne et la colonne
    // quand on cliquera sur une image et donc à partir
    // de cette ligne et colonne on pourra récupérer le cookie
    // On utilise la dataset API du DOM, qui permet de stocker
    // des données arbitraires dans un élément HTML
    img.dataset.ligne = ligne;
    img.dataset.colonne = colonne;

    // On stocke l'image dans l'objet cookie
    this.htmlImage = img;
  }

  isSelectionnee() {
    // on regarde si l'image a la classe CSS "cookies-selected"
    return this.htmlImage.classList.contains("cookies-selected");
  }

  selectionnee() {
    // on change l'image et la classe CSS
    // On doit mettre à la place de l'URL classique, l'URL de l'image
    // surlignée correspondant au type de cookie. Voir la propriété
    // statique de la classe Cookie, urlsImagesSurlignees
    this.htmlImage.src = Cookie.urlsImagesSurlignees[this.type];
    // On va ajouter la classe CSS "cookies-selected" à
    // l'image du cookie
    this.htmlImage.src = Cookie.urlsImagesSurlignees[this.type];
    this.htmlImage.classList.add("cookies-selected");
  }

  deselectionnee() {
    // on change l'image et la classe CSS
    this.htmlImage.src = Cookie.urlsImagesNormales[this.type];
    // On va ajouter la classe CSS "cookies-selected" à
    // l'image du cookie
    this.htmlImage.classList.remove("cookies-selected");
  }

  static swapCookies(c1, c2) {
    console.log("On essaie SWAP C1 C2");
    // On regarde la distance entre les deux cookies
    // si elle est de 1, on peut les swapper
    const dist = Cookie.distance(c1, c2);
    if(dist === 1) {
      // on swappe les cookies dans le tableau
      // On échange leurs images et types

      // On échange les types
      let tmpType = c1.type;
      c1.type = c2.type;
      c2.type = tmpType;

      // On échange les images
      let tmpImage = c1.htmlImage.src;
      c1.htmlImage.src = c2.htmlImage.src;
      c2.htmlImage.src = tmpImage;

      //on echange les positions 
    let tmpLigne = c1.ligne;
    let tmpColonne = c1.colonne;
    c1.ligne = c2.ligne;
    c1.colonne = c2.colonne;
    c2.ligne = tmpLigne;
    c2.colonne = tmpColonne;
    }

    // et on remet les images correspondant au look
    // "désélectionné"
    c1.deselectionnee();
    c2.deselectionnee();
  }

  /** renvoie la distance au sens "nombre de cases" 
   * entre deux cookies. Servira pour savoir si on peut
   * swapper deux cookies */
  static distance(cookie1, cookie2) {
    let l1 = cookie1.ligne;
    let c1 = cookie1.colonne;
    let l2 = cookie2.ligne;
    let c2 = cookie2.colonne;

    const distance = Math.sqrt((c2 - c1) * (c2 - c1) + (l2 - l1) * (l2 - l1));
    console.log("Distance = " + distance);
    return distance;
  }
  static distance(cookie1, cookie2) {
    let l1 = cookie1.ligne;
    let c1 = cookie1.colonne;
    let l2 = cookie2.ligne;
    let c2 = cookie2.colonne;

    const distance = Math.sqrt((c2 - c1) * (c2 - c1) + (l2 - l1) * (l2 - l1));
    console.log("Distance = " + distance);
    return distance;
  }
}
