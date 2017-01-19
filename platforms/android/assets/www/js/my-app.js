// Initialize app

var myApp = new Framework7({
    swipePanel: 'left'
});

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var curtir =0;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

$$('#index').on('click', function (e) {
    myApp.closePanel();
});




myApp.onPageInit('*', function (page) {
    //uso de javascript na pagina msg_reitor
    myApp.closePanel();

    var mySwiper = myApp.swiper('.swiper-container', {
    pagination:'.swiper-pagination'
     });

  
    $$('#brasilia').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/brasilia');
    });
    $$('#ceilandia').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/campus-ceilandia');
    });
    $$('#estrutural').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/campus-estrutural');
    });
    $$('#gama').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/gama');
    });
    $$('#planaltina').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/planaltina');
    });
    $$('#riacho').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/riachofundo');
    });
    $$('#samambaia').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/samambaia');
    });
    $$('#sebastiao').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/saosebastiao');
    });
    $$('#taguatinga').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/taguatinga');
    });
    $$('#tagCentro').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/taguatingacentro');
    });
    
    $$('#segTrabEAD').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/8348/IFB%20Campus%20Ceil%C3%A2ndia_Curso%20T%C3%A9cnico%20em%20Seguran%C3%A7a%20do%20Trabalho.pdf');
    });

    $$('#tecServPubEAD').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/5970/IFB%20Campus%20Ceil%C3%A2ndia_Curso%20T%C3%A9cnico%20em%20Servi%C3%A7os%20P%C3%BAblicos%20(1).pdf');
    });

    /******************************************/
    $$('#ext-mapa').on('click', function (e) {
    openExtLink('https://1336992.github.io/qrcode/mapa/');
    });

    /******************************************/
    $$('#curtir').on('click', function (e) {   
        document.getElementById("curtir").innerHTML = '<img id="curtiu" src="./images/curtir.png">';
    });

    $$('#pro-adm').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6021/CGAM%20-%20T%C3%A9cnico%20Integrado%20Proeja%20Administra%C3%A7%C3%A3o%20-%202014.pdf');
    });
    $$('#pro-artesanato').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6021/CTAG%20-%20T%C3%A9cnico%20Integrado%20Proeja%20Artesanato%20-%202013.pdf');
    });
    $$('#pro-edifica').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6021/CSAM%20-%20T%C3%A9cnico%20Integrado%20Proeja%20Edifica%C3%A7%C3%B5es%20-%202014.pdf');
    });
    $$('#pro-log').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6021/CGAM%20-%20T%C3%A9cnico%20Inegrado%20Proeja%20Log%C3%ADstica%20-%202012.pdf');
    });

    /*******************************************/
    $$('#sup-cic').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/4298_PROJETO%20PEDAG%C3%93GICO%20DE%20CURSO%20SUPERIOR%20EM%20COMPUTA%C3%87%C3%83O(1)%20(1).pdf');
    });
    $$('#sup-secret').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/2867/PPC%20Tecnologia%20em%20Secretariado.pdf');
    });
    $$('#sup-agroec').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/8219/AGROECOLOGIA%20e-%20mec%20FINAL%201-1.pdf');
    });
    $$('#sup-alimentos').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/10765/PPC_Tecnologoalimentos%2017.11.pdf');
    });
    $$('#sup-automa').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6010/PPC%20TEAI.pdf');
    });
    $$('#sup-bio').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6010/PPC%20Biologia_2.pdf');
    });
    $$('#sup-danca').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/4395_PPC%20APROVADO%2020-09-12.pdf');
    });
    $$('#sup-design').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6010/PPC%20TEDM.pdf');
    });
    $$('#sup-eduPro').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6010/PPC_Lic_Edic_Profissional.pdf');
    });
    $$('#sup-espanhol').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/10765/PPC%20LICENCIATURA%20EM%20LETRAS%20ESPANHOL%20vers%C3%A3o%203200hs%20(1).pdf');
    });
    $$('#sup-eventos').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/10765/PPC_CST%20Eventos.pdf');
    });
    $$('#sup-fisica').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/8219/F%C3%ADsica_IFB-Taguatinga_Vers%C3%A3o%20Final.pdf');
    });
    $$('#sup-gestao').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6010/PPC_Tecnologia%20em%20Gest%C3%A3o%20P%C3%BAblica_2013.pdf');
    });
    $$('#sup-ing').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/4298_PPC%20Licenciatura%20Riacho%20Fundo%20(revisto%20na%20reuni%C3%A3o%20de%2027-09)%20LINGUA%20INGLESA%20(1).pdf');
    });
    $$('#sup-internet').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/10765/PPC_Sistemas%20para%20Internet.pdf');
    });
    $$('#sup-logistica').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/8014/PPC%20Tecn%C3%B3logo%20Log%C3%ADstica%202014.pdf');
    });
    $$('#sup-mat').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6010/PPC_Lic_Matem%C3%A1tica.pdf');
    });
    $$('#sup-pedagogia').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/10765/PPC_Licenciatura%20em%20Pedagogia.pdf');
    });
    $$('#sup-port').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/10765/RESOLU%C3%87%C3%83O%20n%C2%BA%20018_PCC%20LICENCIATURA%20EM%20LETRAS%20-LINGUA%20PORTUGUESA.pdf');
    });
    $$('#sup-procGer').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/10573/Plano%20Processo%20Gerencias.pdf');
    });
    $$('#sup-quimica').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/3435/PPC%20Licenciatura%20em%20Qu%C3%ADmica.pdf');
    });

    $$('#posGestao').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/3269/PPC%20Especializa%C3%A7%C3%A3o%20em%20Gest%C3%A3o%20P%C3%BAblica.pdf');
    });

    /*******************************/
    $$('#ext-plano-tec-sub-agroneg').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6008/CGAM%20-%20T%C3%A9cnico%20Subsequente%20Agroneg%C3%B3cio%20-%202011.pdf');
    });

    $$('#ext-plano-tec-sub-agroind').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6008/CPLA%20-%20T%C3%A9cnico%20Subsequente%20Agroindustria%20-%202009.pdf');
    });

    $$('#ext-plano-tec-sub-agropec').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6008/CPLA%20-%20T%C3%A9cnico%20Subsequente%20Agropecu%C3%A1ria%20-%202012%20-%20em%20vigor%20a%20partir%20de%202-2013.pdf');
    });

    $$('#ext-plano-tec-sub-comercio').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/1739/PLANO%20CURSO%20COMERCIO%202014_atualizado%20para%20envio%20%C3%A0%20pren%20(1).pdf');
    });

    $$('#ext-plano-tec-sub-contAmb').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6008/CSAM%20-%20T%C3%A9cnico%20Subsequente%20Controle%20Ambiental%20-%202014.pdf');
    });

    $$('#ext-plano-tec-sub-coop').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/1911/PPC%20T%C3%A9cnico%20em%20Cooperativismo.pdf');
    });

    $$('#ext-plano-tec-sub-cozinha').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/2874/PC%20TCZ%202016.REVIS%C3%83O%20PREN%20JULHO%202016pdf.pdf');
    });

    $$('#ext-plano-tec-sub-eletrom').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6008/CTAG%20-%20T%C3%A9cnico%20Subsequente%20em%20Eletromec%C3%A2nica%20-%202011.pdf');
    });

    $$('#ext-plano-tec-sub-eletronica').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6008/CCEI%20-%20T%C3%A9cnico%20Subsequente%20Eletr%C3%B4nica%20-%202014.pdf');
    });

    $$('#ext-plano-tec-sub-edif').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6008/CSAM%20-%20T%C3%A9cnico%20Subsequente%20Edifica%C3%A7%C3%B5es%20-%202010.pdf');
    });

    $$('#ext-plano-tec-sub-equipBio').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6008/CCEI%20-%20T%C3%A9cnico%20Subsequente%20Equipamentos%20Biom%C3%A9dicos%20-%202014.pdf');
    });

    $$('#ext-plano-tec-sub-eventos').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6008/CBRA%20-%20T%C3%A9cnico%20Subsequente%20Eventos%20-%202011.pdf');
    });

    $$('#ext-plano-tec-sub-infoDev').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6008/CBRA%20-%20T%C3%A9cnico%20Subsequente%20em%20Informatica%20-%202010.pdf');
    });

    $$('#ext-plano-tec-sub-log').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6008/CGAM%20-%20T%C3%A9cnico%20Subsequente%20Log%C3%ADstica%20-%202014.pdf');
    });

    $$('#ext-plano-tec-sub-manAuto').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/10493/Plano%20de%20Curso_2015.pdf');
    });

    $$('#ext-plano-tec-sub-manSupInfo').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6008/CTAG%20-%20T%C3%A9cnico%20Subsequente%20em%20Manuten%C3%A7%C3%A3o%20e%20Suporte%20em%20Inform%C3%A1tica%20-%202011.pdf');
    });

    $$('#ext-plano-tec-sub-moveis').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6008/CSAM%20-%20T%C3%A9cnico%20Subsequente%20em%20M%C3%B3veis%20-%202010.pdf');
    });

    $$('#ext-plano-tec-sub-panifica').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/2874/PPC%20Panifica%C3%A7%C3%A3o%20-%20FINAL%20080716.pdf');
    });

    $$('#ext-plano-tec-sub-quim').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/3312/PPC%20T%C3%A9cnico%20em%20Qu%C3%ADmica%20+%20Adendo%20I.pdf');
    });

    $$('#ext-plano-tec-sub-servPub').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6008/CBRA%20-%20T%C3%A9cnico%20Subsequente%20Servi%C3%A7os%20P%C3%BAblicos%20-%202010.pdf');
    });

    $$('#ext-plano-tec-sub-secEsc').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6008/CSSB%20-%20T%C3%A9cnico%20Subsequente%20Secretaria%20Escolar%20-%202014.pdf');
    });
    $$('#ext-plano-tec-sub-sec').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6008/CSSB%20-%20T%C3%A9cnico%20Subsequente%20Secretariado%20-%202014.pdf');
    });

    $$('#ext-plano-tec-sub-vest').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6008/CTAG%20-%20T%C3%A9cnico%20Subsequente%20Vestu%C3%A1rio%20-%202011.pdf');
    });
    /*******************************/

    $$('#ext-plano-tec-agro').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6007/CPLA%20-%20T%C3%A9cnico%20Integrado%20Agropecu%C3%A1ria%202012.pdf');
    });

    $$('#ext-plano-tec-alim').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6007/CGAM%20-%20T%C3%A9cnico%20Integrado%20Alimentos%20-%202013.pdf');
    });

    $$('#ext-plano-tec-cont-amb').on('click', function (e) {
    openExtLink('#');
    });

    $$('#ext-plano-tec-cozinha').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/2874/PlanodeCursoEMITEC%20Cozinha%20final%20b%20(1).pdf');
    });

    $$('#ext-plano-tec-design').on('click', function (e) {
    openExtLink('#');
    });

    $$('#ext-plano-tec-eletro').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6397/Resolu%C3%A7%C3%A3o%2019%20----------PC_Integrado_Eletromec%C3%A2nica.pdf');
    });

    $$('#ext-plano-tec-info').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6397/Plano%20de%20Curso%20do%20Ensino%20M%C3%A9dio%20Integrado-Informatica-Readqua.pdf');
    });

    $$('#ext-plano-tec-hosp').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6007/CRFI%20-%20T%C3%A9cnico%20Integrado%20Hospedagem%20-%202015.pdf');
    });

    $$('#ext-plano-adm').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6007/CSSB%20-%20T%C3%A9cnico%20Integrado%20em%20Administra%C3%A7%C3%A3o%20-%202014.pdf');
    });

    $$('#ext-plano-sec').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6007/CSSB%20-%20T%C3%A9cnico%20Integrado%20em%20Administra%C3%A7%C3%A3o%20-%202014.pdf');
    });

    $$('#ext-plano-tec-alim').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/10765/PPC_Tecnologoalimentos%2017.11.pdf');
    });

    $$('#ead-seg-trab').on('click', function (e) {
    openExtLink('http://nead.ifb.edu.br/course/index.php?categoryid=79');
    });
    /*******************/

    $$('#ext_reitoria').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/reitori');
    });

    $$('#ext_atestado').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6311/apresentacaodeatestadosmedicos.pdf');
    });
    $$('#ext_decEscolaridade').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6311/declaracaodeescolaridadeouparaaquisicaodepasseestudantil.pdf');
    });
    $$('#ext_emiDiplo').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6311/emissaodediplomas.pdf');
    });
    $$('#ext_revalidaDiplo').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/6311/F10-valida%C3%A7%C3%A3o-e-certifica%C3%A7%C3%A3o-de-diplomas-do-exterior.pdf');
    });


    $$('#ext_seguro').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/portal-do-aluno/estagio/seguro-dos-alunos');
    });

    $$('#ext_fluxo-estagio').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/portal-do-aluno/estagio/links');
    });

    $$('#ext_convenio-estagio').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/11148/CONV%C3%8ANIOS%20DE%20EST%C3%81GIO%20VIGENTES%20EM%2024.11.2016.xls');
    });

    $$('#ext-regulamento-estagio').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/portal-do-aluno/estagio/leis-documentos-e-formularios');
    });

    $$('#politica_assistencia').on('click', function (e) {
    openExtLink($$("#politica_assistencia").attr("href"));
    });

    $$('#ext_siabi').on('click', function (e) {
    openExtLink('http://siabi.ifb.edu.br/#');
    });

    $$('#ext_regulamento-bib').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/5991/Resolu%C3%A7%C3%A3o%20010_%20Regulamento%20do%20Sistema%20de%20Bibliotecas%20do%20Instituto%20Federal%20de%20Brasilia%20APROVADO.pdf');
    });
 
    $$('#ext_termo-bib').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/attachments/article/5991/Termo%20de%20Compromisso%20-%20Empr%C3%A9stimo%20Setorial.doc');
    });
    
    $$('#ext_cal-Brasilia').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/index.php/institucional?id=8473');
    });

    $$('#ext_cal-ceilandia').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/index.php/campus-ceilandia/calendario-academico');
    });

    $$('#ext_cal-estrutural').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/index.php/campus-estrutural/calendario-academico');
    });

    $$('#ext_cal-gama').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/index.php/gama/documentos-institucionais');
    });

    $$('#ext_cal-planaltina').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/index.php/planaltina/documentos-institucionais');
    });

    $$('#ext_cal-riacho').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/index.php/riachofundo/documentos-institucionais');
    });

    $$('#ext_cal-Samambaia').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/index.php/samambaia/documentos-institucionais');
    });

    $$('#ext_cal-sebastiao').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/index.php/saosebastiao/documentos-institucionais');
    });

    $$('#ext_cal-taguatinga').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/index.php/taguatinga/documentos-institucionais');
    });

    $$('#ext_cal-tagCentro').on('click', function (e) {
    openExtLink('http://www.ifb.edu.br/index.php/taguatingacentro/horario-das-aulas');
    });

   
  

    /********************************TELEFONES**********************/
    $$('#telReitor').on('click', function (e) {
       openExtLink($$("#telReitor").attr("href"));
    });
     $$('#emailReitor').on('click', function (e) {
    openExtLink($$("#emailReitor").attr("href"));
    });
    /************************************/
    $$('#telDICOM').on('click', function (e) {
       openExtLink($$("#telDICOM").attr("href"));
    });
     $$('#emailDICOM').on('click', function (e) {
    openExtLink($$("#emailDICOM").attr("href"));
    });
    /************************************/
    $$('#telDTIC').on('click', function (e) {
       openExtLink($$("#telDTIC").attr("href"));    
    });
     $$('#emailDTIC').on('click', function (e) {
    openExtLink($$("#emailDTIC").attr("href"));
    });
    /************************************/
    $$('#telDRPO').on('click', function (e) {
       openExtLink($$("#telDRPO").attr("href"));    
    });
     $$('#emailDRPO').on('click', function (e) {
    openExtLink($$("#emailDRPO").attr("href"));
    });
    /************************************/
    $$('#telPRAD').on('click', function (e) {
       openExtLink($$("#telPRAD").attr("href"));    
    });
     $$('#emailPRAD').on('click', function (e) {
    openExtLink($$("#emailPRAD").attr("href"));
    });
    /************************************/
    $$('#telPREN').on('click', function (e) {
       openExtLink($$("#telPREN").attr("href"));    
    });
     $$('#emailPREN').on('click', function (e) {
    openExtLink($$("#emailPREN").attr("href"));
    });
    /************************************/
    $$('#telPREX').on('click', function (e) {
       openExtLink($$("#telPREX").attr("href"));    
    });
     $$('#emailPREX').on('click', function (e) {
    openExtLink($$("#emailPREX").attr("href"));
    });
    /************************************/
    $$('#telPRGP').on('click', function (e) {
       openExtLink($$("#telPRGP").attr("href"));    
    });
     $$('#emailPRGP').on('click', function (e) {
    openExtLink($$("#emailPRGP").attr("href"));
    });
    /************************************/
    $$('#telPRPI').on('click', function (e) {
       openExtLink($$("#telPRPI").attr("href"));    
    });
     $$('#emailPRPI').on('click', function (e) {
    openExtLink($$("#emailPRPI").attr("href"));
    });
    /************************************/
    $$('#telProc').on('click', function (e) {
       openExtLink($$("#telProc").attr("href"));    
    });
     $$('#emailProc').on('click', function (e) {
    openExtLink($$("#emailProc").attr("href"));
    });
    /************************************/
    $$('#telAud').on('click', function (e) {
       openExtLink($$("#telAud").attr("href"));    
    });
     $$('#emailAud').on('click', function (e) {
    openExtLink($$("#emailAud").attr("href"));
    });
    /************************************/
    $$('#telNENG').on('click', function (e) {
       openExtLink($$("#telNENG").attr("href"));    
    });
     $$('#emailNENG').on('click', function (e) {
    openExtLink($$("#emailNENG").attr("href"));
    });
    /************************************/
    $$('#telEAD').on('click', function (e) {
       openExtLink($$("#telEAD").attr("href"));    
    });
     $$('#emailEAD').on('click', function (e) {
    openExtLink($$("#emailEAD").attr("href"));
    });
    /*************Assistencia********************/
    $$('#telEAD').on('click', function (e) {
       openExtLink($$("#telAssBrasilia").attr("href"));    
    });
    /************************************/
    $$('#telEAD').on('click', function (e) {
       openExtLink($$("#telAssCei").attr("href"));    
    });
    /************************************/
    $$('#telEAD').on('click', function (e) {
       openExtLink($$("#telAssGama").attr("href"));    
    });
    /************************************/
    $$('#telEAD').on('click', function (e) {
       openExtLink($$("#telAssPlan").attr("href"));    
    });
    /************************************/
    $$('#telEAD').on('click', function (e) {
       openExtLink($$("#telAssSam").attr("href"));    
    });
    /************************************/
    $$('#telEAD').on('click', function (e) {
       openExtLink($$("#telAssSeb").attr("href"));    
    });
    /************************************/
    $$('#telEAD').on('click', function (e) {
       openExtLink($$("#telAssRiacho").attr("href"));    
    });
    /************************************/
    $$('#telEAD').on('click', function (e) {
       openExtLink($$("#telAssTag").attr("href"));    
    });
    /************************************/
    $$('#telEAD').on('click', function (e) {
       openExtLink($$("#telAssTagCentro").attr("href"));    
    });

    $$('#mail-joao').on('click', function (e) {
    openExtLink($$("#mail-joao").attr("href"));
    });

    /************************FIM DOS TELEFONES************************/
    

    function openExtLink(linkExterno){
        window.open(linkExterno, '_system');   
    }

})

/*$$('#sga1').on('click', function (e) {
    //cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
    var ref = cordova.InAppBrowser.open('https://sga.ifb.edu.br', '_self', 'location=yes');

    //openExtLink('https://sga.ifb.edu.br');
});
*/

$$('#ext-mapa').on('click', function (e) {
    openExtLinkInt('https://1336992.github.io/qrcode/mapa/');
    });

$$('#sga1').on('click', function (e) {
    openExtLink('https://sga.ifb.edu.br');
});

$$('#sga').on('click', function (e) {
    openExtLink('https://sga.ifb.edu.br');
});

function openExtLink(linkExterno){
     cordova.InAppBrowser.open(linkExterno, '_system');   
}

function openExtLinkInt(linkExterno){
     cordova.InAppBrowser.open(linkExterno, '_self');   
}

