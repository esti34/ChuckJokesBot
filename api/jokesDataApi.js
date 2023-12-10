import { ZenRows } from "zenrows";

const url = "https://parade.com/968666/parade/chuck-norris-jokes/";
const client = new ZenRows("640ef2b3bc67617cc9aaec098eb3ee88cbc8f979");

export const getJokesPage = async () => {
  var response = await client.get(url, {
    "js_render": "true",
    "antibot": "true"
  });
  return response.data;

  // Commented because the website blocked my IP
  // var response = await axios.get(url, {
  //   headers: {
  //     "User-Agent":
  //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
  //     Accept:
  //       "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
  //     "Accept-Language": "en-US,en;q=0.9",
  //     Referer: "https://www.google.com/",
  //     "Accept-Encoding": "gzip, deflate, br",
  //     "Cookie": "exco-uid=ib1iyqmzcwcg1jk7; bc_tstgrp=2; muid=ZrZoKAsbPZk_zpf3ln_O_w; permutive-id=8e7a6120-7802-44d3-82cd-02a8d8df35ec; _cc_id=40cd24b6da6c5b58d5db63bdcfa9ddc0; panoramaId_expiry=1702248393056; panoramaId=96d399effd638c8af8713a716fc816d539382ea6f597a3ede0122647445c45ab; panoramaIdType=panoIndiv; _pnvl_r43izeeg=false; pushly.user_puuid_r43izeeg=Y8CEXXbdsusD4dMKTpYiYIwSsDyqYhQu; _pbjs_userid_consent_data=3524755945110770; GLAM-AID=a5700fddd01b47b0a80cfb89c147b5c2; _lr_env_src_ats=false; _hjSessionUser_34499=eyJpZCI6IjJiN2E2ZTljLTk5MWMtNTYxYi04NzM5LWQ5ZDBhZTJhZDUzYiIsImNyZWF0ZWQiOjE3MDE2NDM1OTQ1NTAsImV4aXN0aW5nIjp0cnVlfQ==; _pnlspid_r43izeeg=19431; _pnss_r43izeeg=dismissed; _pnpdm_r43izeeg=true; cto_bundle=DfEo7V9RTVpXMjJtQ2JWQXloRER1MlFTNEtXMXk4Tk9tZkRKcjN0dGY5VThWazU0eUlpWm9XTUVVbmJaNXRpZjE4Y3hmYnExN01kUFpUR0Y1JTJCWVFrWlpvZ0pqTnFxcGtTT0J6ZnBvVGh4RnQlMkJTaWhla3NYZjFHaDR0Z0NZZHl4RlNHTUF6VVg1M25xNDglMkIxbVpBem8wRCUyRlZlQSUzRCUzRA; cto_bidid=ZnVaDV82NjJ3TDB6SFQ5bG9YdyUyRkZtZldsSXEweFNEVG0lMkJCd2s5QWM2QkNxUENvSWtCN09OJTJGQXliJTJCcGdZZ1NWVzJNcXg1a05JdTdmdSUyQjA5NU1ERFF3QlRWb1hNUTdRZFRLSUVUOHBHYnAzcm9lc1ElM0Q; _aren_ab=g=23/e:pxp-416-2,s:b,ex:1702156778|e:pxp-472-aff,s:a,ex:1702156778; _gid=GA1.2.745787025.1702154979; _parsely_visitor={%22id%22:%22pid=ee081827-53b3-4845-895e-8d8bca50c529%22%2C%22session_count%22:4%2C%22last_session_ts%22:1702154980091}; _lr_sampling_rate=100; pbjs-unifiedid=%7B%22TDID%22%3A%2256625726-bd52-437d-bf46-1a7cf7bbbf45%22%2C%22TDID_LOOKUP%22%3A%22TRUE%22%2C%22TDID_CREATED_AT%22%3A%222023-11-09T20%3A49%3A50%22%7D; pbjs-unifiedid_cst=zix7LPQsHA%3D%3D; last_visit_bc=1702155069140; _ig=ZrZoKAsbPZk_zpf3ln_O_w; _ga=GA1.2.1471122755.1701643593; _awl=2.1702155074.5-9f2df3b27c4be80f8944ee48cbbdb7ed-6763652d6575726f70652d7765737431-0; _ga_CY0JQWZCM6=GS1.1.1702154978.1.1.1702155074.0.0.0; __gads=ID=10b7f52715ffe728:T=1701643595:RT=1702155313:S=ALNI_MZd2Rn2WPhdI8xqSQUw_yoYnyFUcg; __gpi=UID=00000ce2b44b995d:T=1701643595:RT=1702155313:S=ALNI_MbFNQw51dLx3nXHPxQn0ec3xPMEbA; datadome=xf6bO_jPG7T~LIpaZSETUWSqlwVX0AnE_8EXbQsloWSn4LEhtZlGO~vuF03vp36jt3aBLv4yKxvny~u5vD7d_9f5aVZWu6VQfXJtXDChWNu7quTC8juBBY2j1gsEf28k"
  //   }
  // });
}