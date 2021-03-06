const GlobalConfigs = {
  pageTitle: "Azino777 bonus",
  navigationType: ProjectConsts.allNavigationTypes.singlePage,  //can be hamburger, singlePage, listMenu
  useIFramesEverywhere: false,
  homeSitePageUrl: "http://curtious.top/",
  menuItems: [
    //{icon: 'home', text: 'Главная', url:"http://curtious.top/"},
    {
      icon: 'list', text: 'Новости',
      url: "http://curtious.top/", notLoadToIFrame: true
    },
    //{icon: 'photo', text: 'Игры',
    // url:"http://curtious.top/"},
    {
      icon: 'info', text: 'О нас',
      url: "http://curtious.top/"
    },
    {
      icon: 'mail', text: 'Задать вопрос',
      url: "http://curtious.top/"
    },
    {
      icon: 'group', text: 'О разработчике', url: "",
      onClick: function () {
        CSharp.AboutDeveloper();
      }
    }
  ],
  styling: {
    isDarkTheme: 0,
    menuColor: "deep-purple darken-2", //from https://vuetifyjs.com/style/colors
    showLogo: false,
    showTitleInMenu: true,
    isMenuFlat: false
  }
}



