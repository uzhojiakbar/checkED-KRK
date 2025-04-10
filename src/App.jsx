import React, { useState, useEffect, createContext, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Cookies from "js-cookie";
import styled, { createGlobalStyle } from "styled-components";

// **Foydalanuvchilar ro‘yxati**
const users = [
  {
    login: "uzhojiakbar",
    password: "#hojiakbar999",
    link: "https://youtube.com",
  },
  {
    login: "Voxabov2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1eUcgK6ebkbijY5Jx1DmiKovhCdDusvi9KrYeplowDQs/edit?gid=0#gid=0",
  },
    {
    login: "Komiljon_2025",
    password: "Komiljon_2025",
    link: "https://docs.google.com/spreadsheets/d/1eUcgK6ebkbijY5Jx1DmiKovhCdDusvi9KrYeplowDQs/edit?gid=0#gid=0",
  },
  {
    login: "Sabirova2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1rwx70ISaWD6RfyxstVrdRxvfQFjdG6COsD2RW1S4Lj4/edit?gid=0#gid=0",
  },
  {
    login: "Alinazarova2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1WO0gNUHX20NiQCbjWMfGRwPH6xlatl4ltp6i0evwJlw/edit?gid=0#gid=0",
  },
  {
    login: "Jumabayev2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1GC6N-q2nBcU0HoDW9BWoQYiUlwaOf7D5mnZFRJbw_vY/edit?gid=0#gid=0",
  },
  {
    login: "Ganiyev2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1OEPUP2m86bRrDr1qdM4sHCCQeWYzh_i_KQTiliBaqtU/edit?gid=0#gid=0",
  },
  {
    login: "Siddiqov2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1jYjd3E8fVZUhgo_CHSAMMTRg_Mg8Trlht2CdLqUh3CY/edit?gid=0#gid=0",
  },
  {
    login: "Insapov2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1GC6N-q2nBcU0HoDW9BWoQYiUlwaOf7D5mnZFRJbw_vY/edit?gid=0#gid=0",
  },
  {
    login: "Umarova2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1MJlzvmy1t0bqST0uB2iNiSELOs-zkhDSxdv49MKeDgc/edit?gid=0#gid=0",
  },
  {
    login: "Kadirova2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1TCG405IAdEQ--gzRBzBX18CcfG9RC-LiNxvDn2e1o8c/edit?gid=0#gid=0",
  },
  {
    login: "Goyibnazarova2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1dblPK-ux3VzApB5NTgTYvoeIPl1Fl6Zl3i0RZ9mjpt0/edit?gid=0#gid=0",
  },
  {
    login: "Djorayev2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/10c3Maz3KXWuMpn0ks1r8uF6Y9S7MPkeWG2Ub09m22hU/edit?gid=0#gid=0",
  },
  {
    login: "Oripov2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/12GsfUE5YOMvegcbPBCRR9VS3W56mxYm9UHfLKd_zAUI/edit?gid=0#gid=0",
  },
  {
    login: "Qoriyev2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/13ElRiTdsWSQtxzm9Zd6wglQmEC7ySXTI7dKRozbOMa4/edit?gid=0#gid=0",
  },
  {
    login: "Guzel2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/13k7b8frKQDqlnxkq3nFp-j2ambaDksnQcT57hUu6LgI/edit?gid=0#gid=0",
  },
  {
    login: "Nuriddinova2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/14TjA7PiAIa9SRsDOeXqGs7ayxp7aSJvuPbLAnqLcbmc/edit?gid=0#gid=0",
  },
  {
    login: "Ergasheva2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/14jhZfiV31SAkJX1LeKfItToyUNWRNumCCDMBXRi0uYc/edit?gid=0#gid=0",
  },
  {
    login: "Orifova2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/152M7Vywx2rGHa4ypdY3v5bKtBQTllDoOp3f02jEy3OU/edit?gid=0#gid=0",
  },
  {
    login: "Nematova2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/16SZvKbhvVp3zazdEgFUS0RWPHVTKI9TIg6m9ZEIMx_c/edit?gid=0#gid=0",
  },
  {
    login: "Yulchiyev2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/16f0-4Z5pX2i4LLsu1jtVciOVo8bkkQXP1ZUy8KCG16U/edit?gid=0#gid=0",
  },
  {
    login: "Domarova2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/18GODbN23V4phz8tqi4tKaG9uV7-_10_2nev6fZClIxQ/edit?gid=0#gid=0",
  },
  {
    login: "Olimjanova2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/198_EGE5tcHSKR98094cdUP_SpmO8HllHW2iRwZ7-zfc/edit?gid=0#gid=0",
  },
  {
    login: "Tadjibayeva2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/19eD5AJDozmzFfbeAko6_eIkExgL7TgTNhbrFyHn9G_k/edit?gid=0#gid=0",
  },
  {
    login: "Shamsiyeva2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1BeE45d6pEUbe-KRJ2OT5MQ-gZilVqL8k9_1OXJJnTxk/edit?gid=0#gid=0",
  },
  {
    login: "Azimov2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1CHsu91IeTaBUQIiqsWCIuSllnsLxVp9ASADQIMD3DyY/edit?gid=0#gid=0",
  },
  {
    login: "Jorayeva2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1EcZaQUIjyxOiE5tQOuPGah5J9qte3cGc7eH9b5kotts/edit?gid=0#gid=0",
  },
  {
    login: "Qarabayev2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1G3RiXo-ug8RLeMU2xH7iReVUURlORxl05Z-qyYrgmpA/edit?gid=0#gid=0",
  },
  {
    login: "Eraliyev2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1GxRBF7tyMxhGDhdrSRrnG-Jr7YZUns9bAJ7keXLRseE/edit?gid=0#gid=0",
  },
  {
    login: "Abdullajanova2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1H9yo-C5-xkgkCs3Gmh6g4cJDUN6oQEi1ps-mAe-wVLs/edit?gid=0#gid=0",
  },
  {
    login: "Bostonov2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1HZ8vSREfTZReaiH2_G67CbHWukZOWEE6mS5IXmYC7Og/edit?gid=0#gid=0",
  },
  {
    login: "Usmonova2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1IBglTA4KMRcgtzl9aoYMN3KhilcVu30_k_tk0eBO2ek/edit?gid=0#gid=0",
  },
  {
    login: "Satvoldiyev2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1IFsT-y5jRDFceMPZytR1wdnF9ggJxDzLyXR06baLdNU/edit?gid=0#gid=0",
  },
  {
    login: "Nabiyev_Boxodir2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1IYXOsYLImRxIvkq_7mr5XMa4RaM_1UF2_jXdJLeHny4/edit?gid=0#gid=0",
  },
  {
    login: "Otaxonova2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1Kc9zORet8wkdUVXx66icU0Q_VGIbbq_N28OdgcdnvUw/edit?gid=0#gid=0",
  },
  {
    login: "Parpiyeva2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1MBNORdnxYeVNQg9S83jmy9sxGhL0SC3luEltCVfVogk/edit?gid=0#gid=0",
  },
  {
    login: "Aziboyev2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1MfCRUBXs7vFBAf04IiM-W0yEu6iKHbtlaUXChD8-lso/edit?gid=0#gid=0",
  },
  {
    login: "Tuxtasinov2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1MhPPz8KZO33w-WoeEFCLKIo-6foCGStUyT_3vsjyHOI/edit?gid=0#gid=0",
  },
  {
    login: "Egamberdiyev2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1MmsfJJ63SQRkgriUdv-uJX_-3BHslLLt5JHiQGFPyLw/edit?gid=0#gid=0",
  },
  {
    login: "Urinov2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1MrtkptX0N8J0SYedTl7BEGmk9ImLzOpH4T_TpFbXZhU/edit?gid=0#gid=0",
  },
  {
    login: "Ahmedov2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1NJyMe3cwZp4Zs6a137VXOocarFGk1MUbYF8kAyVZ4ME/edit?gid=0#gid=0",
  },
  {
    login: "Ahmedov_2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1O6XXO0z5MC9FW7_N1ziq5__b1PBBY9k9QalkJ4Q2yXo/edit?gid=0#gid=0",
  },
  {
    login: "Raxmatullayeva2025",
    password: "Gulbahor2025",
    link: "https://docs.google.com/spreadsheets/d/1OEiXve0r9cDBOtK_hQE2ZTjFq5Aeoy2RH66XoyuSc5c/edit?gid=0#gid=0",
  },
  {
    login: "Turdiyeva2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1P_ZFsRjGNuND8SvIxpdwtl0xEASfS7OiK_RGEUS-JXM/edit?gid=0#gid=0",
  },
  {
    login: "Xakimova2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1R7UI2e_wui1sKAU_P5qRsbuhQfn2U2v6raF8Cy0A1j8/edit?gid=0#gid=0",
  },
  {
    login: "Qayumov2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1RpJOf5YaKFA5Iu1nduKPiqGmg1GGoE_FjbRqN0VBuzk/edit?gid=0#gid=0",
  },
  {
    login: "Nurmatov2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1ScWBD0_iKyUFzXxalkINuLueylA4gSWrky0bVnhec4c/edit?gid=0#gid=0",
  },
  {
    login: "Abdujabborov2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1U3zbYiXKMkK4-pCKOL6aZfWUJ_DJqhsecDV1LXvaNzo/edit?gid=0#gid=0",
  },
  {
    login: "Musayeva2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1UxJ13lWomcuqTaTHh1awvUiPi-CvhNUSvQjCr5sZBpA/edit?gid=0#gid=0",
  },
  {
    login: "Rasulova2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1V1mRRDjeqSZOSUmEAr8orLqL-1Ctn_GUuA3xDXgIrGU/edit?gid=0#gid=0",
  },
  {
    login: "Samidjanova2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1WUmdo6NQxDK-7Yo6gW6ZT874zGeV7kBtlk-6Xho-0VY/edit?gid=0#gid=0",
  },
  {
    login: "Qochkarov2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1WwOGI3A34u7TSUYZ23YVjh8G2TdkkiauwpmUTPEFxRA/edit?gid=0#gid=0",
  },
  {
    login: "Xoshimova2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1Z6EekFmYYHaI48ND9Osqfy4mDWsV0OGRbdl1F5DFzCk/edit?gid=0#gid=0",
  },
  {
    login: "Nishonova2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1a_2TpLJD7evyEIBKIxXYVC4Md-2vGSJBo2kW0QxnRw8/edit?gid=0#gid=0",
  },
  {
    login: "Aliyeva2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1ancvJeH0vEVyBe4QRHz-IUhUfTXEPFtx9-gJ060bB1A/edit?gid=0#gid=0",
  },
  {
    login: "Qambarova2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1bS4Bb8t6zgUgDV_AdwegOv9Js954-y7vjR3gZLSkOwM/edit?gid=0#gid=0",
  },
  {
    login: "Mamadaliyev2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1bzGZPGHuxL-BHSN98lc4C6EFqt-mAZBUGUFnJOwExpI/edit?gid=0#gid=0",
  },
  {
    login: "Axmadbekova2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1cggZA4eWHp1fiIrtwiclDZQFv2wgJ5t-uosXQDBBQqg/edit?gid=0#gid=0",
  },
  {
    login: "Asqarova2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1jFfScTDIXTpcMe4TLeT7diFifmJu77H5QYtYmD7cYn8/edit?gid=0#gid=0",
  },
  {
    login: "Nizamova2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1ldx9Zu3QDopj1feuqCc5bKLJJB5VGznoIoIZ6nalp-c/edit?gid=0#gid=0",
  },
  {
    login: "Xolmirzayeva2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1m8HAHGCPUr64u1W0tFIeuTJD4x6PxkXj1RnDogpvAwU/edit?gid=0#gid=0",
  },
  {
    login: "Nurmatov2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1ovwfxO5i2EUDB3HE6fUD0iC6RDCK52v7h_kHnAZ2WMM/edit?gid=0#gid=0",
  },
  {
    login: "Nabiyev2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1pr4-INkkVl1a2_fPyFMhnecBqkMLYwmCNE-Il1CKTss/edit?gid=0#gid=0",
  },
  {
    login: "Abdullayeva2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1rQdCSzFnQr6IPL2DkyggzXTIxmrwUmNHLMD4Rnik2UI/edit?gid=0#gid=0",
  },
  {
    login: "Raximov2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1rsgbDMbOksBnzmKMy0rtYED7u7GtFmF3yDPKDToMOWY/edit?gid=0#gid=0",
  },
  {
    login: "Uzoqov2025",
    password: "Nvpmm2025",
    link: "https://docs.google.com/spreadsheets/d/1tUglXspyXpccLFW2dGfPCEmqB-o4Qb6eNHLjvDJTt9I/edit?gid=0#gid=0",
  },

  {
    login: "Djamoliddinova2025",
    password: "Djamoliddinova2025",
    link: "https://docs.google.com/spreadsheets/d/1tUglXspyXpccLFW2dGfPCEmqB-o4Qb6eNHLjvDJTt9I/edit?gid=0#gid=0",
  },
  {
    login: "Sabirova2025",
    password: "Sabirova2025",
    link: "https://docs.google.com/spreadsheets/d/1tUglXspyXpccLFW2dGfPCEmqB-o4Qb6eNHLjvDJTt9I/edit?gid=0#gid=0",
  },
  {
    login: "Sattarova2025",
    password: "Sattarova2025",
    link: "https://docs.google.com/spreadsheets/d/1tUglXspyXpccLFW2dGfPCEmqB-o4Qb6eNHLjvDJTt9I/edit?gid=0#gid=0",
  },
  {
    login: "muhammadyusuf",
    password: "11232023",
    link: "https://docs.google.com/spreadsheets/d/1tUglXspyXpccLFW2dGfPCEmqB-o4Qb6eNHLjvDJTt9I/edit?gid=0#gid=0",
  },
  {
    login: "NabiyevBahodir",
    password: "Bahodir0092",
    link: "https://docs.google.com/spreadsheets/d/1tUglXspyXpccLFW2dGfPCEmqB-o4Qb6eNHLjvDJTt9I/edit?gid=0#gid=0",
  },
  ,
  {
    login: "lingvist",
    password: "2824",
    link: "https://docs.google.com/spreadsheets/d/1tUglXspyXpccLFW2dGfPCEmqB-o4Qb6eNHLjvDJTt9I/edit?gid=0#gid=0",
  },
  {
    login: "Asqarova2025",
    password: "Asqarova2025",
    link: "https://docs.google.com/spreadsheets/d/1tUglXspyXpccLFW2dGfPCEmqB-o4Qb6eNHLjvDJTt9I/edit?gid=0#gid=0",
  },
  {
    login: "Javlon_1994",
    password: "Javlon_2025",
    link: "https://docs.google.com/spreadsheets/d/1tUglXspyXpccLFW2dGfPCEmqB-o4Qb6eNHLjvDJTt9I/edit?gid=0#gid=0",
  },
  {
    login: "Ravshanoy_2025",
    password: "Ravshanoy_2025",
    link: "https://docs.google.com/spreadsheets/d/1tUglXspyXpccLFW2dGfPCEmqB-o4Qb6eNHLjvDJTt9I/edit?gid=0#gid=0",
  },
  {
    login: "Farhodjon_2025",
    password: "Farhodjon_2025",
    link: "https://docs.google.com/spreadsheets/d/1tUglXspyXpccLFW2dGfPCEmqB-o4Qb6eNHLjvDJTt9I/edit?gid=0#gid=0",
  },
  {
    login: "Mahliyo_2025",
    password: "Mahliyo_2025",
    link: "https://docs.google.com/spreadsheets/d/1tUglXspyXpccLFW2dGfPCEmqB-o4Qb6eNHLjvDJTt9I/edit?gid=0#gid=0",
  },
  {
    login: "Botirova2025",
    password: "Botirova2025",
    link: "https://docs.google.com/spreadsheets/d/1tUglXspyXpccLFW2dGfPCEmqB-o4Qb6eNHLjvDJTt9I/edit?gid=0#gid=0",
  },
  {
    login: "Muyassar_2025",
    password: "Muyassar_2025",
    link: "https://docs.google.com/spreadsheets/d/1tUglXspyXpccLFW2dGfPCEmqB-o4Qb6eNHLjvDJTt9I/edit?gid=0#gid=0",
  },
  {
    login: "AAbdullayev_2025",
    password: "AAbdullayev_2025",
    link: "https://docs.google.com/spreadsheets/d/1tUglXspyXpccLFW2dGfPCEmqB-o4Qb6eNHLjvDJTt9I/edit?gid=0#gid=0",
  },
  {
    login: "Mohira_2025",
    password: "Mohira_2025",
    link: "https://docs.google.com/spreadsheets/d/1tUglXspyXpccLFW2dGfPCEmqB-o4Qb6eNHLjvDJTt9I/edit?gid=0#gid=0",
  },
  {
    login: "Kolyaniskova_2025",
    password: "Tatyana_2025",
    link: "https://docs.google.com/spreadsheets/d/1tUglXspyXpccLFW2dGfPCEmqB-o4Qb6eNHLjvDJTt9I/edit?gid=0#gid=0",
  },
  {
    login: "Qarabayev_2025",
    password: "Jamshid_2025",
    link: "https://docs.google.com/spreadsheets/d/1tUglXspyXpccLFW2dGfPCEmqB-o4Qb6eNHLjvDJTt9I/edit?gid=0#gid=0",
  },
  {
    login: "Rustamjon_2025",
    password: "Rustamjon_2025",
    link: "https://docs.google.com/spreadsheets/d/1tUglXspyXpccLFW2dGfPCEmqB-o4Qb6eNHLjvDJTt9I/edit?gid=0#gid=0",
  },{
    login: "Maftuna_2025",
    password: "Maftuna_2025",
    link: "https://docs.google.com/spreadsheets/d/1tUglXspyXpccLFW2dGfPCEmqB-o4Qb6eNHLjvDJTt9I/edit?gid=0#gid=0",
  },{
    login: "Shaxzoda_2025",
    password: "Shaxzoda_2025",
    link: "https://docs.google.com/spreadsheets/d/1tUglXspyXpccLFW2dGfPCEmqB-o4Qb6eNHLjvDJTt9I/edit?gid=0#gid=0",
  },
  {
    login: "Nazarova_2025",
    password: "Nazarova_2025",
    link: "https://docs.google.com/spreadsheets/d/1tUglXspyXpccLFW2dGfPCEmqB-o4Qb6eNHLjvDJTt9I/edit?gid=0#gid=0",
  },
  {
    login: "Risolat_2025",
    password: "Risolat_2025",
    link: "https://docs.google.com/spreadsheets/d/1tUglXspyXpccLFW2dGfPCEmqB-o4Qb6eNHLjvDJTt9I/edit?gid=0#gid=0",
  },
  {
    login: "Nazarova_2025",
    password: "Nazarova_2025",
    link: "https://docs.google.com/spreadsheets/d/1tUglXspyXpccLFW2dGfPCEmqB-o4Qb6eNHLjvDJTt9I/edit?gid=0#gid=0",
  },
  {
    login: "Davlatov_2025",
    password: "Davlatov_2025",
    link: "https://docs.google.com/spreadsheets/d/1tUglXspyXpccLFW2dGfPCEmqB-o4Qb6eNHLjvDJTt9I/edit?gid=0#gid=0",
  },
  {
    login: "Gulhayo_2025",
    password: "Gulhayo_2025",
    link: "https://docs.google.com/spreadsheets/d/1tUglXspyXpccLFW2dGfPCEmqB-o4Qb6eNHLjvDJTt9I/edit?gid=0#gid=0",
  },
  {
    login: "Leniye_2025",
    password: "Leniye_2025",
    link: "https://docs.google.com/spreadsheets/d/1tUglXspyXpccLFW2dGfPCEmqB-o4Qb6eNHLjvDJTt9I/edit?gid=0#gid=0",
  },
  {
    login: "Nurullo_2025",
    password: "Nurullo_2025",
    link: "https://docs.google.com/spreadsheets/d/1tUglXspyXpccLFW2dGfPCEmqB-o4Qb6eNHLjvDJTt9I/edit?gid=0#gid=0",
  },
  {
    login: "Mirlaziz_2025",
    password: "Mirlaziz_2025",
    link: "https://docs.google.com/spreadsheets/d/1tUglXspyXpccLFW2dGfPCEmqB-o4Qb6eNHLjvDJTt9I/edit?gid=0#gid=0",
  },
  {
    login: "Azizbek_2025",
    password: "Azizbek_2025",
    link: "https://docs.google.com/spreadsheets/d/1tUglXspyXpccLFW2dGfPCEmqB-o4Qb6eNHLjvDJTt9I/edit?gid=0#gid=0",
  },
  {
    login: "Qurbonov_2025",
    password: "Qurbonov_2025",
    link: "https://docs.google.com/spreadsheets/d/1tUglXspyXpccLFW2dGfPCEmqB-o4Qb6eNHLjvDJTt9I/edit?gid=0#gid=0",
  },
  { login: "Admin", password: "#Admin", link: "none" },
];

// **Global Styling**
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1a1a1a;
    color: white;
    font-family: 'Poppins', sans-serif;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 300px;
  background: #2b2b2b;
  border-radius: 12px;
  padding: 40px 30px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h1`
  font-size: 28px;
  color: #ffffff;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  border: none;
  background: #3c3c3c;
  color: white;
  outline: none;
  width: 100%;
  font-size: 16px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
  &:focus {
    border: 2px solid #4caf50;
  }
`;

const Button = styled.button`
  padding: 14px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #4caf50, #2f8d46);
  color: white;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  transition: background 0.3s ease;
  &:hover {
    background: linear-gradient(135deg, #2f8d46, #236b3b);
  }
`;

const ErrorText = styled.p`
  color: #ff4d4f;
  font-size: 14px;
  margin-top: 10px;
`;

const Panel = styled.div`
  background: #1f1f1f;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 500px;
`;

const PanelTitle = styled.h2`
  color: #4caf50;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const UserInfo = styled.div`
  background: #2c2c2c;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

const Label = styled.div`
  font-weight: bold;
  color: #4caf50;
`;

const Value = styled.div`
  color: #ffffff;
  margin-bottom: 5px;
`;

// **Authentication Context**
const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

// **Login Page**
const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({ login: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = login(credentials);
    if (user) {
      navigate("/dashboard");
    } else {
      setError("⚠ Login yoki parol noto‘g‘ri!");
    }
  };

  return (
    <Container>
      <Title>Kirish</Title>
      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <Input
          type="text"
          name="login"
          placeholder="Login"
          value={credentials.login}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Parol"
          value={credentials.password}
          onChange={handleChange}
        />
        <Button type="submit">Kirish</Button>
      </form>
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};

// **Dashboard Page**
const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <Container>
      <Title>Hisobga kirdingiz!</Title>
      {user.link !== "none" ? (
        <Button
          as="a"
          href={
            "https://docs.google.com/spreadsheets/d/10cjbPOLVYoYj3Yrdtlfv0pLRXi7OoA7yQ3zLUKZgXew/edit?usp=sharing"
          }
          target="_blank"
        >
          Davomatga o‘tish
        </Button>
      ) : (
        <AdminPanel />
      )}
      <Button onClick={logout}>Chiqish</Button>
    </Container>
  );
};

// **Admin Panel**
const AdminPanel = () => (
  <Panel>
    <PanelTitle>Foydalanuvchilar Ro'yxati</PanelTitle>
    {users.map(
      (u, index) =>
        u.login !== "Admin" && (
          <UserInfo key={index}>
            <Label>Login:</Label>
            <Value>{u.login}</Value>
            <Label>Parol:</Label>
            <Value>{u.password}</Value>
            <Label>Link:</Label>
            <Value>{u.link === "none" ? "Link mavjud emas" : u.link}</Value>
          </UserInfo>
        )
    )}
  </Panel>
);

// **Authentication Provider**
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = Cookies.get("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (credentials) => {
    const foundUser = users.find(
      (u) =>
        u?.login === credentials.login && u?.password === credentials.password
    );
    if (foundUser) {
      setUser(foundUser);
      Cookies.set("user", JSON.stringify(foundUser), { expires: 1 });
      return foundUser;
    }
    return null;
  };

  const logout = () => {
    setUser(null);
    Cookies.remove("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// **App Component**
const App = () => {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
