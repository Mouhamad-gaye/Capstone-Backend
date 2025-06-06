

const yearlyEvents = [
    {
        title: `Grand Magal de Touba 18 SAFAR`,
        description: `"The Grand Magal of Touba is the annual religious pilgrimage of the Senegalese Mouride Brotherhood, \n
        one of the four Islamic Sufi orders of Senegal. On the 18th of Safar, the second month of the Islamic calendar, \n
        pilgrims gather in the holy Mouride city of Touba to celebrate the life and teachings of Amadou Bamba, \n
        the founder of the brotherhood. The Grand Magal has been recognized as one of the most popular pilgrimages \n
        in the world, with over 3 million participating in 2011. The pilgrimage dates back to 1928 (one year after Bamba's death) \n
        and commemorates his 1895 exile to Gabon by the French colonial government.`,
        date: Date("August 12, 2025"),
        location: `Denver, CO Masjid Taqwa 3400 Albion St Denver, CO 80202`
    },

    {
        title: `Kazu Rajab`,
        description: `Kazu Rajab is a significant event in the Mouride tradition, celebrated to honor the birth of Serigne Fallou Mbacké, 
        the second caliph of the Mouride brotherhood. The event takes place on the 27th night of the lunar month of Rajab, which coincides 
        with the Islamic commemoration of Al-Isrâ wal-Mi’raj—the Prophet Muhammad’s night journey and ascension.
        🔹 Key Aspects of Kazu Rajab
        ✔ Spiritual Significance → It marks the birth of Serigne Fallou Mbacké, a revered figure in Senegalese Islamic history. 
        ✔ Pilgrimage to Touba → Many Mouride followers gather at the Great Mosque of Touba to pray and reflect. 
        ✔ Historical Roots → The tradition began in 1963, when Serigne Fallou himself spent the night in prayer at his birthplace, 
        Darou Salam. 
        ✔ Cultural Impact → The event has grown beyond Senegal, attracting international attention and media coverage.`,
        date: Date("April 12, 2026"),
        location: `Denver, CO Masjid Taqwa 3400 Albion St Denver, CO 80202`
    },

      {
        title: `Magal Darou Khoudoss`,
        description: `"Magal Darou Khoudoss is a significant religious event celebrated by the Mouride community in Senegal. 
        It commemorates the rappel à Dieu (passing) of Cheikh Ahmadou Bamba, the founder of Mouridism.
        🔹 Key Aspects of Magal Darou Khoudoss
        ✔ Historical Significance → First organized in 1935 by Serigne Mouhamadou Moustapha Mbacké, the first Khalife of Serigne Touba. 
        ✔ Spiritual Gathering → Mouride followers gather in Touba to honor Cheikh Ahmadou Bamba’s legacy. 
        ✔ Community Engagement → Includes prayers, religious teachings, and social activities. 
        ✔ Centennial Celebration → The 100th anniversary of Magal Darou Khoudoss will be celebrated in July 2024`,
        date: Date("January 12, 2026"),
        location: `Denver, CO Masjid Taqwa 3400 Albion St Denver, CO 80202`
    },

    {
        title: `Ramadan Kareem`,
        description: `Ramadan is the ninth month of the Islamic calendar and is observed by Muslims worldwide as a time of fasting, prayer, 
        reflection, and community. It commemorates the month in which the Quran was revealed to Prophet Muhammad (PBUH) and is considered 
        one of the Five Pillars of Islam.
        🔹 Key Aspects of Ramadan
        ✔ Fasting (Sawm) → Muslims fast from dawn to sunset, refraining from food, drink, and sinful behavior. 
        ✔ Suhoor & Iftar → The pre-dawn meal (Suhoor) and evening meal (Iftar) mark the beginning and end of the daily fast. 
        ✔ Increased Worship → Muslims engage in extra prayers (Tarawih), Quran recitation, and charity. 
        ✔ Laylat al-Qadr → The Night of Power, believed to be the night the Quran was revealed, is observed in the last ten days of Ramadan. 
        ✔ Eid al-Fitr → The festival marking the end of Ramadan, celebrated with prayers, feasts, and giving to the needy`,
        date: Date("March 1, 2026"),
        location: `Denver, CO Masjid Taqwa 3400 Albion St Denver, CO 80202`
    },

    {
        title: `Thiant Serigne Saliou`,
        description: `Thiant Serigne Saliou refers to spiritual gatherings or events held in honor of Serigne Saliou Mbacké, 
        the fifth caliph of the Mouride Brotherhood in Senegal. These gatherings, known as "Thiant", are deeply rooted in Mouride 
        traditions and often involve prayers, religious teachings, and community engagement.`,
        date: Date("October 12, 2025"),
        location: `Denver, CO Masjid Taqwa 3400 Albion St Denver, CO 80202`
    },

    {
        title: `Gamou`,
        description: `Gamou refers to the Mawlid, the celebration of the birth of the Prophet Muhammad (PBUH). It is widely observed in Senegal,
         particularly by the Tijaniyya and Mouride communities. The event is marked by prayers, Quran recitations, religious teachings, 
         and gatherings where scholars discuss the life and legacy of the Prophet.
        In Senegal, one of the most famous Gamou celebrations takes place in Tivaouane, led by the Tijaniyya brotherhood, attracting 
        thousands of worshippers. The event is a time for spiritual reflection, community bonding, and acts of charity.`,
        date: Date("July 12, 2025"),
        location: `Denver, CO Masjid Taqwa 3400 Albion St Denver, CO 80202`
    },

    {
        title: `EID el Fitr`,
        description: `Eid al-Fitr is a major Islamic festival that marks the end of Ramadan, the month of fasting. It is celebrated on the 
        first day of Shawwal, the tenth month of the Islamic calendar2.
        🔹 Key Aspects of Eid al-Fitr
        ✔ Festival of Breaking the Fast → Muslims worldwide celebrate the completion of Ramadan with prayers and feasts. 
        ✔ Special Eid Prayers → A unique prayer called Salat al-Eid is performed in congregation, often in open fields or mosques. 
        ✔ Charity (Zakat al-Fitr) → Before Eid prayers, Muslims give a special charity to help those in need. 
        ✔ Family & Social Gatherings → People visit relatives, exchange gifts, and enjoy festive meals. 
        ✔ Symbolic Decorations → Homes and streets are adorned with lights and decorations.`,
        date: Date("April 1, 2025"),
        location: `Denver, CO Masjid Taqwa 3400 Albion St Denver, CO 80202`
    },

    {
        title: `EID AL Adha`,
        description: `Eid al-Adha, also known as the Festival of Sacrifice, is one of the most significant Islamic holidays. 
        It commemorates Prophet Ibrahim’s (Abraham’s) willingness to sacrifice his son in obedience to God’s command, before God 
        provided a ram as a substitute.
        🔹 Key Aspects of Eid al-Adha
        ✔ Sacrificial Ritual (Qurbani) → Muslims who can afford it sacrifice an animal (sheep, goat, cow, or camel) and 
        distribute the meat among family, friends, and those in need. 
        ✔ Eid Prayers → Special congregational prayers are held in mosques and open fields. 
        ✔ Charity & Giving → Emphasis on helping the less fortunate by sharing food and donations. 
        ✔ Hajj Connection → Eid al-Adha coincides with the completion of the Hajj pilgrimage in Mecca. 
        ✔ Festive Meals & Gatherings → Families come together to celebrate with traditional dishes and exchange greetings`,
        date: Date("June 6, 2025"),
        location: `Denver, CO Masjid Taqwa 3400 Albion St Denver, CO 80202`
    },

    {
        title: `Porokhane`,
        description: `Porokhane is a town in Senegal, located in the Kaolack Region, and is a significant pilgrimage site for the Mouride 
        Brotherhood. It is best known for its annual religious gathering, the Magal of Porokhane, 
        which honors Mame Diarra Bousso, the mother of Sheikh Ahmadou Bamba, the founder of Mouridism.
        🔹 Key Aspects of Porokhane
        ✔ Spiritual Significance → Pilgrims visit the mausoleum of Mame Diarra Bousso, a revered figure in Mouride history. 
        ✔ Annual Magal Celebration → Thousands of worshippers gather to pay homage and engage in prayers. 
        ✔ Historic Site → The well of Mame Diarra Bousso is officially recognized as a historic monument in Senegal`,
        date: Date("June 6, 2025"),
        location: `Denver, CO Masjid Taqwa 3400 Albion St Denver, CO 80202`
    },

    {
        title: `Laylatoul Khadr`,
        description: `Laylatul Qadr, also known as the Night of Power, is one of the most sacred nights in Islam. 
        It marks the night when the Quran was first revealed to Prophet Muhammad (PBUH) by the Angel Jibreel (Gabriel).
        🔹 Why is Laylatul Qadr Special?
        ✔ Better than 1,000 months → Worship on this night is more rewarding than 83 years of devotion (Quran 97:3). 
        ✔ Angels descend → The night is filled with peace and blessings as angels come down. 
        ✔ Duas are accepted → Allah is extra merciful, making it a perfect time for prayers and seeking forgiveness. 
        ✔ Occurs in the last 10 nights of Ramadan → The exact date is unknown, but it is most commonly observed on the 27th night`,
        date: Date("April 6, 2025"),
        location: `Denver, CO Masjid Taqwa 3400 Albion St Denver, CO 80202`
    }
]

export default yearlyEvents






