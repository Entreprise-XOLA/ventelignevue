const routes = [
 {
    path: '/',
    component: () => import('layouts/Headerprincipale.vue'),
    children: [
      { path: '', component: () => import('pages/Accueilcat.vue') }
    ]
  },
  {
    path: '/proprio',
    component: () => import('layouts/HeaderRecherche.vue'),
    children: [
      { path: '', component: () => import('pages/AccueilAdmin.vue') }
    ]
  },
  {
    path: '/produitdetails',
    component: () => import('layouts/Headerprincipale.vue'),
    children: [
      { path: '', component: () => import('pages/Produit.vue') }
    ]
  },
  {
    path: '/produitsepices',
    component: () => import('layouts/Headerprincipale.vue'),
    children: [
      { path: '', component: () => import('pages/Accueilepices.vue') }
    ]
  },
  {
    path: '/produit',
    component: () => import('layouts/Headerprincipale.vue'),
    children: [
      { path: '', component: () => import('pages/Accueil.vue') }
    ]
  },
  {
    path: '/detailproduit',
    component: () => import('layouts/HeaderSecondaire.vue'),
    children: [
      { path: '', component: () => import('pages/Detailproduit.vue') }
    ]
  },
  {
    path: '/apropos',
    component: () => import('layouts/Headerprincipale.vue'),
    children: [
      { path: '', component: () => import('pages/Apropos.vue') }
    ]
  },
  {
    path: '/commentaire',
    component: () => import('layouts/Headerprincipale.vue'),
    children: [
      { path: '', component: () => import('pages/Commentaire.vue') }
    ]
  },
  {
    path: '/recherche',
    component: () => import('layouts/HeaderRecherche.vue'),
    children: [
      { path: '', component: () => import('pages/Recherche.vue') }
    ]
  },
  {
    path: '/preparation',
    component: () => import('layouts/HeaderPresent.vue'),
    children: [
      { path: '', component: () => import('pages/Preparationbouillie.vue') }
    ]
  },
  {
    path: '/rayon',
    component: () => import('layouts/HeaderRecherche.vue'),
    children: [
      { path: '', component: () => import('pages/Rayonboisson.vue') }
    ]
  },
  {
    path: '/rayonbeaute',
    component: () => import('layouts/HeaderRecherche.vue'),
    children: [
      { path: '', component: () => import('pages/Rayonbeaute.vue') }
    ]
  },
  {
    path: '/rayonfarine',
    component: () => import('layouts/HeaderRecherche.vue'),
    children: [
      { path: '', component: () => import('pages/Rayonfarine.vue') }
    ]
  },
  {
    path: '/rayonleguime',
    component: () => import('layouts/HeaderRecherche.vue'),
    children: [
      { path: '', component: () => import('pages/Rayonlegume.vue') }
    ]
  },
  {
    path: '/rayonobjet',
    component: () => import('layouts/HeaderRecherche.vue'),
    children: [
      { path: '', component: () => import('pages/Rayonobjetdart.vue') }
    ]
  },
  {
    path: '/chiffreaffaire',
    component: () => import('layouts/Headerprincipale.vue'),
    children: [
      { path: '', component: () => import('pages/Chiffreaffaire.vue') }
    ]
  },
  {
    path: '/vente',
    component: () => import('layouts/Headerprincipale.vue'),
    children: [
      { path: '', component: () => import('pages/Ventes.vue') }
    ]
  },
  {
    path: '/comptes',
    component: () => import('layouts/Headerprincipale.vue'),
    children: [
      { path: '', component: () => import('pages/Comptes.vue') }
    ]
  },
  {
    path: '/connexion',
    component: () => import('layouts/Headerprincipale.vue'),
    children: [
      { path: '', component: () => import('pages/Connexion.vue') }
    ]
  },
  {
    path: '/recettes',
    component: () => import('layouts/Headerprincipale.vue'),
    children: [
      { path: '', component: () => import('pages/Recettes.vue') }
    ]
  },
  {
    path: '/boissonnonalcolise',
    component: () => import('layouts/Headerprincipale.vue'),
    children: [
      { path: '', component: () => import('pages/Boissonnonalcolise.vue') }
    ]
  },
  {
    path: '/jus',
    component: () => import('layouts/Headerprincipale.vue'),
    children: [
      { path: '', component: () => import('pages/BoissonJus.vue') }
    ]
  },
  {
    path: '/boissonalcolise',
    component: () => import('layouts/Headerprincipale.vue'),
    children: [
      { path: '', component: () => import('pages/Boissonalcolise.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
