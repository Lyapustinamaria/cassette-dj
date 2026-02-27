import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Disc3 } from "lucide-react";

const tracks = [
  {
    id: "01",
    name: "Rzhaka Fresko",
    message:
      "Можно было бы вспомнить с десяток песен, а то и больше, но я выбрала эту потому, что я еще так и не видела человека, который бы оседлал этот ломаный ритм этой, а тебе это удавалось легко.\n\nЯ обычно не танцую на сетах, но на твоем такое было, что показатель того, что сеты у тебя очень клёвые, особенно тепло вспоминается как ты умеешь идеально подбирать треки по настроению)) и даже подшутить этим. Спасибо за самую лучшую, здоровую, по-настоящему теплую, человечную поддержку и принятие, которую ты умеешь оказывать. Спасибо за твою дружбу и тебя, ты замечательный и очень живой, Митя. Я желаю того, чтобы вы жили в счастье, а с тобой это легко, благодаря твоим человеческим качествам!",
    spotify:
      "https://open.spotify.com/embed/track/7xQYVjs4wZNdCwO0EeAWMC?utm_source=generator",
  },
  {
    id: "02",
    name: "Плоский Воробушек",
    message:
      "На улице тёплая летняя ночь, мы пешком идём от канала Грибоедова до парка Трёхсотлетия, почти без перерыва смеясь.\n\nСтолько классных моментов нашей молодости прошли вместе, что если бы я был деревом, и с меня к концу жизни сделали срез – множество колец ближе к центру были бы окрашены яркими цветами наших похождений. А если поставить этот срез на проигрыватель – зазвучит бесшовно перетекающее из одной песни в другую поппури из нашей любимой музыки, спетой под гитару и, иногда, под фортепиано. Энергия и свет, который ты распространяешь, мало с чем можно сравнить, и я счастлив что мы уже разделили, и продолжаем разделять значимые части нашей жизни вместе.",
    spotify:
      "https://open.spotify.com/embed/track/0JNZGIavoUrdup1NsgJOQs?si=363a486cbc2a42dc",
  },
  {
    id: "03",
    name: "Настище",
    message:
      "Ты знаешь мои отношения с музыкой, Митя, так что я долго искала ключ к поставленной Машей задачей, а потом решила пойти через то, что знаю лучше - кино - и вспомнила его! Это был очень классный и теплый вечер, когда мы вкусно и ели и много хохотали, смотря это абсолютно неожиданный для меня фильм. Вообще мне кажется, французское improbable, лучше всего характеризует все наши встречи, как и нашу дружбу. Ты для меня воплощение спонтанности и неожиданности :) и спасибо тебе за эту каплю прекрасного и веселого сумасшествия, береги его и будь счастлив ! С Днем рождения !  \n\nPS Я долго колебалась, думая, что в качестве саундтрека, быть может стоить оставить просто коровье мычание ;) ",
    spotify:
      "https://open.spotify.com/embed/track/4aNtTIwXctswdp9bhrgpXr?utm_source=generator",
  },
  {
    id: "04",
    name: "Parkur",
    message:
      "Играть с тобой в группе и дружить с тобой — это одно большое приключение, с которым у меня ассоциируется несколько офигенных лет в СПб перед эмиграцией. Спасибо тебе за твой авантюризм и смелость в творчестве, смелость говорить в песнях без прикрас и при этом с чувством юмора — я учился этому у тебя!\n\nТо, как ты сделал mashup «Космоса» 2H Company и твоего «нового района», было, как всегда, одновременно угарно и пронзительно (особенно в контексте фестиваля, посвященного Дню космонавтики). В общем, ты король неожиданных и пронзительных мэшапов, сочетаешь несочетаемое — как в своих песнях, так и в DJ-сетах. Обожаю получать от тебя музыкальные приколы в тг, makes my day.\n\nЖелаю сохранить твой игривый подход к творчеству и жизни, несмотря на то, что время усердно пытается сделать нас более серьезными! Обнимаю!",
    spotify:
      "https://open.spotify.com/embed/track/3OJowVd30z2JKapDFHYQi5?utm_source=generator",
  },
  {
    id: "05",
    name: "SouvlakiGirl013",
    message:
      "Первый раз в жизни увидела такую подборку кассет именно у тебя дома :) Все воспоминания — про репы и запись треков, а ещё про концерт где-то на Лиговском (всё время забываю названия тех мест), но благодарна именно за то, что открыл глаза на оперного Макларена :)",
    spotify:
      "https://open.spotify.com/embed/track/0rsssMU4XSm6pgLFKnVObd?utm_source=generator",
  },
  {
    id: "06",
    name: "KIKENKA",
    message:
      "Я долгое время не знала как она называется, но она была в моем любимом утреннем плейлисте, который ты мне придумал давным-давно. Я слушала ее на пробежках или утром в автобусе, но даже не знала что это за слоудайв. Но в прошлом году мы все вместе пошли на их концерт, стояли на каком-то возвышении, и видели весь зал и сцену и вдруг - они играют тот самый трек!  в этом узнавании было столько чистого счастья!\n\nНикогда не была на твоих сетах (:(), но если я включу тот микс что у нас в чате, я точно буду странно улыбаться весь день. Из моих любимых - killing in the name of sobyanin, Hannah der deutscher Spitz, Searching for red flags in Philipps Profile, Оля- Исповедь. \n\nЛюблю твою проницательность и непосредственность, шутить с тобой самые идиотские шутки.Также считаю что ты единственный человек, которому в этом мире стоит доверить AI.\n\nОставайся таким, каким тебе хочется быть! Обнял приподнял!",
    spotify:
      "https://open.spotify.com/embed/track/0eVz3hV2xOXdneGpnWDFpb?utm_source=generator",
  },
  {
    id: "07",
    name: "kleinfreund",
    message:
      "Ty smeznoy! We occasionally talked about Godspeed, and I don’t quite recall what started it, but they make what to me is some of the most meaningful music, period. “East Hastings” alone would make going to a GY!BE live performance worth it. Gives me goosebumps every time I hear it and I was lucky that they did end up playing it when I went to see them. Which is to say: I would definitely go again and recommend you go, too! Same for Slowdive!",
    spotify:
      "https://open.spotify.com/embed/track/5jMuXTa5hECm37P7C0mbIB?utm_source=generator",
  },
  {
    id: "08",
    name: "Катя, мама Мити",
    message:
      "Трека будет 2:\n\nНе знаю почему, но это первая песня, которую ты пел со всеми словами, причем всюду. Тебе было 3 года. Ты пел в транспорте, на улице, в кафе. с большим чувством выводил про “тайну свято сохрани”. Имел успех у публики.",
    spotify:
      "https://open.spotify.com/embed/track/5MZvmow79TVG1KWo2u1kOP?utm_source=generator",
  },
  {
    id: "09",
    name: "",
    message:
      "Увы, тут нет тех, кто может разделить это воспоминание. Твой второй класс, новогодний праздник “Все звезды”. Своим сопраном ты ничего мужского спеть не мог. Рецепт был такой: мое платье, парик, босоножки одноклассницы и “Надежда”. И тебя никто не узнал!\nНаверное поэтому на первом курсе ты был Дамой Треф, а сейчас иногда ходишь в юбке. И это классно!\n\nА еще я помню твой сет в Кыргызстане на фестивале. И как я почти весь сет проплакала.\n\nПоздравляю, родной, будь счастлив!",
    spotify:
      "https://open.spotify.com/embed/track/0mTPzyEsQSBNbgg7Md5mvB?utm_source=generator",
  },
  {
    id: "10",
    name: "Ozhi",
    message:
      "Мне кажется, мы будто бы знаем друг друга с самой юности, но июнь 2021 по-настоящему нас сблизил. Спасибо, что оказался тогда именно на той стороне улицы, по которой я шла. Спасибо за все авантюры, переплавы, дачные забавы, завтраки в окно, кино, музыку и просто разговоры. Я скучаю по тебе, друг. Stay wild!",
    spotify:
      "https://open.spotify.com/embed/track/0yfNXxlyXdmP0ue1iJijx1?utm_source=generator",
  },
  {
    id: "11",
    name: "Машулик",
    message:
      "Когда мы с тобой только познакомились, ты сыпал каким-то бесконечным количеством названий неизвестных мне групп. Тогда, два года назад, выбирая тебе подарок, я мучала Олега вопросами о том, какая же из групп может быть тебе интересна, так как я помнила только то, что у них концерт в августе в Берлине. Как ты можешь догадаться, концертов в августе в Берлине очень много, поэтому Олежич стойко отсматривал страницы мероприятий. В итоге билеты были куплены, а это песня стала играть в нашем доме постоянно (моей заслуги в этой ровно никакой).\n\nТы все еще сыпешь названиями групп (какие-то из них я стала запоминать), а эта песня все еще включается первой, когда мы просим Алису поставить музыку. Желаю тебе побольше такой стабильности в жизни",
    spotify:
      "https://open.spotify.com/embed/track/2junx9LRubsMY2OHaSc5DE?utm_source=generator",
  },
];

const SideB = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger */}
      <div className="flex justify-center py-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors duration-500 group"
          aria-label="Open Side B"
        >
          <Disc3 className="w-3.5 h-3.5" />
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase">
            Side B
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="bg-[hsl(240_12%_4%)] border-t border-border/30">
              <div className="container mx-auto px-4 py-24">
                <div className="max-w-5xl mx-auto">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground/70 mb-2">
                    Side B — Personal Tape
                  </h3>
                  <p className="text-sm text-muted-foreground/60 mb-16 font-mono">
                    Recorded by friends.
                  </p>

                  <div className="space-y-20">
                    {tracks.map((track, index) => (
                      <motion.div
                        key={track.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.15,
                        }}
                        className="grid md:grid-cols-2 gap-8 items-start"
                      >
                        {/* Spotify Embed — LEFT */}
                        <div className="w-full">
                          <div className="rounded-xl overflow-hidden border border-border/40">
                            <iframe
                              src={track.spotify}
                              width="100%"
                              height="352"
                              loading="lazy"
                              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                              className="block"
                              style={{ border: 0 }}
                              title={`spotify-${track.id}`}
                            />
                          </div>
                        </div>

                        {/* Text — RIGHT */}
                        <div>
                          <div className="flex items-baseline gap-4 mb-3">
                            <span className="font-mono text-xs text-primary/50">
                              Track {track.id}
                            </span>
                            <span className="text-sm font-medium text-foreground/70">
                              {track.name}
                            </span>
                          </div>

                          <p className="whitespace-pre-line text-sm text-muted-foreground/60 leading-relaxed">
                            {track.message}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideB;