// Research Interests data
const interestsData = [
  {
      title: "Wi-Fi for Healthcare",
      image_url: "./assets/images/wifi.jpg", // use a known image first to test
      alt: "Wi-Fi in Healthare",
      description:
        "Enable ultra-low latency and ultra reliable communication over Wi-Fi. Intelligent ultra low-latency channel access using distributed coordination function (DCF) and uplink orthogonal frequency division multiple access random access (UORA). Multi-link operation and multi access point coordination for adapting Wi-Fi for healthcare applications"
  },
  {
      title: "Wireless Sensing",
      image_url: "./assets/images/wifi.jpg", // replace with your image later
      alt: "Wireless Sensing",
      description:
        "Using electromagnetic radiation for pose estimation, gait analysis, and vital health & activity monitoring. Leveraging advanced artificial intelligence models to extract knowledge from Wi-Fi CSI and Doppler features. Integrating Large Language Models and Generative models to monitor activity and analyze motion. Wi-Fi based sensing and health monitoring."
  },
  {
      title: "AI for Healthcare",
      image_url: "./assets/images/wifi.jpg", // use a known image first to test
      alt: "Wi-Fi sensing illustration",
      description:
        "Developing AI models for bio signal and image processing. Transformer-based models for time-series analysis. Designing Large Language Models for drug discovery. Improve interpretability and explianability of models to develop trustworthy AI for healthcare."
  },
];


//News
const updateData = [
    { date: "2025-Feb-01", description: "0299-Special Topics on Machine Learning is now open for Spring 2025" },
    { date: "2024-Aug-01", description: "0308-Artificial Intelligence Applications is now open for Fall 2024" },
    { date: "2024-Mar-01", description: "Joined the School of Computer Science and Engineering, Yeungnam University as an International Research (Assistant) Professor " },
    { date: "2023-Mar-01", description: "Joined the Department of Electronic Engineering, Kyunghee University as a Postdoctoral Research Associate" },
    { date: "2023-02-22", description: "Received my PhD at the Department of Information and Communication Engineering, Yeungnam University"}
];


//Papers
const publicationData = [
    {
        publication_link: 'https://doi.org/10.3390/s25154554',
        title: 'Intelligent Priority-Aware Spectrum Access in 5G Vehicular IoT: A Reinforcement Learning Approach',
        image_url: './assets/images/adeel2025-3.png',
        collaborators: [{
            name: 'Adeel Iqbal', link: 'https://scholar.google.com/citations?hl=en&user=4S4bE0MAAAAJ'},
            {name: 'Tahir Khurshaid', link: 'https://scholar.google.com/citations?user=LqWdHJUAAAAJ&hl=en'},
            {name: 'Yazdan Ahmad Qadri', link: 'https://scholar.google.com/citations?user=h6CB6IQAAAAJ&hl=en'}
        ],
        citation: '@article{Adeel2025, author = {Iqbal, Adeel and Khurshaid, Tahir and Qadri, Yazdan Ahmad}, title = {Intelligent Priority-Aware Spectrum Access in 5G Vehicular IoT: A Reinforcement Learning Approach}, journal = {Sensors}, volume = {25}, number = {15}, year = {2025}, article-number = {4554}, url = {https://doi.org/10.3390/s25154554}, doi = {10.3390/s25154554}}',
        // codeLink : 'https://github.com', 
        // pdfLink : './pdf/'
    },
    {
        publication_link: 'https://doi.org/10.3390/s25113342',
        title: 'Priority-Aware Spectrum Management for QoS Optimization in Vehicular IoT',
        image_url: './assets/images/adeel2025-2.png',
        collaborators: [{
            name: 'Adeel Iqbal', link: 'https://scholar.google.com/citations?hl=en&user=4S4bE0MAAAAJ'},
            {name: 'Tahir Khurshaid', link: 'https://scholar.google.com/citations?user=LqWdHJUAAAAJ&hl=en'},
            {name: 'Yazdan Ahmad Qadri', link: 'https://scholar.google.com/citations?user=h6CB6IQAAAAJ&hl=en'},
            {name: 'Ali Nauman', link: 'https://scholar.google.com/citations?user=Vg3i3acAAAAJ&hl=en'},
            {name: 'Sung Won Kim', link: 'https://scholar.google.com/citations?user=qHnnxqIAAAAJ&hl=en'},
        ],
        citation: '@article{Adeel2025, author = {Iqbal, Adeel and Khurshaid, Tahir and Qadri, Yazdan Ahmad and Nauman, Ali and Kim, Sung Won}, title = {Priority-Aware Spectrum Management for QoS Optimization in Vehicular IoT}, journal = {Sensors}, volume = {25}, number = {11}, year = {2025}, article-number = {3342}, url = {https://doi.org/10.3390/s25113342}, doi = {10.3390/s25113342}}',
        // codeLink : 'https://github.com', 
        // pdfLink : './pdf/'
    },
    {
        publication_link: 'https://doi.org/10.3390/bioengineering12050440',
        title: 'Large Language Models in Genomics—A Perspective on Personalized Medicine',
        image_url: './assets/images/yazdan2025-1.png',
        collaborators: [{
            name: 'Shahid Ali', link: 'https://scholar.google.com/citations?user=B3jovoIAAAAJ&hl=en&oi=sra'},
            {name: 'Yazdan Ahmad Qadri', link: 'https://scholar.google.com/citations?user=h6CB6IQAAAAJ&hl=en'},
            {name: 'Khurshid Ahmad', link: 'https://scholar.google.com/citations?user=JuKRQzgAAAAJ&hl=en&oi=ao'},
            {name: 'Zhizhe Lin', link: 'https://scholar.google.com/citations?hl=en&user=j2aV91UAAAAJ&view_op=list_works&sortby=pubdate'},
            {name: 'Man-Fai Leung', link: 'https://scholar.google.com/citations?user=auIXUW8AAAAJ&hl=en&oi=ao'},
            {name: 'Sung Won Kim', link: 'https://scholar.google.com/citations?user=qHnnxqIAAAAJ&hl=en'},
            {name: 'Athanasios V. Vasilakos', link: 'https://scholar.google.com/scholar?q=Athanasios+V.+Vasilakos'},
            {name: 'Teng Zhou', link: 'https://scholar.google.com/citations?hl=en&user=oQIF23YAAAAJ&view_op=list_works&sortby=pubdate'}
        ],
        citation: '@article{Ali2025LLMsGenomics, author = {Ali, Shahid and Qadri, Yazdan Ahmad and Ahmad, Khurshid and Lin, Zhizhe and Leung, Man‑Fai and Kim, Sung Won and Vasilakos, Athanasios V. and Zhou, Teng}, title = {Large Language Models in Genomics—A Perspective on Personalized Medicine}, journal = {Bioengineering}, year = {2025}, volume = {12}, number = {5}, pages = {440}, doi = {10.3390/bioengineering12050440}, url = {https://www.mdpi.com/2306-5354/12/5/440},}',
        // codeLink : 'https://github.com', 
        // pdfLink : './pdf/'
    },
    {
        publication_link: 'https://www.mdpi.com/1424-8220/25/3/615',
        title: 'Optimizing Spectral Utilization in Healthcare Internet of Things',
        image_url: './assets/images/adeel2025-1.png',
        collaborators: [{
            name: 'Adeel Iqbal', link: 'https://scholar.google.com/citations?hl=en&user=4S4bE0MAAAAJ'},
            {name: 'Ali Nauman', link: 'https://scholar.google.com/citations?user=Vg3i3acAAAAJ&hl=en'},
            {name: 'Yazdan Ahmad Qadri', link: 'https://scholar.google.com/citations?user=h6CB6IQAAAAJ&hl=en'},
            {name: 'Sung Won Kim', link: 'https://scholar.google.com/citations?user=qHnnxqIAAAAJ&hl=en'}
        ],
        citation: '@article{qadri2025-osuhiot, author = {Iqbal, Adeel and Nauman, Ali and Qadri, Yazdan Ahmad and Kim, Sung Won}, title = {Optimizing Spectral Utilization in Healthcare Internet of Things}, journal = {Sensors}, volume= {25}, year = {2025}, number = {3}, article number = {615}, url = {https://www.mdpi.com/1424-8220/25/3/615}, PubMedID = {39943254}, issn = {1424-8220}, doi = {10.3390/s25030615}}',
        // codeLink : 'https://github.com', 
        // pdfLink : './pdf/'
    },
    {
        publication_link: 'https://www.mdpi.com/1424-8220/24/20/6658',
        title: 'Artificial General Intelligence for the Detection of Neurodegenerative Disorders',
        image_url: './assets/images/yazdan2024.png',
        collaborators: [{
            name: 'Yazdan Ahmad Qadri', link: 'https://scholar.google.com/citations?user=h6CB6IQAAAAJ&hl=en'},
            {name: 'Khurshid Ahmad', link: 'https://scholar.google.com/citations?user=JuKRQzgAAAAJ&hl=en&oi=ao'},
            {name: 'Sung Won Kim', link: 'https://scholar.google.com/citations?user=qHnnxqIAAAAJ&hl=en'
        }],
        citation: '@Article{qadri2024-pd, author = {Qadri, Yazdan Ahmad and Ahmad, Khurshid and Kim, Sung Won}, title = {Artificial General Intelligence for the Detection of Neurodegenerative Disorders}, journal = {Sensors}, volume = {24}, year = {2024}, number = {20}, article-number = {6658}, url = {https://www.mdpi.com/1424-8220/24/20/6658}, doi = {10.3390/s24206658}}',
        // codeLink : 'https://github.com', 
        // pdfLink : './pdf/'
        },
{
    publication_link: 'https://ieeexplore.ieee.org/abstract/document/10509604',
    title: 'Electromagnetic Field Exposure‑Aware AI Framework for Integrated Sensing and Communications‑Enabled Ambient Backscatter Wireless Networks',
    image_url: './assets/images/jamshed2024.gif', 
    collaborators: [
      { name: 'Muhammad Ali Jamshed', link: 'https://scholar.google.com/citations?user=at4MvYMAAAAJ&hl=en' },
      { name: 'Yazdan Ahmad Qadri', link: 'https://scholar.google.com/citations?user=h6CB6IQAAAAJ&hl=en' },
      { name: 'Ali Nauman', link: 'https://scholar.google.com/citations?user=Vg3i3acAAAAJ' },
      { name: 'Haejoon Jung', link: 'https://scholar.google.com/citations?user=GBFjHkMAAAAJ&hl=en' }
    ],
    citation: '@article{Jamshed2024, author={Jamshed, Muhammad Ali and Qadri, Yazdan Ahmad and Nauman, Ali and Jung, Haejoon}, title={Electromagnetic Field Exposure‑Aware AI Framework for Integrated Sensing and Communications‑Enabled Ambient Backscatter Wireless Networks}, journal={IEEE Internet of Things Journal}, volume={11}, number={18}, pages={29252–29259}, year={2024}, doi= {10.1109/JIOT.2024.3394041}}',
       // codeLink : 'https://github.com', 
       // pdfLink : './pdf/'
},
  {
    publication_link: 'https://doi.org/10.1109/MNET.2024.3352598',
    title: 'Toward the Internet of Medical Things for Real‑Time Health Monitoring Over Wi‑Fi',
    image_url: './assets/images/yazdan2023.gif',
    collaborators: [
      { name: 'Yazdan Ahmad Qadri', link: 'https://scholar.google.com/citations?user=h6CB6IQAAAAJ' },
      { name: 'Haejoon Jung', link: 'https://scholar.google.com/citations?user=GBFjHkMAAAAJ&hl=en' },
      { name: 'Dusit Niyato', link: 'https://scholar.google.com/citations?hl=en&user=T8sVhLMAAAAJ&view_op=list_works&sortby=pubdate' }
    ],
    citation: '@article{Qadri2024-timtow, author={Qadri, Yazdan Ahmad and Jung, Haejoon and Niyato, Dusit}, title={Toward the Internet of Medical Things for Real‑Time Health Monitoring Over Wi‑Fi}, journal={IEEE Network}, volume={38}, number={5}, pages={229–237}, year={2024}, doi = {10.1109/MNET.2024.3352598}}',
       // codeLink : 'https://github.com', 
       // pdfLink : './pdf/'
},
  {
    publication_link: 'https://doi.org/10.1016/j.compeleceng.2023.108717',
    title: 'Injecting cognitive intelligence into beyond‑5G networks: A MAC layer perspective',
    image_url: './assets/images/nauman2023.jpg',
    collaborators: [
      { name: 'Ali Nauman', link: 'https://scholar.google.com/citations?user=Vg3i3acAAAAJ' },
      { name: 'Muhammad Ali Jamshed', link: 'https://scholar.google.com/citations?user=at4MvYMAAAAJ&hl=en' },
      { name: 'Yazdan Ahmad Qadri', link: 'https://scholar.google.com/citations?user=h6CB6IQAAAAJ' },
      { name: 'Malik Saad', link: '' },
      { name: 'Vimal Shanmuganathan', link: '' },
      { name: 'Sung Won Kim', link: 'https://scholar.google.com/citations?user=qHnnxqIAAAAJ' }
    ],
    citation: '@article{Nauman2023, author={Nauman, Ali and Jamshed, Muhammad Ali and Qadri, Yazdan Ahmad and Saad, Malik and Shanmuganathan, Vimal and Kim, Sung Won}, title={Injecting cognitive intelligence into beyond‑5G networks: A MAC layer perspective}, journal={Computer‑Aided Civil and Infrastructure Engineering}, volume={108}, article-number={108717}, year={2023}, doi = {10.1016/j.compeleceng.2023.108717}}',
        // codeLink : 'https://github.com', 
       // pdfLink : './pdf/'
},
    {
    publication_link: 'https://doi.org/10.3390/s22166209',
    title: 'Preparing Wi‑Fi 7 for Healthcare Internet‑of‑Things',
    image_url: './assets/images/yazdan2022.png',
    collaborators: [
      { name: 'Yazdan Ahmad Qadri', link: 'https://scholar.google.com/citations?user=h6CB6IQAAAAJ' },
      { name: 'Zulqar Nain', link: 'https://scholar.google.com/citations?user=7R5jw8cAAAAJ&hl=en' },
      { name: 'Ali Nauman', link: 'https://scholar.google.com/citations?user=Vg3i3acAAAAJ' },
      { name: 'Arslan Musaddiq', link: 'https://scholar.google.com/citations?user=9aXM6bEAAAAJ&hl=en' },
      { name: 'Eduard Garcia Villegas', link: 'https://scholar.google.com/citations?user=em7clbsAAAAJ&hl=en&oi=ao' },
      { name: 'Sung Won Kim', link: 'https://scholar.google.com/citations?user=qHnnxqIAAAAJ' }
    ],
    citation: '@article{qadri2022-pwhiot, author={Qadri, Yazdan Ahmad and Nain, Zulqar and Nauman, Ali and Musaddiq, Arslan and Garcia Villegas, Eduard and Kim, Sung Won}, title={Preparing Wi‑Fi 7 for Healthcare Internet‑of‑Things}, journal={Sensors}, volume={22}, number={16}, article-number={6209}, year={2022}, doi = {10.3390/s22166209}}',
        // codeLink : 'https://github.com', 
       // pdfLink : './pdf/'

},
  {
    publication_link: 'https://doi.org/10.1109/IOTM.001.2100140',
    title: 'Artificial Intelligence in Beyond 5G and 6G Reliable Communications',
    image_url: './assets/images/nauman2022.gif',
    collaborators: [
      { name: 'Ali Nauman', link: 'https://scholar.google.com/citations?user=Vg3i3acAAAAJ' },
      { name: 'Tu N. Nguyen', link: '' },
      { name: 'Yazdan Ahmad Qadri', link: 'https://scholar.google.com/citations?user=h6CB6IQAAAAJ' },
      { name: 'Zulqar Nain', link: 'https://scholar.google.com/citations?user=7R5jw8cAAAAJ&hl=en' },
      { name: 'Korhan Cengiz', link: '' },
      { name: 'Sung Won Kim', link: 'https://scholar.google.com/citations?user=qHnnxqIAAAAJ' }
    ],
    citation: '@article{nauman2022, author={Nauman, Ali and Nguyen, Tu N. and Qadri, Yazdan Ahmad and Nain, Zulqar and Cengiz, Korhan and Kim, Sung Won}, title={Artificial Intelligence in Beyond 5G and 6G Reliable Communications}, journal={IEEE Internet of Things Magazine}, volume={5}, number={1}, pages={73–78}, year={2022}, doi = {10.1109/IOTM.001.2100140}}',
        // codeLink : 'https://github.com', 
       // pdfLink : './pdf/'
},
  {
    publication_link: 'https://ieeexplore.ieee.org/abstract/document/9442721',
    title: 'RIATA: A Reinforcement Learning‑Based Intelligent Routing Update Scheme for Future Generation IoT Networks',
    image_url: './assets/images/zulqarnain2021.jpg',
    collaborators: [
      { name: 'Zulqar Nain', link: 'https://scholar.google.com/citations?user=7R5jw8cAAAAJ&hl=en' },
      { name: 'Arslan Musaddiq', link: 'https://scholar.google.com/citations?user=9aXM6bEAAAAJ&hl=en' },
      { name: 'Yazdan Ahmad Qadri', link: 'https://scholar.google.com/citations?user=h6CB6IQAAAAJ' },
      { name: 'Ali Nauman', link: 'https://scholar.google.com/citations?user=Vg3i3acAAAAJ' },
      { name: 'Muhammad Khalil Afzal', link: '' },
      { name: 'Sung Won Kim', link: 'https://scholar.google.com/citations?user=qHnnxqIAAAAJ' }
    ],
    citation: '@article{zulqarnain2021, author={Nain, Zulqar and Musaddiq, Arslan and Qadri, Yazdan Ahmad and Nauman, Ali and Afzal, Muhammad Khalil and Kim, Sung Won}, title={RIATA: A Reinforcement Learning‑Based Intelligent Routing Update Scheme for Future Generation IoT Networks}, journal={IEEE Access}, volume={9}, pages={81161–81172}, year={2021}, doi = {10.1109/ACCESS.2021.3084217}}',
       // codeLink : 'https://github.com', 
       // pdfLink : './pdf/'
},
  {
    publication_link: 'https://ieeexplore.ieee.org/abstract/document/9623524',
    title: 'Reliability Optimization in Narrowband Device‑to‑Device Communication for 5G and Beyond‑5G Networks',
    image_url: './assets/images/nauman2021.gif',
    collaborators: [
      { name: 'Ali Nauman', link: 'https://scholar.google.com/citations?user=Vg3i3acAAAAJ' },
      { name: 'Muhammad Ali Jamshed', link: 'https://scholar.google.com/citations?user=at4MvYMAAAAJ&hl=en' },
      { name: 'Yazdan Ahmad Qadri', link: 'https://scholar.google.com/citations?user=h6CB6IQAAAAJ' },
      { name: 'Rashid Ali', link: 'https://scholar.google.com/citations?user=GhrhtTgAAAAJ&hl=en' },
      { name: 'Sung Won Kim', link: 'https://scholar.google.com/citations?user=qHnnxqIAAAAJ' }
    ],
    citation: '@article{Nauman2021, author={Nauman, Ali and Jamshed, Muhammad Ali and Qadri, Yazdan Ahmad and Ali, Rashid and Kim, Sung Won}, title={Reliability Optimization in Narrowband Device‑to‑Device Communication for 5G and Beyond‑5G Networks}, journal={IEEE Access}, volume={9}, pages={157584–157596}, year={2021}, doi = {10.1109/ACCESS.2021.3129896}}',
        // codeLink : 'https://github.com', 
       // pdfLink : './pdf/'  
},
  {
    publication_link: 'https://ieeexplore.ieee.org/abstract/document/8993839',
    title: 'The Future of Healthcare Internet of Things: A Survey of Emerging Technologies',
    image_url: './assets/images/yazdan2020.gif',
    collaborators: [
      { name: 'Yazdan Ahmad Qadri', link: 'https://scholar.google.com/citations?user=h6CB6IQAAAAJ' },
      { name: 'Ali Nauman', link: 'https://scholar.google.com/citations?user=Vg3i3acAAAAJ' },
      { name: 'Yousaf Bin Zikria', link: '' },
      {name: 'Athanasios V. Vasilakos', link: 'https://scholar.google.com/scholar?q=Athanasios+V.+Vasilakos'},
      { name: 'Sung Won Kim', link: 'https://scholar.google.com/citations?user=qHnnxqIAAAAJ' }
    ],
    citation: '@ARTICLE{Yazdan2020, author={Qadri, Yazdan Ahmad and Nauman, Ali and Zikria, Yousaf Bin and Vasilakos, Athanasios V. and Kim, Sung Won}, journal={IEEE Communications Surveys & Tutorials}, title={The Future of Healthcare Internet of Things: A Survey of Emerging Technologies},  year={2020}, volume={22}, number={2}, pages={1121-1167}, url = {https://doi.org/10.1109/COMST.2020.2973314}, doi = {10.1109/COMST.2020.2973314}}',
        // codeLink : 'https://github.com', 
       // pdfLink : './pdf/'  
},
  {
    publication_link: 'https://ieeexplore.ieee.org/abstract/document/8950450',
    title: 'Multimedia Internet of Things: A Comprehensive Survey',
    image_url: './assets/images/nauman2020.gif',
    collaborators: [
      { name: 'Ali Nauman', link: 'https://scholar.google.com/citations?user=Vg3i3acAAAAJ' },
      { name: 'Yazdan Ahmad Qadri', link: 'https://scholar.google.com/citations?user=h6CB6IQAAAAJ' },
      { name: 'Muhammad Amjad', link: '' },
      { name: 'Yousaf Bin Zikria', link: '' },
      { name: 'Muhammad Khalil Afzal', link: '' },
      { name: 'Sung Won Kim', link: 'https://scholar.google.com/citations?user=qHnnxqIAAAAJ' }
    ],
    citation: '@article{Nauman2020, author={Nauman, Ali and Qadri, Yazdan Ahmad and Amjad, Muhammad and Bin Zikria, Yousaf and Afzal, Muhammad Khalil and Kim, Sung Won}, title={Multimedia Internet of Things: A Comprehensive Survey}, journal={IEEE Access}, volume={8}, pages={8202–8250}, year={2020}, url = {https://doi.org/10.1109/ACCESS.2020.2964280}, doi = {10.1109/ACCESS.2020.2964280}}',
        // codeLink : 'https://github.com', 
       // pdfLink : './pdf/'  
},
  {
    publication_link: 'https://doi.org/10.1007/s10586-019-03036-7',
    title: 'The limitations in the state‑of‑the‑art counter‑measures against the security threats in H‑IoT',
    image_url: './assets/images/yazdan2020-1.png',
    collaborators: [
      { name: 'Yazdan Ahmad Qadri', link: 'https://scholar.google.com/citations?user=h6CB6IQAAAAJ' },
      { name: 'Rashid Ali', link: 'https://scholar.google.com/citations?user=GhrhtTgAAAAJ&hl=en' },
      { name: 'Arslan Musaddiq', link: '' },
      { name: 'Fadi Al‑Turjman', link: '' },
      { name: 'Dae Wan Kim', link: '' },
      { name: 'Sung Won Kim', link: 'https://scholar.google.com/citations?user=qHnnxqIAAAAJ' }
    ],
    citation: '@article{Qadri2020, author={Qadri, Yazdan Ahmad and Ali, Rashid and Musaddiq, Arslan and Al‑Turjman, Fadi and Kim, Dae Wan and Kim, Sung Won}, title={The limitations in the state‑of‑the‑art counter‑measures against the security threats in H‑IoT}, journal={Cluster Computing}, volume={23}, number={3}, pages={2047–2065}, year={2020}, url = {https://doi.org/10.1007/s10586-019-03036-7}, doi = {10.1007/s10586-019-03036-7}}',
        // codeLink : 'https://github.com', 
       // pdfLink : './pdf/'  
},
  {
    publication_link: 'https://doi.org/10.1186/s13638-019-1498-x',
    title: 'Q‑learning‑enabled channel access in next‑generation dense wireless networks for IoT‑based eHealth systems',
    image_url: './assets/images/rashid2019.png',
    collaborators: [
      { name: 'Rashid Ali', link: 'https://scholar.google.com/citations?user=GhrhtTgAAAAJ&hl=en'},
      { name: 'Yazdan Ahmad Qadri', link: 'https://scholar.google.com/citations?user=h6CB6IQAAAAJ' },
      { name: 'Yousaf Bin Zikria', link: '' },
      { name: 'Tariq Umer', link: '' },
      { name: 'Byung‑Seo Kim', link: '' },
      { name: 'Sung Won Kim', link: 'https://scholar.google.com/citations?user=qHnnxqIAAAAJ' }
    ],
    citation: '@article{Ali2019, author={Ali, Rashid and Qadri, Yazdan Ahmad and Bin Zikria, Yousaf and Umer, Tariq and Kim, Byung‑Seo and Kim, Sung Won}, title={Q‑learning‑enabled channel access in next‑generation dense wireless networks for IoT‑based eHealth systems}, journal={EURASIP J. Wireless Communications and Networking}, year={2019}, article-number={178}, url = {https://doi.org/10.1186/s13638-019-1498-x}, doi = {10.1186/s13638-019-1498-x}}',
        // codeLink : 'https://github.com', 
       // pdfLink : './pdf/'  
},
  {
    publication_link: 'https://doi.org/10.17485/ijst/2016/v9i47/106440',
    title: 'Early Detection of Epilepsy using Automatic Speech Recognition',
    image_url: './assets/images/yazdan2016.png',
    collaborators: [
      { name: 'Yazdan Ahmad Qadri', link: 'https://scholar.google.com/citations?user=h6CB6IQAAAAJ' },
      { name: 'Vineet Kumar', link: '' }
    ],
    citation: '@article{Yazdan2016, author={Yazdan Ahmad and Kumar, Vineet}, title={Early Detection of Epilepsy using Automatic Speech Recognition}, journal={Indian Journal of Science and Technology}, vol = {9}, year={2016}, issue={47}, url = {https://doi.org/10.17485/ijst/2016/v9i47/106440}, doi = {10.17485/ijst/2016/v9i47/106440}}',
        // codeLink : 'https://github.com', 
       // pdfLink : './pdf/'    
},
]

// Presentations

const presentationData = [
  {
    title: "Active Reconfigurable Intelligent Surface-Aided Terahertz Wireless Communications",
    presentation_link: "https://doi.org/10.48550/arXiv.2407.18323",
    conference: "Symposium of the Korean Institute of Communications and Information Sciences",
    year: 2024,
    location: "Jeju-do, Republic of Korea",
    authors: [
      { name: "W. Khalid", presenting: true, link: "https://scholar.google.com/citations?user=XLJ0spsAAAAJ&hl=en" },
      { name: "H. Yu", presenting: false, link: "https://scholar.google.com/citations?hl=en&user=OzmLUV8AAAAJ" },
      { name: "Yazdan Ahmad Qadri", presenting: false, link: "https://scholar.google.com/citations?user=h6CB6IQAAAAJ" }
    ],
    // codeLink: "#",
    // pdfLink: "#",
    citation: `@article{khalid2024, 
    title = {Active Reconfigurable Intelligent Surface-Aided Terahertz Wireless Communications}, 
    author = {Waqas Khalid and Heejung Yu and Yazdan Ahmad Qadri}, 
    journal = {arXiv preprint arXiv:2407.18323}, 
    year = {2024}, 
    month = {jul},
    url = {https://arxiv.org/abs/2407.18323}, 
    eprint = {2407.18323}
    }`
  },
  {
    title: "Industrial IoT: Role of IEEE 802.11be WLANs",
    presentation_link: "https://events.vtsociety.org/vtc2022-spring/wp-content/uploads/sites/32/2022/06/vtc2022spring_final-program-6-14-2022.pdf",
    conference: "95th IEEE Vehicular Technology Conference-Spring",
    year: 2022,
    location: "Helsinki, Finland",
    authors: [
      { name: "Yazdan Ahmad Qadri", presenting: true, link: "https://scholar.google.com/citations?user=h6CB6IQAAAAJ" },
      { name: "Ali Nauman", presenting: false, link: "https://scholar.google.com/citations?user=Vg3i3acAAAAJ" },
      { name: "Zulqar Nain", presenting: false, link: "https://scholar.google.com/citations?user=7R5jw8cAAAAJ&hl=en" },
      { name: "Sung Won Kim", presenting: false, link: "https://scholar.google.com/citations?user=qHnnxqIAAAAJ" }
    ],
    // codeLink: "#",
    pdfLink: "./assets/pdf/vtc2022.pdf",
    // citation: `@inproceedings{Qadri2022IIoT,...}`
  },
  {
    title: "History-aware Adaptive Route Update Scheme for Low-Power and Lossy Networks",
    presentation_link: "https://ieeexplore.ieee.org/document/9621062",
    conference: "KICS International Conference on ICT Convergence",
    year: 2021,
    location: "Jeju-do, Republic of Korea",
    authors: [
      { name: "Zulqar Nain", presenting: true, link: "https://scholar.google.com/citations?user=7R5jw8cAAAAJ&hl=en" },
      { name: "Arslan Musaddiq", presenting: false, link: "https://scholar.google.com/citations?user=9aXM6bEAAAAJ&hl=en" },
      { name: "Yazdan Ahmad Qadri", presenting: false, link: "https://scholar.google.com/citations?user=h6CB6IQAAAAJ" },
      { name: "Sung Won Kim", presenting: false, link: "https://scholar.google.com/citations?user=qHnnxqIAAAAJ" }
    ],
    // codeLink: "#",
    // pdfLink: "#",
    citation: `@INPROCEEDINGS{zulqar2021, author={Nain, Zulqar and Musaddiq, Arslan and Qadri, Yazdan Ahmad and Kim, Sung Won}, 
    booktitle={2021 International Conference on Information and Communication Technology Convergence (ICTC)}, 
    title={History-Aware Adaptive Route Update Scheme for Low-Power and Lossy Networks}, 
    year={2021}, 
    pages={1830-1834}, 
    doi={10.1109/ICTC52510.2021.9621062}
    }`
  },
  {
    title: "Self-optimized channel access for healthcare-Internet of Things",
    presentation_link: "",
    conference: "18th International Workshop on Emerging ICT",
    year: 2021,
    location: "Dalian, China",
    authors: [
      { name: "Yazdan Ahmad Qadri", presenting: false, link: "https://scholar.google.com/citations?user=h6CB6IQAAAAJ" },
      { name: "S. H. Park", presenting: true, link: "" },
      { name: "Sung Won Kim", presenting: false, link: "https://scholar.google.com/citations?user=qHnnxqIAAAAJ" }
    ],
    // codeLink: "#",
    // pdfLink: "#",
    // citation: ``
  },
  {
    title: "An intelligent deterministic D2D communication in narrow-band Internet of Things",
    presentation_link: "https://ieeexplore.ieee.org/abstract/document/8766786",
    conference: "International Wireless Communications and Mobile Computing Conference",
    year: 2019,
    location: "Tangier, Morocco",
    authors: [
      { name: "Ali Nauman", presenting: true, link: "https://scholar.google.com/citations?user=Vg3i3acAAAAJ" },
      { name: "Muhammad Ali Jamshed", presenting: false, link: "https://scholar.google.com/citations?user=at4MvYMAAAAJ&hl=en" },
      { name: "Yazdan Ahmad Qadri", presenting: false, link: "https://scholar.google.com/citations?user=h6CB6IQAAAAJ" },
      { name: "Rashid Ali", presenting: false, link: "https://scholar.google.com/citations?user=GhrhtTgAAAAJ&hl=en" },
      { name: "Yousaf Bin Zikria", presenting: false, link: "https://scholar.google.com/citations?user=K90qMyMAAAAJ&hl=en" },
      { name: "Sung Won Kim", presenting: false, link: "https://scholar.google.com/citations?user=qHnnxqIAAAAJ" }
    ],
    // codeLink: "#",
    pdfLink: "./assets/pdf/20190624-IWCMC.pdf",
    citation: `@INPROCEEDINGS{nauman2019, author={Nauman, Ali and Jamshed, Muhammad Ali and Ahmad, Yazdan and Ali, Rashid and Zikria, Yousaf Bin and Won Kim, Sung}, 
    booktitle={2019 15th International Wireless Communications & Mobile Computing Conference (IWCMC)}, 
    title={An Intelligent Deterministic D2D Communication in Narrow-band Internet of Things}, 
    year={2019}, 
    pages={2111-2115}, 
    doi={10.1109/IWCMC.2019.8766786}
    }`
  },
  {
    title: "An overview of selective forwarding and wormhole attacks in healthcare IoT",
    presentation_link: "#",
    conference: "Asia Pacific Conference on Information Communication Technology",
    year: 2018,
    location: "Daegu, Republic of Korea",
    authors: [
      { name: "Yazdan Ahmad Qadri", presenting: true, link: "https://scholar.google.com/citations?user=h6CB6IQAAAAJ" },
      { name: "Arslan Musaddiq", presenting: false, link: "https://scholar.google.com/citations?user=9aXM6bEAAAAJ&hl=en" },
      { name: "Dae Wan Kim", presenting: false, link: "" },
      { name: "Sung Won Kim", presenting: false, link: "https://scholar.google.com/citations?user=qHnnxqIAAAAJ" }
    ],
    // codeLink: "#",
    // pdfLink: "#",
    // citation: `@inproceedings{Qadri2018Attacks,...}`
  },
  {
    title: "An overview of interoperability issues in the vehicular cloud network",
    presentation_link: "#",
    conference: "Asia Pacific Conference on Information Communication Technology",
    year: 2018,
    location: "Daegu, Republic of Korea",
    authors: [
      { name: "Arslan Musaddiq", presenting: false, link: "https://scholar.google.com/citations?user=9aXM6bEAAAAJ&hl=en" },
      { name: "Yazdan Ahmad Qadri", presenting: false, link: "https://scholar.google.com/citations?user=h6CB6IQAAAAJ" },
      { name: "Dae Wan Kim", presenting: false, link: "" },
      { name: "Sung Won Kim", presenting: false, link: "https://scholar.google.com/citations?user=qHnnxqIAAAAJ" }
    ],
    // codeLink: "#",
    // pdfLink: "#",
    // citation: `@inproceedings{Musaddiq2018VCN,...}`
  },
  {
    title: "Early Detection of Epilepsy using Automatic Speech Recognition",
    presentation_link: "https://indjst.org/articles/early-detection-of-epilepsy-using-automatic-speech-recognition",
    conference: "3rd International Conference on Computing Sciences",
    year: 2016,
    location: "Jalandhar, India",
    authors: [
      { name: "Yazdan Ahmad Qadri", presenting: true, link: "https://scholar.google.com/citations?user=h6CB6IQAAAAJ" },
      { name: "Vineet Kumar", presenting: false, link: "" }
    ],
    // codeLink: "#",
    // pdfLink: "#",
    citation: `@inproceedings{Qadri2016,
    title={Early Detection of Epilepsy using Automatic Speech Recognition},
    author={Qadri, Yazdan Ahmad and Kumar, Vineet}, journal={Indian Journal of Science and Technology},
    volume={9}, 
    number={47}, 
    pages={1--6}, 
    year={2016}, 
    doi={10.17485/ijst/2016/v9i47/106440}
    }`
}
];

//PATENTS

const patentData = [
  {
    title: "Method for intelligent relay node selection for D2D communication, recording medium and device for performing the method",
    inventors: [
      { name: "Sung Won Kim", presenting: false, link: "https://scholar.google.com/citations?user=qHnnxqIAAAAJ" },
      { name: "Ali Nauman", presenting: true, link: "https://scholar.google.com/citations?user=Vg3i3acAAAAJ" },
      { name: "Yazdan Ahmad Qadri", link: "https://scholar.google.com/citations?user=h6CB6IQAAAAJ" }
    ],
    patentNumber: "10-2685026",
    country: "Republic of Korea"
  },
  {
    title: "Method for scheduling OFDMA based on quality of service in wireless local area network",
    inventors: [
      { name: "Sung Won Kim", presenting: false, link: "https://scholar.google.com/citations?user=qHnnxqIAAAAJ" },
      { name: "Yazdan Ahmad Qadri", link: "https://scholar.google.com/citations?user=h6CB6IQAAAAJ" }
    ],
    patentNumber: "10-2648538",
    country: "Republic of Korea"
  },
  {
    title: "Packet collision prevention device and method",
    inventors: [
      { name: "Sung Won Kim", presenting: false, link: "https://scholar.google.com/citations?user=qHnnxqIAAAAJ" },
      { name: "Yazdan Ahmad Qadri", link: "https://scholar.google.com/citations?user=h6CB6IQAAAAJ" }
    ],
    patentNumber: "10-2276280",
    country: "Republic of Korea"
  },
  {
    title: "Method and apparatus for deep brain stimulation using deep learning and recording medium for performing the method",
    inventors: [
      { name: "Sung Won Kim", presenting: false, link: "https://scholar.google.com/citations?user=qHnnxqIAAAAJ" },
      { name: "Yazdan Ahmad Qadri", link: "https://scholar.google.com/citations?user=h6CB6IQAAAAJ" },
      { name: "Rojeena Bajracharya", link: "https://scholar.google.com/citations?user=OUPsHKIAAAAJ&hl=en" },
      { name: "Ali Nauman", presenting: true, link: "https://scholar.google.com/citations?user=Vg3i3acAAAAJ" }

    ],
    patentNumber: "10-2247761",
    country: "Republic of Korea"
  },
  {
    title: "Apparatus and method for adjusting duty cycle for coexistence of heterogeneous networks and recording medium for performing the method",
    inventors: [
      { name: "Sung Won Kim", presenting: false, link: "https://scholar.google.com/citations?user=qHnnxqIAAAAJ" },
      { name: "Rojeena Bajracharya", link: "https://scholar.google.com/citations?user=OUPsHKIAAAAJ&hl=en" },
      { name: "Rakesh Shrestha", link: "https://scholar.google.com/citations?user=DlsuLAkAAAAJ&hl=en" },
      { name: "Yazdan Ahmad Qadri", link: "https://scholar.google.com/citations?user=h6CB6IQAAAAJ" }
    ],
    patentNumber: "10-2179791",
    country: "Republic of Korea"
  },
  {
    title: "Method for security mobility adaptable routing for critical IoT and recording medium for performing the method",
    inventors: [
      { name: "Yazdan Ahmad Qadri", link: "https://scholar.google.com/citations?user=h6CB6IQAAAAJ" },
      { name: "Sung Won Kim", presenting: false, link: "https://scholar.google.com/citations?user=qHnnxqIAAAAJ" }
    ],
    patentNumber: "10-2109771",
    country: "Republic of Korea"
  }
];


// Book chapter
// role: "chapter" | "author" | "editor"
const bookData = [
  {
    type: "Book Chapter",
    chapter: "Cobots for Human Surgery",
    role: "chapter",
    chapter_link: "https://www.degruyterbrill.com/document/doi/10.1515/9783110736168-008/html?srsltid=AfmBOooX1vgXFLk7Oa0FB3kLsrzKB6Ui2bonEYnFqQAImuJJEqzeMW0L",
    book: "Industry 5.0: A New Revolution Through Human-Centric Solution",
    link: "https://www.degruyterbrill.com/document/doi/10.1515/9783110736168/html",
    authors: [
      { name: "Yazdan Ahmad Qadri", link: "https://scholar.google.com/citations?user=h6CB6IQAAAAJ" },
      { name: "Ali Nauman", link: "https://scholar.google.com/citations?user=Vg3i3acAAAAJ" },
      { name: "Zuqar Nain", link: "https://scholar.google.com/citations?user=7R5jw8cAAAAJ&hl=en" },
      { name: "Rashid Ali", link: "https://scholar.google.com/citations?user=GhrhtTgAAAAJ&hl=en" },
      { name: "Sung Won Kim", link: "https://scholar.google.com/citations?user=qHnnxqIAAAAJ" }
    ],
    publisher: "De Gruyter",
    location: "Berlin, Boston",
    citation: `@incollection{Qadri2025Cobots,
  author    = {Qadri, Yazdan Ahmad and Nauman, Ali and Nain, Zuqar and Ali, Rashid and Kim, Sung Won},
  title     = {Cobots for Human Surgery},
  booktitle = {Industry 5.0: A New Revolution Through Human-Centric Solution},
  publisher = {De Gruyter},
  address   = {Berlin, Boston},
  year      = {2025},
  pages     = {113--128},
  url       = {https://www.degruyterbrill.com/document/doi/10.1515/9783110736168-008/html?srsltid=AfmBOooX1vgXFLk7Oa0FB3kLsrzKB6Ui2bonEYnFqQAImuJJEqzeMW0L}
}`
  },
  {
    type: "Book Chapter",
    chapter: "Machine Learning-Enabled Internet of Things for Medical Informatics",
    role: "chapter",
    chapter_link: "https://www.sciencedirect.com/science/article/abs/pii/B9780128217771000161",
    book: "Machine Learning, Big Data, and IoT for Medical Informatics",
    link: "https://www.sciencedirect.com/book/9780128217771/machine-learning-big-data-and-iot-for-medical-informatics", 
    authors: [
      { name: "Ali Nauman", link: "https://scholar.google.com/citations?user=Vg3i3acAAAAJ" },
      { name: "Yazdan Ahmad Qadri", link: "https://scholar.google.com/citations?user=h6CB6IQAAAAJ" },
      { name: "Rashid Ali", link: "https://scholar.google.com/citations?user=GhrhtTgAAAAJ&hl=en" },
      { name: "Sung Won Kim", link: "https://scholar.google.com/citations?user=qHnnxqIAAAAJ" }
    ],
    publisher: "Academic Press",
    location: "Cambridge, Massachusetts",
    citation: `@incollection{Nauman2021MLIoT,
  author    = {Nauman, Ali and Qadri, Yazdan Ahmad and Ali, Rashid and Kim, Sung Won},
  title     = {Machine Learning-Enabled Internet of Things for Medical Informatics},
  booktitle = {Machine Learning, Big Data, and IoT for Medical Informatics},
  publisher = {Academic Press},
  address   = {Cambridge, Massachusetts},
  year      = {2021},
  pages     = {111--126},
  url       = {https://www.sciencedirect.com/science/article/abs/pii/B9780128217771000161}
}`
  },
  {
    type: "Book Chapter",
    chapter: "A Blockchain Model for Trustworthiness in the Internet of Things (IoT)-Based Smart-Cities",
    book: "Trends in Cloud-based IoT",
    chapter_link:  "https://link.springer.com/chapter/10.1007/978-3-030-40037-8_1",
    role: "chapter",
    link: "https://link.springer.com/book/10.1007/978-3-030-40037-8", 
    authors: [
      { name: "Rashid Ali", link: "https://scholar.google.com/citations?user=GhrhtTgAAAAJ&hl=en" },
      { name: "Yazdan Ahmad Qadri", link: "https://scholar.google.com/citations?user=h6CB6IQAAAAJ" },
      { name: "Yousaf Bin Zikria", link: "https://scholar.google.com/citations?user=K90qMyMAAAAJ&hl=en" },
      { name: "Fadi Al-Turjman", link: "" },
      { name: "Byung-Seo Kim", link: "https://scholar.google.com/citations?user=S87ZVe0AAAAJ&hl=en" },
      { name: "Sung Won Kim", link: "https://scholar.google.com/citations?user=qHnnxqIAAAAJ" }
    ],
    publisher: "Springer",
    location: "Cham",
    citation: `@incollection{Ali2020Blockchain,
  author    = {Ali, Rashid and Qadri, Yazdan Ahmad and Zikria, Yousaf Bin and Al-Turjman, Fadi and Kim, Byung-Seo and Kim, Sung Won},
  title     = {A Blockchain Model for Trustworthiness in the Internet of Things (IoT)-Based Smart-Cities},
  booktitle = {Trends in Cloud-based IoT},
  publisher = {Springer},
  address   = {Cham},
  year      = {2020},
  pages     = {1--19},
  url       = {https://link.springer.com/chapter/10.1007/978-3-030-40037-8_1}
}`
  },
  {
    type: "Book Chapter",
    chapter: "Trends, Issues, and Challenges in the Domain of IoT-Based Vehicular Cloud Network",
    role: "chapter",
    chapter_link:  "https://link.springer.com/chapter/10.1007/978-3-030-38712-9_4",
    book: "Unmanned Aerial Vehicles in Smart Cities",
    link: "https://link.springer.com/book/10.1007/978-3-030-38712-9",  
    authors: [
      { name: "Arslan Musaddiq", link: "https://scholar.google.com/citations?user=9aXM6bEAAAAJ&hl=en" },
      { name: "Rashid Ali", link: "https://scholar.google.com/citations?user=GhrhtTgAAAAJ&hl=en" },
      { name: "Rojeena Bajracharya", link: "https://scholar.google.com/citations?user=OUPsHKIAAAAJ&hl=en" },
      { name: "Yazdan Ahmad Qadri", link: "https://scholar.google.com/citations?user=h6CB6IQAAAAJ" },
      { name: "Fadi Al-Turjman", link: "" },
      { name: "Sung Won Kim", link: "https://scholar.google.com/citations?user=qHnnxqIAAAAJ" }
    ],
    publisher: "Springer",
    location: "Cham",
    citation: `@incollection{Musaddiq2020VCloud,
  author    = {Musaddiq, Arslan and Ali, Rashid and Bajracharya, Rabindra and Qadri, Yazdan Ahmad and Al-Turjman, Fadi and Kim, Sung Won},
  title     = {Trends, Issues, and Challenges in the Domain of IoT-Based Vehicular Cloud Network},
  booktitle = {Unmanned Aerial Vehicles in Smart Cities},
  publisher = {Springer},
  address   = {Cham},
  year      = {2020},
  pages     = {49--64},
  url       = {https://link.springer.com/chapter/10.1007/978-3-030-38712-9_4}
}`
  }
];


