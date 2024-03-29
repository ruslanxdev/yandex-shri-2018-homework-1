'use strict';

var data = [{
  title: 'Civilization VI: Rise and Fall review: A few turns closer to a Golden Age',
  titleColor: '#576433',
  image: 'assets/images/1.png',
  description: 'Every Civilization game since Civilization IV has followed the same trajectory: the initial release remixes and reinterprets some base systems from the previous game, but franchise veterans deem it anemic because it has fewer systems and features than its fully expanded predecessor. From there, new expansions gradually reintroduce the complexity that was lost in the move to a new game until many of those players conclude that it is the best game in the series yet.',
  size: 'm',
  channelName: 'Arstechnica'
}, {
  title: 'Для установки патча первого дня владельцам Kingdom Come придётся загрузить 29 ГБ',
  titleColor: '#3a2210',
  image: 'assets/images/2.png',
  description: 'Ещё до релиза у Kingdom Come: Deliverance вышло два патча «первого дня».\nОбновление до версии 1.01 требовало загрузить 23 ГБ.\nДля сравнения, вся игра на ПК, согласно данным Steam, занимает около 40 ГБ.',
  size: 'm',
  channelName: 'DTF'
}, {
  title: 'Первому игроку приготовиться: 80-е – 90-е',
  titleColor: '#334d5b',
  image: 'assets/images/3.png',
  size: 's',
  channelName: 'DTF'
}, {
  title: 'The Chrome extensions we can’t live without',
  titleColor: '#487eb6',
  image: 'assets/images/4.png',
  size: 's',
  channelName: 'Arstechnica'
}, {
  title: 'В течение десяти лет будет разработан сверхумный ИИ: он начнёт вытеснять людей практически из всех профессий',
  titleColor: '#467372',
  image: 'assets/images/5.png',
  size: 's',
  channelName: 'Vc.ru'
}, {
  title: 'Где хранить вещи в маленькой квартире: 5 советов',
  titleColor: '#605a54',
  image: 'assets/images/6.png',
  description: 'В маленькой квартире площадь на вес золота. Сегодня мы поговорим о том как организовать хранение вещей и использовать пространство рационально.<br>Маленькие квартиры требуют смелых и не стандартных решений. Я подготовил пять советов, которые помогут найти скрытые резервы и сделать квартиру удобнее.',
  size: 'l',
  channelName: 'Дневник архитектора'
}, {
  title: 'Please tell me Spotify’s new partnership with Discord will fix its bad gamer playlists',
  titleColor: '#36393e',
  image: 'assets/images/7.png',
  description: 'Discord will now allow users to connect their Spotify accounts on the platform. They’ll be able to share what music they’re listening to on their Discord profiles, or — if they have a Spotify Premium account — simultaneously listen to music within a server.',
  size: 'm',
  channelName: 'The Verge'
}, {
  title: 'Новый босс Microsoft о своей новой роли, достижениях и том, что будет в 2018 году',
  titleColor: '#6679c1',
  image: 'assets/images/8.png',
  description: '17 января новость о том, что Хелен Чианг назначена новым руководителем Minecraft в Microsoft, вызвала настоящую бурю одобрения в обсуждениях о роли женщин в технологических и игровых компаниях. Чианг заменила Мэтта Бути, который получил должность руководителя Microsoft Studios. И она в этом деле не новичок — ранее она контролировала деятельность подразделения, и её даже можно назвать ветераном Xbox.  Кроме того Чианг — первая женщина, возглавившая крупную игровую студию, а ещё она страстный поклонник цифрового мира Minecraft.',
  size: 'm',
  channelName: 'Maincraft main'
}, {
  title: '9 главных игровых релизов февраля',
  titleColor: '#605a54',
  image: 'assets/images/9.png',
  description: 'Представляю вам подборку релизов новых игр, которые ожидают нас в феврале.',
  size: 'l',
  channelName: 'Rage Quit'
}, {
  title: 'Netflix’s Altered Carbon gave me what Blade Runner 2049 couldn’t',
  titleColor: '#303f36',
  image: 'assets/images/10.png',
  size: 's',
  channelName: 'DTF'
}, {
  title: 'Лучшие игрушки',
  titleColor: '#000000',
  description: 'Проверить это проще всего на примере мобилы. Если подарить ребенку игрушечный китайский телефон, то на него будет потрачено полтора дня внимания. А если подарить ребенку даже испорченный, но настоящий мобильник, то ребенок будет с ним играться бесконечно. То же самое касается и всех остальных игрушек. Дать ребенку возможность порезать юсб-провод ножницами иногда гораздо дороже и важнее, чем подарить радиоуправляемый экскаватор.',
  size: 's',
  channelName: 'Артений Лебедев'
}, {
  title: 'Исполнительница роли Молчуньи из MGS V в очередной раз намекнула на участие в Death Stranding',
  titleColor: '#5f4137',
  image: 'assets/images/11.png',
  size: 's',
  channelName: 'Vc.ru'
}, {
  title: 'Что такое «ПОКА» при прощании?',
  titleColor: '#535353',
  image: 'assets/images/12.png',
  description: 'Словами «добрый день» или «здравствуйте» мы желаем человеку хорошего дня или здоровья, это всего лишь форма приветствия. Но если смысл этих фраз прозрачен, то совсем другая ситуация со словом «пока». Что оно означает и откуда взялось в русском языке?',
  size: 'm',
  channelName: 'Филологический маньяк'
}, {
  title: 'Почему люди верят в плоскую Землю и не верят в высадку на шарообразную Луну?',
  titleColor: '#437084',
  image: 'assets/images/13.png',
  description: 'Невинная шутка, наложившись на ограниченность знаний очень многих людей, переросла в откровенную проблему. Усугублению же этой проблемы способствует то, что среди «адептов плоской Земли» очень много медийных личностей. Я ни в коем случае не провожу корреляцию между медийностью и глупостью. Здесь нужно понимать, что на популярных людей постоянно направлены микрофоны и камеры СМИ и достаточно всего одного неосторожного заявления для его массового распространения. Куда больше глупых людей среди комментаторов, ненавистников Маска, масонов, рептилоидов и прочей нечести. Именно эти люди и вносят основной вклад в распространение ложной откровенно необъективной информации. Ведь куда проще свалить всё на заговор древней цивилизации с Нибиру, чем сесть и разобраться — этим и пользуются манипуляторы.',
  size: 'm',
  channelName: 'Sience Kitchen'
}, {
  title: 'Kylie Jenner Now Has the Most Liked Instagram Post Ever',
  titleColor: '#937175',
  image: 'assets/images/14.png',
  size: 's',
  channelName: 'Highsnobiety'
}, {
  title: 'Kendrick Lamar to Ban Photos at His Live Shows',
  titleColor: '#487eb6',
  image: 'assets/images/15.png',
  size: 's',
  channelName: 'Hypebeast'
}, {
  title: '«Одноклассники» сделали windows-заповедник для вымирающих игр на Flash',
  titleColor: '#000000',
  description: '«Одноклассники» выпустили десктопное игровое приложение «ОК Игры» для компьютеров с операционной системой Windows, с его помощью пользователи могут быстро запускать игры из ОК на своем компьютере.',
  size: 's',
  channelName: 'Роем'
}];

var feedContainer = document.querySelector('.feed');

data.forEach(function (data) {
  var title = data.title,
      titleColor = data.titleColor,
      image = data.image,
      description = data.description,
      size = data.size,
      channelName = data.channelName;

  var type = 't' + (image ? 'i' : '') + (description ? 'd' : '');
  var className = 'FeedItem';
  var feedItem = FeedItem.content.cloneNode(true).querySelector('.' + className);
  var feedItemTitle = feedItem.querySelector('.' + className + '__title');
  var feedItemImage = feedItem.querySelector('.' + className + '__image');
  var feedItemDescription = feedItem.querySelector('.' + className + '__description');
  var feedItemChannelName = feedItem.querySelector('.' + className + '__channelName');

  feedItem.classList.add(className + '--size-' + size, className + '--type-' + type);
  feedItem.style.color = titleColor;
  feedItemTitle.innerHTML = title;
  feedItemTitle.style.color = titleColor;
  feedItemDescription.innerHTML = description;
  feedItemChannelName.innerHTML = channelName;

  if (image) {
    var image2 = image.replace(/(\*.?)\.(\*.?)/g, '$1@2x.$2');
    var image3 = image.replace(/(\*.?)\.(\*.?)/g, '$1@3x.$2');

    feedItemImage.src = image;
    feedItemImage.srcset = image2 + ' 2x, ' + image3 + ' 3x';
  }

  feedContainer.appendChild(feedItem);
});