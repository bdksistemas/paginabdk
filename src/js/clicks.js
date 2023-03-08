(function() {
    'use strict';

    // ? VARIABLES 
    var cerrado     = true;
    var menuLat     = false;

    let promociones = [];
    let heros = [];

    // LISTA DE VÍDEOS DE CAPACITACIÓN

    const videos_capacitacion = [
        {id: 'gym_v1', src: 'https://www.youtube.com/embed/7fWebXVKnwA'},
        {id: 'gym_v2', src: 'https://www.youtube.com/embed/x0gIxxfAfqA'},
        {id: 'gym_v3', src: 'https://www.youtube.com/embed/DOMCRLnxTVM'},
        {id: 'gym_v4', src: 'https://www.youtube.com/embed/yNHPr5ig1GA'},
        {id: 'gym_v5', src: 'https://www.youtube.com/embed/ac7r22hgzow'},
        {id: 'gym_v6', src: 'https://www.youtube.com/embed/YD-P3-APos0'},
        {id: 'gym_v7', src: 'https://www.youtube.com/embed/KQ8ieD8yISg'},
        {id: 'gym_v8', src: 'https://www.youtube.com/embed/_tcrN8DJIes'},
        {id: 'gym_v9', src: 'https://www.youtube.com/embed/iYnRzNlSi1Q'},
        {id: 'gym_v10', src: 'https://www.youtube.com/embed/lIp6X9fYOww'},
        {id: 'gym_v11', src: 'https://www.youtube.com/embed/guTJO2Nypmo'},
        {id: 'gym_v12', src: 'https://www.youtube.com/embed/G6XnPAWaZS8'},
        {id: 'gym_v13', src: 'https://www.youtube.com/embed/GF4s8Y38ZGw'},
        {id: 'gym_v14', src: 'https://www.youtube.com/embed/kK1xDZl49Yg'},
        {id: 'gym_v15', src: 'https://www.youtube.com/embed/K7bS_fX_Frc'},
        {id: 'gym_v16', src: 'https://www.youtube.com/embed/2WA137iTNWw'},
        {id: 'gym_v17', src: 'https://www.youtube.com/embed/vHZMrwN0PDg'},
        {id: 'gym_v18', src: 'https://www.youtube.com/embed/BPbNTo6WhGE'},
        {id: 'gym_v19', src: 'https://www.youtube.com/embed/pZhOePXnl_I'},
        {id: 'gym_v20', src: 'https://www.youtube.com/embed/qnFrrnV1RbI'},
        {id: 'gym_v21', src: 'https://www.youtube.com/embed/QbS-yIWYh6A'},
        {id: 'gym_v22', src: 'https://www.youtube.com/embed/Wo8EBShd6XU'},
        {id: 'gym_v23', src: 'https://www.youtube.com/embed/az50U4dNQlw'},
        {id: 'gym_v24', src: 'https://www.youtube.com/embed/WaIBA1TzPF0'},
        {id: 'gym_v25', src: 'https://www.youtube.com/embed/b3YVY7TPjO8'},
        {id: 'gym_v26', src: 'https://www.youtube.com/embed/SvCw_UnoBXY'},
        {id: 'gym_v27', src: 'https://www.youtube.com/embed/F9_XhMvS8mo'},
        {id: 'gym_v28', src: 'https://www.youtube.com/embed/JQJlPkuHVh0'},
        {id: 'gym_v29', src: 'https://www.youtube.com/embed/76b7Ohq2-3g'},
        {id: 'gym_v30', src: 'https://www.youtube.com/embed/qOWZySUMy6Q'},
        {id: 'gym_v31', src: 'https://www.youtube.com/embed/rbncWMU3rnw'},
        {id: 'gym_v32', src: 'https://www.youtube.com/embed/lntabqevM_I'},
        {id: 'gym_v33', src: 'https://www.youtube.com/embed/XUCPweqo3Ko'},
        {id: 'gym_v34', src: 'https://www.youtube.com/embed/AeJIx3tj8lg'},
        {id: 'gym_v35', src: 'https://www.youtube.com/embed/I5GhVtVnLM4'},
        {id: 'gym_v36', src: 'https://www.youtube.com/embed/Z049rIdI0Zw'},

        {id: 'fac_v1', src: 'https://www.youtube.com/embed/IbBluPB3HhI'},
        {id: 'fac_v2', src: 'https://www.youtube.com/embed/q33Xpdd_J8k'},
        {id: 'fac_v3', src: 'https://www.youtube.com/embed/1nP9iLX13aM'},
        {id: 'fac_v4', src: 'https://www.youtube.com/embed/F0qWUjxDoxg'},
        {id: 'fac_v5', src: 'https://www.youtube.com/embed/ToJVRE7YrMY'},
        {id: 'fac_v6', src: 'https://www.youtube.com/embed/s6KJVxRhjOw'},
        {id: 'fac_v7', src: 'https://www.youtube.com/embed/k-y4OnehmuY'},
        {id: 'fac_v8', src: 'https://www.youtube.com/embed/3lZE4MxszW8'},

        {id: 'rest_v1', src: 'https://www.youtube.com/embed/_uEsl4orKe0'},
        {id: 'rest_v2', src: 'https://www.youtube.com/embed/BGQufcbnxw4'},
        {id: 'rest_v3', src: 'https://www.youtube.com/embed/MlNhBv7gL00'},
        {id: 'rest_v4', src: 'https://www.youtube.com/embed/WnNdG3WCwOk'},
        {id: 'rest_v5', src: 'https://www.youtube.com/embed/JhoKvHyjIuE'},
        {id: 'rest_v6', src: 'https://www.youtube.com/embed/OGh6CXS0oAY'},
        {id: 'rest_v7', src: 'https://www.youtube.com/embed/99AF60cQb5E'},
        {id: 'rest_v8', src: 'https://www.youtube.com/embed/P5SginOBiag'},
        {id: 'rest_v9', src: 'https://www.youtube.com/embed/rjtwcCez2NA'},
        {id: 'rest_v10', src: 'https://www.youtube.com/embed/YtMwbMGBqS8'},
        {id: 'rest_v11', src: 'https://www.youtube.com/embed/QI852Isuxe8'},
        {id: 'rest_v12', src: 'https://www.youtube.com/embed/CZjJbWPW3Hs'},
        {id: 'rest_v13', src: 'https://www.youtube.com/embed/s6KJVxRhjOw'},
        {id: 'rest_v14', src: 'https://www.youtube.com/embed/sUIi3nyXNZw'},
        {id: 'rest_v15', src: 'https://www.youtube.com/embed/_pPHHBhU49M'},
        {id: 'rest_v16', src: 'https://www.youtube.com/embed/a803r4Egwmc'},
        {id: 'rest_v17', src: ''},       // Está duplicado el registro con el v16
        {id: 'rest_v18', src: 'https://www.youtube.com/embed/qgUt3-jscvw'},
        {id: 'rest_v19', src: 'https://www.youtube.com/embed/AwTYTFymJyQ'},
        {id: 'rest_v20', src: 'https://www.youtube.com/embed/kBIkB6jdGnI'},
        {id: 'rest_v21', src: 'https://www.youtube.com/embed/JO5aMOmnYo0'},
        {id: 'rest_v22', src: 'https://www.youtube.com/embed/MOfb0lum0Bs'},
        {id: 'rest_v23', src: 'https://www.youtube.com/embed/QYsnrakYnwI'},
        {id: 'rest_v24', src: 'https://www.youtube.com/embed/jaAClB3opes'},
        {id: 'rest_v25', src: 'https://www.youtube.com/embed/Qe8nnTO3958'},
        {id: 'rest_v26', src: 'https://www.youtube.com/embed/Gb_iq6w1sCA'},
        {id: 'rest_v27', src: 'https://www.youtube.com/embed/zCHJpP5iUJc'},
        {id: 'rest_v28', src: 'https://www.youtube.com/embed/qb1T-jk7jEc'},
        {id: 'rest_v29', src: 'https://www.youtube.com/embed/HpN8K1-KM5E'},
        {id: 'rest_v30', src: 'https://www.youtube.com/embed/O-hSfDFE4c8'},
        {id: 'rest_v31', src: 'https://www.youtube.com/embed/E_bj-sTOmg0'},
        {id: 'rest_v32', src: 'https://www.youtube.com/embed/bz5yrAOiiL0'},
        {id: 'rest_v33', src: 'https://www.youtube.com/embed/vfQCdlUkB3c'},
        {id: 'rest_v34', src: 'https://www.youtube.com/embed/hn6z9yt_jzs'},
        {id: 'rest_v35', src: 'https://www.youtube.com/embed/6rtt3s9zPsQ'},
        {id: 'rest_v36', src: 'https://www.youtube.com/embed/IOHVdsfUO0Q'},
        {id: 'rest_v37', src: 'https://www.youtube.com/embed/biYflRyHgck'},
        {id: 'rest_v38', src: 'https://www.youtube.com/embed/t7n-eqyCIgE'},
        {id: 'rest_v39', src: 'https://www.youtube.com/embed/k-y4OnehmuY'},
        {id: 'rest_v40', src: 'https://www.youtube.com/embed/IbBluPB3HhI'},
        {id: 'rest_v41', src: 'https://www.youtube.com/embed/3lZE4MxszW8'},
        {id: 'rest_v42', src: 'https://www.youtube.com/embed/1nP9iLX13aM'},
        {id: 'rest_v43', src: 'https://www.youtube.com/embed/q33Xpdd_J8k'},
        {id: 'rest_v44', src: 'https://www.youtube.com/embed/Bl4o9Vf0ZIs'},
        {id: 'rest_v45', src: 'https://www.youtube.com/embed/Hgeh5D1-yUA'},
        {id: 'rest_v46', src: 'https://www.youtube.com/embed/F0qWUjxDoxg'},
        {id: 'rest_v47', src: 'https://www.youtube.com/embed/ToJVRE7YrMY'},

        {id: 'spa_v1', src: 'https://www.youtube.com/embed/RHG6hJR509U'},
        {id: 'spa_v2', src: 'https://www.youtube.com/embed/ljoR74YDD0I'},
        {id: 'spa_v3', src: 'https://www.youtube.com/embed/h7xp8CzLEkI'},
        {id: 'spa_v4', src: 'https://www.youtube.com/embed/gNbFDdpy6UU'},
        {id: 'spa_v5', src: 'https://www.youtube.com/embed/TbnOA2qJLRI'},
        {id: 'spa_v6', src: 'https://www.youtube.com/embed/yU3oLweAAs4'},
        {id: 'spa_v7', src: 'https://www.youtube.com/embed/driE8fiy7JQ'},
        {id: 'spa_v8', src: 'https://www.youtube.com/embed/_0CAF79DJek'},
        {id: 'spa_v9', src: 'https://www.youtube.com/embed/vFEgwFCJVYw'},
        {id: 'spa_v10', src: 'https://www.youtube.com/embed/1DotsZzRFPI'},
        {id: 'spa_v11', src: 'https://www.youtube.com/embed/m-Hw0iIbNUM'},
        {id: 'spa_v12', src: 'https://www.youtube.com/embed/Z1qEg73wK2M'},
        {id: 'spa_v13', src: 'https://www.youtube.com/embed/uAV2CG2Oq1M'},
        {id: 'spa_v14', src: 'https://www.youtube.com/embed/1AD253pu_DM'},
        {id: 'spa_v15', src: 'https://www.youtube.com/embed/vOfLJe1nayo'},
        {id: 'spa_v16', src: 'https://www.youtube.com/embed/KpWdJ7FVl6M'},
        {id: 'spa_v17', src: 'https://www.youtube.com/embed/tUDpzBoENrg'},
        {id: 'spa_v18', src: 'https://www.youtube.com/embed/SPlcjjJa9ac'},
        {id: 'spa_v19', src: 'https://www.youtube.com/embed/fVJKAQiprRU'},
        {id: 'spa_v20', src: 'https://www.youtube.com/embed/XftD4yYkd58'},
        {id: 'spa_v21', src: 'https://www.youtube.com/embed/iZqaCjy8MbY'},
        {id: 'spa_v22', src: 'https://www.youtube.com/embed/3kROTR53iaQ'},
        {id: 'spa_v23', src: 'https://www.youtube.com/embed/twrtvwPDDPc'},
        {id: 'spa_v24', src: 'https://www.youtube.com/embed/zP6FK1i7J3U'},
        {id: 'spa_v25', src: 'https://www.youtube.com/embed/7AYR_fWuGYY'},
        {id: 'spa_v26', src: 'https://www.youtube.com/embed/L7vF764XZlw'},
        {id: 'spa_v27', src: 'https://www.youtube.com/embed/0emZ3C_-yAM'},
        {id: 'spa_v28', src: 'https://www.youtube.com/embed/1AK-6CjU5kE'},
        {id: 'spa_v29', src: 'https://www.youtube.com/embed/vlBeVwHnR38'},
        {id: 'spa_v30', src: 'https://www.youtube.com/embed/m5Y10eZ2eTE'},
        {id: 'spa_v31', src: 'https://www.youtube.com/embed/P-sq_u11C6U'},
        {id: 'spa_v32', src: 'https://www.youtube.com/embed/BqCkH-aJv9I'},

        {id: 'tint_v1', src: 'https://www.youtube.com/embed/dkkpEZ6yQ6o'},
        {id: 'tint_v2', src: 'https://www.youtube.com/embed/lW4QajJMq3U'},
        {id: 'tint_v3', src: 'https://www.youtube.com/embed/wXlCyMYHf8s'},
        {id: 'tint_v4', src: 'https://www.youtube.com/embed/IhiVIxjr0Q4'},
        {id: 'tint_v5', src: 'https://www.youtube.com/embed/UHsG-dbwQF4'},
        {id: 'tint_v6', src: 'https://www.youtube.com/embed/gQzR48iSpmI'},
        {id: 'tint_v7', src: 'https://www.youtube.com/embed/PCNS4dq9vsI'},
        {id: 'tint_v8', src: 'https://www.youtube.com/embed/rt8_tnk3XHU'},
        {id: 'tint_v9', src: 'https://www.youtube.com/embed/MoPdVn2xNN8'},
        {id: 'tint_v10', src: 'https://www.youtube.com/embed/lU0tGyHoi1M'},
        {id: 'tint_v11', src: 'https://www.youtube.com/embed/9ZU8k7pm7OU'},
        {id: 'tint_v12', src: 'https://www.youtube.com/embed/rX1BI1kyOH0'},
        {id: 'tint_v13', src: 'https://www.youtube.com/embed/rSLsVaBZbCw'},
        {id: 'tint_v14', src: 'https://www.youtube.com/embed/-Nemj6hgmHU'},
        {id: 'tint_v15', src: 'https://www.youtube.com/embed/FKrBOIkTHqE'},
        {id: 'tint_v16', src: 'https://www.youtube.com/embed/rgmsYy8uzoU'},
        {id: 'tint_v17', src: 'https://www.youtube.com/embed/6BhniHBsGMQ'},
        {id: 'tint_v18', src: 'https://www.youtube.com/embed/yujvdEIl0hw'},
        {id: 'tint_v19', src: 'https://www.youtube.com/embed/8Y4vx9tN910'},
        {id: 'tint_v20', src: 'https://www.youtube.com/embed/foxpe3KKPpc'},
        {id: 'tint_v21', src: 'https://www.youtube.com/embed/HO5c0dyEkfQ'},
        {id: 'tint_v22', src: 'https://www.youtube.com/embed/-f9tyZHfIBY'},
        {id: 'tint_v23', src: 'https://www.youtube.com/embed/fRzvrRR5b50'},
        {id: 'tint_v24', src: 'https://www.youtube.com/embed/nHJBQjDa1SI'},
        {id: 'tint_v25', src: 'https://www.youtube.com/embed/5zlLqowSt1A'},
        {id: 'tint_v26', src: 'https://www.youtube.com/embed/1McMEn5m_x4'},

        {id: 'pos_v1', src: 'https://www.youtube.com/embed/h4sbqOWe-Xk'},
        {id: 'pos_v2', src: 'https://www.youtube.com/embed/rLmFnJNFJDc'},
        {id: 'pos_v3', src: 'https://www.youtube.com/embed/vuAm3t_6naA'},
        {id: 'pos_v4', src: 'https://www.youtube.com/embed/5l1hzo5ROu4'},
        {id: 'pos_v5', src: 'https://www.youtube.com/embed/1hQ3GSacqkY'},
        {id: 'pos_v6', src: 'https://www.youtube.com/embed/SaBrO2c-VwE'},
        {id: 'pos_v7', src: 'https://www.youtube.com/embed/FKivOB3fkcg'},
        {id: 'pos_v8', src: 'https://www.youtube.com/embed/iiThF33iMPc'},
        {id: 'pos_v9', src: 'https://www.youtube.com/embed/v_g9UederpE'},
        {id: 'pos_v10', src: 'https://www.youtube.com/embed/MCEPBA3rxaI'},
        {id: 'pos_v11', src: 'https://www.youtube.com/embed/VkqYwDfOW7U'},
        {id: 'pos_v12', src: 'https://www.youtube.com/embed/CQn-YP-4ER8'},
        {id: 'pos_v13', src: 'https://www.youtube.com/embed/ED1qqIMMuTI'},
        {id: 'pos_v14', src: 'https://www.youtube.com/embed/uv9Bp6v2on4'},
        {id: 'pos_v15', src: 'https://www.youtube.com/embed/in5JNxDSc0o'},
        {id: 'pos_v16', src: 'https://www.youtube.com/embed/UTLL2Zkc-Vw'},
        {id: 'pos_v17', src: 'https://www.youtube.com/embed/alPInmmgjLE'},
        {id: 'pos_v18', src: 'https://www.youtube.com/embed/z0NdAaKPd5o'},
        {id: 'pos_v19', src: 'https://www.youtube.com/embed/XqPJmneZd1g'},
        {id: 'pos_v20', src: 'https://www.youtube.com/embed/5YvulbiObSo'},
        {id: 'pos_v21', src: 'https://www.youtube.com/embed/gBPOUst6vIk'},
        {id: 'pos_v22', src: 'https://www.youtube.com/embed/gndlreQVM68'},
        {id: 'pos_v23', src: 'https://www.youtube.com/embed/lX5gqSagy-s'},
        {id: 'pos_v24', src: 'https://www.youtube.com/embed/uMDzGCzAN-A'},
        {id: 'pos_v25', src: 'https://www.youtube.com/embed/1Q77cyUijl0'},
        {id: 'pos_v26', src: 'https://www.youtube.com/embed/ruK1_Nh3TQ8'},
        {id: 'pos_v27', src: 'https://www.youtube.com/embed/CtRMS_YMj-Y'},

        {id: 'barber_v1', src: 'https://www.youtube.com/embed/WXtNFWp8VSg'},
        {id: 'barber_v2', src: 'https://www.youtube.com/embed/ilR-88yaAao'},
        {id: 'barber_v3', src: 'https://www.youtube.com/embed/HPoErVSrIUk'},
        {id: 'barber_v4', src: 'https://www.youtube.com/embed/wMAaMvo4lbQ'},
        {id: 'barber_v5', src: 'https://www.youtube.com/embed/9XmXr8CY3fs'},
        {id: 'barber_v6', src: 'https://www.youtube.com/embed/ap4I5Jdhpio'},
        {id: 'barber_v7', src: 'https://www.youtube.com/embed/PxNtbUNabN8'},
        {id: 'barber_v8', src: 'https://www.youtube.com/embed/V6W_RYNXWfE'},
        {id: 'barber_v9', src: 'https://www.youtube.com/embed/tAYKsIAAtRY'},
        {id: 'barber_v10', src: 'https://www.youtube.com/embed/JcEe0lyr-O4'},
        {id: 'barber_v11', src: 'https://www.youtube.com/embed/HOIdlwdCNn4'},
        {id: 'barber_v12', src: 'https://www.youtube.com/embed/wtx1hsIwttU'},
        {id: 'barber_v13', src: 'https://www.youtube.com/embed/B4Eqo2O2WUY'},
        {id: 'barber_v14', src: 'https://www.youtube.com/embed/zrIN49VKxvY'},
        {id: 'barber_v15', src: 'https://www.youtube.com/embed/2het2Vnz-pg'},
        {id: 'barber_v16', src: 'https://www.youtube.com/embed/DHWHn4YlyMM'},
        {id: 'barber_v17', src: 'https://www.youtube.com/embed/fsnAzlJdwR4'},
        {id: 'barber_v18', src: 'https://www.youtube.com/embed/0t5oZf84igc'},
        {id: 'barber_v19', src: 'https://www.youtube.com/embed/HmHru1JWzTc'},
        {id: 'barber_v20', src: 'https://www.youtube.com/embed/YgyDo7VAliw'},
        {id: 'barber_v21', src: 'https://www.youtube.com/embed/11djPHz_8JA'},
        {id: 'barber_v22', src: 'https://www.youtube.com/embed/cgamgCrN0Z0'},
        {id: 'barber_v23', src: 'https://www.youtube.com/embed/738OEwGSoh0'},
        {id: 'barber_v24', src: 'https://www.youtube.com/embed/rPNVKGaTKZ4'},
        {id: 'barber_v25', src: 'https://www.youtube.com/embed/QqlKNJswPok'},
        {id: 'barber_v26', src: 'https://www.youtube.com/embed/E7Sbr44fOf0'},
        {id: 'barber_v27', src: 'https://www.youtube.com/embed/k3uXzoh5hq4'},
        {id: 'barber_v28', src: 'https://www.youtube.com/embed/LrGbaU7WIBU'},
        {id: 'barber_v29', src: 'https://www.youtube.com/embed/j2v5qY-th7M'},
        {id: 'barber_v30', src: 'https://www.youtube.com/embed/XbBIwtJqF7M'},
        {id: 'barber_v31', src: 'https://www.youtube.com/embed/drzQaOO9ais'},
        {id: 'barber_v32', src: 'https://www.youtube.com/embed/n-E-eZyCH5Y'},
        {id: 'barber_v33', src: 'https://www.youtube.com/embed/gydsCVrlhJQ'},
        {id: 'barber_v34', src: 'https://www.youtube.com/embed/EggcKK4VUKI'},
        {id: 'barber_v35', src: 'https://www.youtube.com/embed/lSSKTL_RqdI'},
        {id: 'barber_v36', src: ''},
        {id: 'barber_v37', src: ''},
        {id: 'barber_v38', src: ''},
        
    ];

    const filestodwn = [
        {id: 'errorfac', link: 'https://drive.google.com/file/d/1-ZSDr4huGYMB0KVuRVp2mwUTG-OTfxKr/view?usp=sharing'},
        {id: 'desc_tv', link: 'https://www.teamviewer.com/es-mx/descarga/windows/'},        
        {id: 'ver_tv_b', link: 'https://youtu.be/DfBHViJbgMM'},        
        {id: 'ver_tv_i', link: 'https://youtu.be/DfBHViJbgMM'},        
        {id: 'ver_ad_b', link: 'https://youtu.be/kZTP7Rsqi48'},        
        {id: 'ver_ad_i', link: 'https://youtu.be/kZTP7Rsqi48'},
        {id: 'desc_ad', link: 'https://anydesk.com/es'},
        {id: 'link_tyc', link: 'https://www.bdksistemas.com.mx/descargas/terminos_y_condiciones_bdk.pdf'},        
        
        {id: 'gym_setup', link: 'https://www.servidorbdk.com/descargas/BDKGYM-2.23.exe'},        
        {id: 'gym_presenta', link: 'https://www.bdksistemas.com.mx/descargas/bdkgym_presentacion.pdf'},        
        {id: 'gym_ficha', link: 'https://www.bdksistemas.com.mx/descargas/bdkgym_fichatec.pdf'},        
        {id: 'gym_precios', link: 'https://www.bdksistemas.com.mx/descargas/bdkgym_precios.pdf'},        

        {id: 'rest_presenta', link: 'https://www.bdksistemas.com.mx/descargas/bdkrest_presentacion.pdf'},        
        {id: 'rest_ficha', link: 'https://www.bdksistemas.com.mx/descargas/bdkrest_fichatec.pdf'},        
        {id: 'rest_precios', link: 'https://www.bdksistemas.com.mx/descargas/bdkrest_precios.pdf'},        
        {id: 'rest_setup', link: 'https://www.servidorbdk.com/descargas/BDKREST-1.38.exe'},

        {id: 'spa_presenta', link: 'https://www.bdksistemas.com.mx/descargas/bdkspa_presentacion.pdf'},        
        {id: 'spa_ficha', link: 'https://www.bdksistemas.com.mx/descargas/bdkspa_fichatec.pdf'},        
        {id: 'spa_precios', link: 'https://www.bdksistemas.com.mx/descargas/bdkspa_precios.pdf'},        
        {id: 'spa_setup', link: 'https://www.servidorbdk.com/descargas/BDKSPA-2.19.exe'},

        {id: 'tint_presenta', link: 'https://www.bdksistemas.com.mx/descargas/bdktint_presentacion.pdf'},        
        {id: 'tint_ficha', link: 'https://www.bdksistemas.com.mx/descargas/bdktint_fichatec.pdf'},        
        {id: 'tint_precios', link: 'https://www.bdksistemas.com.mx/descargas/bdktint_precios.pdf'},        
        {id: 'tint_setup', link: 'https://www.servidorbdk.com/descargas/BDKTINT-1.40.exe'},

        {id: 'pos_presenta', link: 'https://www.bdksistemas.com.mx/descargas/bdkpos_presentacion.pdf'},        
        {id: 'pos_ficha', link: 'https://www.bdksistemas.com.mx/descargas/bdkpos_fichatec.pdf'},        
        {id: 'pos_precios', link: 'https://www.bdksistemas.com.mx/descargas/bdkpos_precios.pdf'},        
        {id: 'pos_setup', link: 'https://www.servidorbdk.com/descargas/BDKPOS-1.14.exe'},

        {id: 'barber_presenta', link: 'https://www.bdksistemas.com.mx/descargas/bdkbarber_presentacion.pdf'},        
        {id: 'barber_ficha', link: 'https://www.bdksistemas.com.mx/descargas/bdkbarber_fichatec.pdf'},        
        {id: 'barber_precios', link: 'https://www.bdksistemas.com.mx/descargas/bdkbarber_precios.pdf'},        
        {id: 'barber_setup', link: 'https://www.servidorbdk.com/descargas/BDKBARBER-1.0.exe '},

    ];

    const linksdemos = [
        {id: 'link_gym', link: 'bdkgym_descarga.html'},        
        {id: 'link_rest', link: 'bdkrest_descarga.html'},        
        {id: 'link_spa', link: 'bdkspa_descarga.html'},        
        {id: 'link_tint', link: 'bdktint_descarga.html'},        
        {id: 'link_pos', link: 'bdkpos_descarga.html'},        
        {id: 'link_barber', link: 'bdkbarber_descarga.html'},        
        {id: 'reg_rest', link: 'bdkrest.html'},        
        {id: 'reg_gym', link: 'bdkgym.html'},        
        {id: 'reg_spa', link: 'bdkspa.html'},        
        {id: 'reg_tint', link: 'bdktint.html'},        
        {id: 'reg_pos', link: 'bdkpos.html'},        
        {id: 'reg_barber', link: 'bdkbarber.html'},        
    ];

    const linkspagos = [
        {id: 'gym_estandar', link: 'https://mpago.la/1YK2gXW'},        
        {id: 'gym_pro', link: 'https://mpago.la/2GUp9jr'},        
        {id: 'gym_plus', link: 'https://mpago.la/32pZyiC'},     
        {id: 'rest_estandar', link: 'https://mpago.la/184FmuC'},
        {id: 'rest_pro', link: 'https://mpago.la/32EdEyP'},
        {id: 'rest_plus', link: 'https://mpago.la/2WX2BM2'},        
        {id: 'spa_estandar', link: 'https://mpago.la/2UeUS2k'},
        {id: 'spa_pro', link: 'https://mpago.la/2RWJ8fY'},
        {id: 'tint_estandar', link: 'https://mpago.la/2TmAgAh'},
        {id: 'tint_pro', link: 'https://mpago.la/1utYZs6'},
        {id: 'pos_est', link: 'https://mpago.la/2ZqeMFa'},
        {id: 'pos_pro', link: 'https://mpago.la/1YBnAB7'},
        {id: 'pos_plus', link: 'https://mpago.la/141wJF1'},
        {id: 'barber_estandar', link: 'https://mpago.la/32J6ymk'},
        {id: 'barber_pro', link: 'https://mpago.la/1jy4Pb2'},

    ];

    // let idxEq = 0;

    // document.addEventListener('DOMContentLoaded', function(){
    // window.addEventListener("load", function(event) {        
    window.onload = (event) => {
        iniciarClicks();
    };

    function iniciarClicks() {
            
        document.addEventListener('click', (e) => {
            e.preventDefault();
            clicksWeb(e.target);
        });

        window.addEventListener('scroll', function() {
            navBackground();
        })
        navBackground();

        if (document.getElementById("banners_equipo")) {
            promociones = document.querySelectorAll('.paquete_hardware')            
            setInterval(next_promo, 7000); 
        }

        if (document.getElementById("fondosHero")) {
            heros = document.querySelectorAll('.fondo_hero');
            setInterval(next_fondo, 3000); 
        }

        // Verificando si el icono de EN VIVO debe de estar visible
        
        // let diaActual = new Date();
        // let horaActual = diaActual.getHours();
        // console.log('Dia actual: ' + diaActual.getDay() + '  - Hora: ' + horaActual);

        // if (diaActual.getDay() >= 1 && diaActual.getDay() <= 5) {

        //     let enVivo = document.getElementById('enVivo');

        //     if ((horaActual >= 10 && horaActual < 13) || (horaActual >= 15 && horaActual < 17)) {

        //         // widgetEnVivo.style.opacity = 1;                

        //         enVivo.innerHTML = `<i class="fas fa-circle onRecording"></i> ON AIR`;

        //     } else {

        //         enVivo.innerHTML = `<i class="fas fa-circle"></i> OFF AIR`;
                
        //     }

        // } else {

        //     enVivo.innerHTML = `<i class="fas fa-circle"></i> OFF AIR`;

        // }

    }

    function rotarCard(elem, faceCard) {
        
        let card = {};
        card = elem.parentNode.parentNode.parentNode.parentNode.childNodes;

        // console.log(card);
        
        const front = card[1];
        const back = card[3];
        
        front.classList.toggle('rotar');
        back.classList.toggle('rotar');
        back.classList.toggle('rotar360');
    }

    // ! FUNCIÓN PARA ACTIVAR EL VIDEO Y REPRODUCIRLO AL ESTAR LA PANTALLA ACTIVA
    function toggleVideo() {
        const trailer = document.querySelector('.videoPopup');
        const video = document.querySelector('video');

        trailer.classList.toggle('active');
        video.currentTime = 0;
        if (trailer.classList.contains('active')) {
            video.play();            
        } else {
            video.pause();
        };
    }    

    // ! FUNCIÓN PARA ACTIVAR EL POPUP PARA EL AVISO DE LAS TRANSMISIONES
    function toggleStriming() {
        const popStriming = document.querySelector('.popupStriming');

        popStriming.classList.toggle('active');
    }    


    // ! FUNCIÓN PARA ACTIVAR TODOS LOS CLICS DE LA PÁGINA
    function clicksWeb(objetoDom) {

        // console.log(objetoDom);

        if ( objetoDom.matches('.opCard') || objetoDom.matches('.clCard')) {
            rotarCard(objetoDom);
        }

        if ( objetoDom.matches('.btnFaq') || objetoDom.matches('.accordion-title') || objetoDom.matches('.iconFaq') ) {
            toggleAccordion(objetoDom);            
        }

        // ? BOTÓN PARA REPRODUCIR EL VÍDEO PROMOCIONAL
        if ( objetoDom.matches('#play') || objetoDom.matches('#close') || objetoDom.matches('#imgPlay') ) {
            toggleVideo();
        }

        // ? BOTÓN PARA ACTIVAR EL POPUP DEL AVISO DE LA TRANSMISION EN VIVO
        if ( objetoDom.matches('#closePop') || objetoDom.matches('#enVivo') ) {
            toggleStriming();
        }

        // ? BOTÓN LATERAL PARA SUBIR AL INICIO DE LA PANTALLA
        if ( objetoDom.matches('#botInicio') ) {

            window.scrollTo({top: 0, behavior: 'smooth'});

            // Este código es con JQUERY
            // $('html, body').animate({
            //    scrollTop: 0
            // }, 100);        
        }

        // ? LINK A PAGINA DE INICIO
        if ( objetoDom.matches('.mnuInicio') || objetoDom.matches('#logoBDK')) {
            let url = 'index.html';
            window.open(url,'_self');

        }            

        // ? LINK A PAGINA SOFTWARE
        if ( objetoDom.matches('.mnuSoftware')) {
            let url = 'software.html';
            window.open(url,'_self');
        } 

        // ? LINK A PAGINAS WEB
        if ( objetoDom.matches('.mnuPagWeb')) {
            let url = 'paginasweb.html';
            window.open(url,'_self');

        }            

        // ? LINK A DISTRIBUIDORES
        if ( objetoDom.matches('.mnuDist')) {
            let url = 'distribuidores.html';
            window.open(url,'_self');
        }            

        // ? LINK A RESEÑAS
        if ( objetoDom.matches('.mnuRese') || objetoDom.matches('#verResenas') ) {
            let url = 'pagresenas.html';
            window.open(url,'_self');
        }

        // ? LINK A GALERÍA
        if ( objetoDom.matches('.mnuGal')) {
            let url = 'galeria.html';
            window.open(url,'_self');
        }            

        // ? LINK A CONTACTO
        if ( objetoDom.matches('.mnuContacto')) {
            let url = 'contacto.html';
            window.open(url,'_self');
        }            

        // ? LINK A SOPORTE
        if ( objetoDom.matches('.mnuSoporte')) {
            let url = 'soporte.html';
            window.open(url,'_self');
        }            

        // ? LINK A BDKREST
        if ( objetoDom.matches('.acc-rest')) {
            let url = 'bdkrest.html';
            window.open(url,'_self');
        }

        // ? LINK A BDKGYM
        if ( objetoDom.matches('.acc-gym')) {
            let url = 'bdkgym.html';
            window.open(url,'_self');
        }             

        // ? LINK A BDKTINT
        if ( objetoDom.matches('.acc-tint')) {
            let url = 'bdktint.html';
            window.open(url,'_self');
        }            

        // ? LINK A BDKSPA
        if ( objetoDom.matches('.acc-spa')) {
            let url = 'bdkspa.html';
            window.open(url,'_self');
        }            

        // ? LINK A BDKBARBER
        if ( objetoDom.matches('.acc-barber')) {
            let url = 'bdkbarber.html';
            window.open(url,'_self');
        }            

        // ? LINK A BDKPOS
        if ( objetoDom.matches('.acc-pos')) {
            let url = 'bdkpos.html';
            window.open(url,'_self');
        }            

        // ? BOTÓN PARA CERRAR LOS POPUP INFORMATIVOS
        if (objetoDom.matches('#close')) {
            const popup = document.querySelector('.infoPopup');
            popup.classList.toggle('active');            
        }

        // ? LINK A WHATSAPP DE VENTAS
        if ( objetoDom.matches('.botWP')) {
            gtag_report_conversion();
            // let url = 'https://api.whatsapp.com/send?phone=528132814080&text=Hola,%20buen%20día,%20%20quiero%20pedir%20informes%20sobre%20';
            let url = 'https://api.whatsapp.com/send?phone=528132814080';
            window.open(url, '_blank');
        } 

        // ? LINK A WHATSAPP DE SOPORTE 1
        if ( objetoDom.matches('.botSop1')) {
            let url = 'https://api.whatsapp.com/send?phone=528116261326&text=Hola,%20buen%20día,%20%20necesito%20soporte%20técnico';
            window.open(url, '_blank');
        } 

        // ? LINK A WHATSAPP DE SOPORTE 2
        if ( objetoDom.matches('.botSop2')) {
            let url = 'https://api.whatsapp.com/send?phone=528126004868&text=Hola,%20buen%20día,%20%20necesito%20soporte%20técnico';
            window.open(url, '_blank');
        } 

        // ? LINK A WHATSAPP DE SOPORTE 3
        if ( objetoDom.matches('.botSop3')) {
            let url = 'https://api.whatsapp.com/send?phone=528129233142&text=Hola,%20buen%20día,%20%20necesito%20soporte%20técnico';
            window.open(url, '_blank');
        } 

        // ? LINKS A FACEBOOK
        if ( objetoDom.matches('.botFB')) {               
            let url = 'https://www.facebook.com/bdksistemas';
            window.open(url, '_blank');
        } 

        // ? LINKS A ISNTAGRAM
        if ( objetoDom.matches('.botInsta')) {
            console.log('Si recibo el click de Insta');                
            let url = 'https://www.instagram.com/bdksistemas';
            window.open(url, '_blank');
        } 

        // ? LINKS A YOUTUBE
        if ( objetoDom.matches('.botYT')) {
            let url = 'https://www.youtube.com/bdksistemas';
            window.open(url, '_blank');
        } 

        // ? LINKS A LA PÁGINA DEMO DE BDKREST
        if ( objetoDom.matches('.link-demorest')) {               
            let url = 'https://www.bdkclientes.com/paginasweb/restaurantes/demo1/';
            window.open(url, '_blank');
        } 

        // ? LINKS A LA PÁGINA DEMO DE BDKTINT
        if ( objetoDom.matches('.link-demotint')) {               
            let url = 'https://bdkclientes.com/paginasweb/lavanderias/demo1/';
            window.open(url, '_blank');
        } 

        // ? LINKS A LA PÁGINA DEMO DE BDKGYM
        if ( objetoDom.matches('.link-demogym')) { 
            let url = 'https://bdkclientes.com/paginasweb/gimnasios/demo1/';
            window.open(url, '_blank');
        } 

        // ? LINKS A LA PÁGINA DEMO DE BDKSPA
        if ( objetoDom.matches('.link-demospa')) { 
            let url = 'https://bdkclientes.com/paginasweb/spa/demo1/';
            window.open(url, '_blank');
        } 

        // ? LINKS A LA PÁGINA DEMO DE BDKBARBER
        if ( objetoDom.matches('.link-demobarber')) { 
            let url = 'https://bdkclientes.com/paginasweb/barber/demo1/';
            window.open(url, '_blank');
        } 
        
        // ? LINKS A LA PÁGINA DEMO DE BDKPOS
        if ( objetoDom.matches('.link-demopos')) { 
            let url = 'https://www.bdkclientes.com/paginasweb/otros/demo1/';
            window.open(url, '_blank');
        } 

        // ? BOTÓN REGRESAR
        if ( objetoDom.matches('#regresar')) { 
            window.history.back();
        } 

        // ? ICONO DEL MENÚ HAMBURGUESA
        if ( objetoDom.matches('#botApp')) { 
            
            menuLat = true;
            apertura();
        }

        // ? BOTON PARA MOVER A LA IZQUIERDA UNA IMAGEN DE PAQUETE DE EQUIPO
        if ( objetoDom.matches('.botEqIzq')) { 
            back_promo();
            // --idxEq;
            // if (idxEq < 0) {
            //     idxEq = promociones.length - 1;
            // }
            // visualiza_promo();
            // // console.log(idxEq);            
        }

        // ? BOTON PARA MOVER A LA IZQUIERDA UNA IMAGEN DE PAQUETE DE EQUIPO
        if ( objetoDom.matches('.botEqDer')) { 
            next_promo();
        }


        // ? ENLACES A VÍDEOS DE CAPACITACIÓN
        if ( objetoDom.matches('.enl_capa')) {
            ver_video_capa(objetoDom.id);
        }            

        // // ? LINK AL ARCHIVO DE ERRORES EN LA FACTURACIÓN
        // if ( objetoDom.matches('#errorfac')) {
        //     let url = 'https://drive.google.com/file/d/1-ZSDr4huGYMB0KVuRVp2mwUTG-OTfxKr/view?usp=sharing';
        //     window.open(url, '_blank');
        // }

        // ? CLICK EN LOS ENLACES DE LOS OBJETOS ACORDEON
        if ( objetoDom.matches('.enl_accordeon')) {            
            let pos_obj = document.getElementById('accordion');
            let y = getOffset(pos_obj).top;
            window.scrollTo(0,y);
        }            

        // ? LINK PARA DESCARGAR FICHA TÉCNICA
        if ( objetoDom.matches('.dwn_file')) {
            descarga_ficha(objetoDom.id);
        }            

        // ? LINK PARA ENTRAR A LAS PÁGINAS DE DESCARGA DEL DEMO
        if ( objetoDom.matches('.link_demos')) {
            paginas_demo(objetoDom.id);
        }            

        // ? LINK PARA COMPRAR SOFTWARE
        if ( objetoDom.matches('.link_pago')) {
            pagina_pago(objetoDom.id);
        }            

    }

    // ! FUNCIÓN PARA MEDIR LAS CONVERSIONES Y CLICS EN LOS BOTONES DE CONTACTO - CÓDIGO DE GOOGLE ADS
    function gtag_report_conversion(url) {
        var callback = function () {
          if (typeof(url) != 'undefined') {
            window.location = url;
          }
        };
        gtag('event', 'conversion', {
            'send_to': 'AW-1011948451/dVALCJDYqr4DEKO3xOID',
            'event_callback': callback
        });
        return false;
    }

    // ! FUNCIÓN PARA ABRIR EL MENÚ CUANDO EL TAMAÑO SEA TABLET O MÓVIL
    function apertura() {
        let menu    = document.getElementById('navPrincipal');
        let botSubir = document.getElementById('botInicio');
        let botAccWP	 = document.getElementById('botWP');
        
        if (cerrado) {
            menu.style.width = '100vw!important';
            cerrado = false;
            
            if (botSubir) {
                botSubir.style.visibility = 'hidden';
                botAccWP.style.visibility = 'hidden';
            }

        } else {
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
            menuLat = false;
            if (botSubir) {
                botSubir.style.visibility = 'visible';
                botAccWP.style.visibility = 'visible';
            }
        }
        menu.classList.toggle('menu2');
    };   


    // ! FUNCIÓN PARA ACTIVAR EL EFECTO DE LAS PREGUNTAS FRECUENTES
    function toggleAccordion(elem) {

        let elemFaq;
        let i;

        if (elem.matches('.btnFaq') === false) {
            elemFaq = elem.parentNode;
        } else {
            elemFaq = elem;
        }

        const items = document.querySelectorAll(".accordion button");
        const itemToggle = elemFaq.getAttribute('aria-expanded');
        
        for (i = 0; i < items.length; i++) {
          items[i].setAttribute('aria-expanded', 'false');
        }
        
        if (itemToggle == 'false') {
          elemFaq.setAttribute('aria-expanded', 'true');
        }
    }
    
    function navBackground() {

        let nav = document.querySelector('.nav');
        let desp_actual = window.pageYOffset;
        let ancho_screen = window.innerWidth;        

        if ( desp_actual <= 300 ) {

            nav.style.borderBottom = ''; 

            if (ancho_screen > 768 ) {
                nav.style.background = 'rgba(0,0,0,0.5)';
            } else {
                nav.style.background = 'linear-gradient(0deg, rgba(0,0,0,0) 5%, rgba(0,0,0,1) 100%)';
            }

        } else {
            nav.style.background = '#1F2022';
            nav.style.borderBottom = '2px solid #cb001a';
        }
        nav.style.transition = '.5s';
    }

    function next_fondo() {
        let idxHero = actBanner(heros, 0);      
        nextBanner(heros, idxHero, '+');        
    }

    function next_promo() {      
        let idxPromo = actBanner(promociones, 0);      
        nextBanner(promociones, idxPromo, '+');        
    }

    function back_promo() {      
        let idxPromo = actBanner(promociones, 0);      
        nextBanner(promociones, idxPromo, '-');
    }

    function actBanner(array, idxBan) {
        while (idxBan < array.length) {
            if (array[idxBan].classList.contains('banner_visible')) {
                break;
            }
            idxBan++;
        }
        return idxBan;
    }

    function nextBanner(array, idx, opr) {
        let idxNext = idx;
        if (opr==='+') {
            idxNext++;
            if (idxNext > array.length - 1) {
                idxNext = 0;
            }    
        } else {
            --idxNext;
            if (idxNext < 0) {
                idxNext = array.length - 1;
            }
        }
        array[idx].classList.remove('banner_visible');
        array[idxNext].classList.add('banner_visible');
    }

    function ver_video_capa(id_video) {

        const video_src = videos_capacitacion.find(v => v.id === id_video);

        let frame_video = document.getElementById('video_encurso');
        // let pos_video = frame_video.getBoundingClientRect()

        frame_video.src = video_src.src;
       
        let y = getOffset(frame_video).top;
            
        window.scrollTo(0,y);
    
    }

    function descarga_ficha(id_file) {
        const dwm_file =filestodwn.find(v => v.id === id_file);
        let url = dwm_file.link;
        window.open(url, '_blank');
    }

    function paginas_demo(id_page) {
        const page_demo = linksdemos.find(v => v.id === id_page);
        let url = page_demo.link;
        window.open(url, '_self');
    }

    // FUNCION PARA IR AL ENLACE DE MERCADO PAGO
    function pagina_pago(id_link) {
        const link_mercadopago =linkspagos.find(v => v.id === id_link);
        let url = link_mercadopago.link;
        window.open(url, '_blank');
    }

    // FUNCION PARA OBTENER LA POSICIÓN EN VERTICAL DENTRO DE LA PÁGINA DE UN ELEMENTO
    function getOffset( el ) {
        var _x = 0;
        var _y = 0;
        while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
              _x += el.offsetLeft - el.scrollLeft;
              _y += el.offsetTop - el.scrollTop;
              el = el.offsetParent;
        }
        return { top: _y, left: _x };
        }
    
})();