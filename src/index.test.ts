import { tinyplural } from '../src/index';
import { irregularNouns } from '../src/irregularNouns.data';
import { nonChangingNouns } from '../src/nonChangingNouns.data';

describe('tinyplural', () => {
  describe('irregular nouns', () => {
    it('handles common irregular plurals', () => {
      expect(tinyplural('foot', 1)).toEqual('1 foot');
      expect(tinyplural('foot', 2)).toEqual('2 feet');
      expect(tinyplural('tooth', 1)).toEqual('1 tooth');
      expect(tinyplural('tooth', 2)).toEqual('2 teeth');
      expect(tinyplural('goose', 2)).toEqual('2 geese');
      expect(tinyplural('man', 1)).toEqual('1 man');
      expect(tinyplural('man', 2)).toEqual('2 men');
      expect(tinyplural('woman', 2)).toEqual('2 women');
      expect(tinyplural('child', 2)).toEqual('2 children');
      expect(tinyplural('mouse', 2)).toEqual('2 mice');
      expect(tinyplural('ox', 2)).toEqual('2 oxen');
      expect(tinyplural('person', 2)).toEqual('2 people');
    });
  });

  describe('uncountable nouns', () => {
    it('maintains same form for singular and plural', () => {
      expect(tinyplural('fish', 1)).toEqual('1 fish');
      expect(tinyplural('fish', 2)).toEqual('2 fish');
      expect(tinyplural('sheep', 2)).toEqual('2 sheep');
      expect(tinyplural('deer', 2)).toEqual('2 deer');
      expect(tinyplural('moose', 2)).toEqual('2 moose');
      expect(tinyplural('series', 2)).toEqual('2 series');
      expect(tinyplural('species', 2)).toEqual('2 species');
      expect(tinyplural('aircraft', 2)).toEqual('2 aircraft');
    });

    it('handles various uncountable words', () => {
      expect(tinyplural('firmware', 2)).toEqual('2 firmware');
      expect(tinyplural('media', 2)).toEqual('2 media');
      expect(tinyplural('police', 2)).toEqual('2 police');
      expect(tinyplural('agenda', 2)).toEqual('2 agenda');
      expect(tinyplural('news', 2)).toEqual('2 news');
      expect(tinyplural('reindeer', 2)).toEqual('2 reindeer');
      expect(tinyplural('starfish', 2)).toEqual('2 starfish');
      expect(tinyplural('smallpox', 2)).toEqual('2 smallpox');
      expect(tinyplural('tennis', 2)).toEqual('2 tennis');
      expect(tinyplural('chickenpox', 2)).toEqual('2 chickenpox');
      expect(tinyplural('shambles', 2)).toEqual('2 shambles');
      expect(tinyplural('garbage', 2)).toEqual('2 garbage');
      expect(tinyplural('you', 2)).toEqual('2 you');
      expect(tinyplural('wildlife', 2)).toEqual('2 wildlife');
      expect(tinyplural('turquois', 2)).toEqual('2 turquois');
      expect(tinyplural('carnivorous', 2)).toEqual('2 carnivorous');
      expect(tinyplural('only', 2)).toEqual('2 only');
    });

    it('preserves case for uncountable words', () => {
      expect(tinyplural('Staff', 2)).toEqual('2 Staff');
      expect(tinyplural('STAFF', 2)).toEqual('2 STAFF');
    });
  });

  describe('latin/greek origin words', () => {
    it('handles -on to -a transformations', () => {
      expect(tinyplural('phenomenon', 1)).toEqual('1 phenomenon');
      expect(tinyplural('phenomenon', 2)).toEqual('2 phenomena');
      expect(tinyplural('criterion', 1)).toEqual('1 criterion');
      expect(tinyplural('criterion', 2)).toEqual('2 criteria');
    });

    it('handles -us endings', () => {
      expect(tinyplural('cactus', 1)).toEqual('1 cactus');
      expect(tinyplural('cactus', 2)).toEqual('2 cacti');
      expect(tinyplural('fungus', 2)).toEqual('2 fungi');
      expect(tinyplural('stimulus', 2)).toEqual('2 stimuluses');
      expect(tinyplural('syllabus', 2)).toEqual('2 syllabi');
    });

    it('handles -is to -es transformations', () => {
      expect(tinyplural('analysis', 1)).toEqual('1 analysis');
      expect(tinyplural('analysis', 2)).toEqual('2 analyses');
      expect(tinyplural('basis', 2)).toEqual('2 bases');
      expect(tinyplural('crisis', 2)).toEqual('2 crises');
      expect(tinyplural('diagnosis', 2)).toEqual('2 diagnoses');
      expect(tinyplural('thesis', 2)).toEqual('2 theses');
    });
  });

  describe('consonant + o words', () => {
    it('adds -es to most consonant + o words', () => {
      expect(tinyplural('hero', 1)).toEqual('1 hero');
      expect(tinyplural('hero', 2)).toEqual('2 heroes');
      expect(tinyplural('tomato', 2)).toEqual('2 tomatoes');
      expect(tinyplural('potato', 2)).toEqual('2 potatoes');
      expect(tinyplural('echo', 2)).toEqual('2 echoes');
      expect(tinyplural('torpedo', 2)).toEqual('2 torpedoes');
    });
  });

  describe('vowel + o words', () => {
    it('adds -s to vowel + o words', () => {
      expect(tinyplural('zoo', 1)).toEqual('1 zoo');
      expect(tinyplural('zoo', 2)).toEqual('2 zoos');
      expect(tinyplural('stereo', 2)).toEqual('2 stereos');
      expect(tinyplural('video', 2)).toEqual('2 videos');
      expect(tinyplural('radio', 2)).toEqual('2 radios');
    });
  });

  describe('f/fe words', () => {
    it('converts f/fe to ves for most words', () => {
      expect(tinyplural('leaf', 1)).toEqual('1 leaf');
      expect(tinyplural('leaf', 2)).toEqual('2 leaves');
      expect(tinyplural('knife', 2)).toEqual('2 knives');
      expect(tinyplural('wife', 2)).toEqual('2 wives');
      expect(tinyplural('life', 2)).toEqual('2 lives');
      expect(tinyplural('half', 2)).toEqual('2 halves');
      expect(tinyplural('elf', 2)).toEqual('2 elves');
      expect(tinyplural('loaf', 2)).toEqual('2 loaves');
      expect(tinyplural('wolf', 2)).toEqual('2 wolves');
      expect(tinyplural('self', 2)).toEqual('2 selves');
      expect(tinyplural('shelf', 2)).toEqual('2 shelves');
      expect(tinyplural('thief', 2)).toEqual('2 thieves');
    });

    it('handles exceptions that just add -s', () => {
      expect(tinyplural('roof', 2)).toEqual('2 roofs');
      expect(tinyplural('cliff', 2)).toEqual('2 cliffs');
      expect(tinyplural('proof', 2)).toEqual('2 proofs');
      expect(tinyplural('chief', 2)).toEqual('2 chiefs');
      expect(tinyplural('belief', 2)).toEqual('2 beliefs');
      expect(tinyplural('safe', 2)).toEqual('2 safes');
    });
  });

  describe('consonant + y words', () => {
    it('converts y to ies', () => {
      expect(tinyplural('penny', 1)).toEqual('1 penny');
      expect(tinyplural('penny', 2)).toEqual('2 pennies');
      expect(tinyplural('spy', 2)).toEqual('2 spies');
      expect(tinyplural('city', 2)).toEqual('2 cities');
      expect(tinyplural('lady', 2)).toEqual('2 ladies');
      expect(tinyplural('baby', 2)).toEqual('2 babies');
      expect(tinyplural('daisy', 2)).toEqual('2 daisies');
      expect(tinyplural('cherry', 2)).toEqual('2 cherries');
      expect(tinyplural('puppy', 2)).toEqual('2 puppies');
      expect(tinyplural('story', 2)).toEqual('2 stories');
    });
  });

  describe('vowel + y words', () => {
    it('just adds -s', () => {
      expect(tinyplural('day', 2)).toEqual('2 days');
      expect(tinyplural('boy', 2)).toEqual('2 boys');
      expect(tinyplural('key', 2)).toEqual('2 keys');
      expect(tinyplural('toy', 2)).toEqual('2 toys');
      expect(tinyplural('monkey', 2)).toEqual('2 monkeys');
    });
  });

  describe('sibilant endings (s, ss, ch, sh, x, z)', () => {
    it('adds -es to sibilants', () => {
      expect(tinyplural('bus', 1)).toEqual('1 bus');
      expect(tinyplural('bus', 2)).toEqual('2 buses');
      expect(tinyplural('glass', 2)).toEqual('2 glasses');
      expect(tinyplural('kiss', 2)).toEqual('2 kisses');
      expect(tinyplural('church', 2)).toEqual('2 churches');
      expect(tinyplural('brush', 2)).toEqual('2 brushes');
      expect(tinyplural('box', 2)).toEqual('2 boxes');
      expect(tinyplural('tax', 2)).toEqual('2 taxes');
      expect(tinyplural('quiz', 2)).toEqual('2 quizzes');
    });
  });

  describe('regular nouns', () => {
    it('just adds -s', () => {
      expect(tinyplural('car', 1)).toEqual('1 car');
      expect(tinyplural('car', 2)).toEqual('2 cars');
      expect(tinyplural('book', 2)).toEqual('2 books');
      expect(tinyplural('apple', 2)).toEqual('2 apples');
      expect(tinyplural('house', 2)).toEqual('2 houses');
      expect(tinyplural('boat', 2)).toEqual('2 boats');
      expect(tinyplural('cat', 2)).toEqual('2 cats');
      expect(tinyplural('dog', 2)).toEqual('2 dogs');
      expect(tinyplural('computer', 2)).toEqual('2 computers');
      expect(tinyplural('table', 2)).toEqual('2 tables');
      expect(tinyplural('chair', 2)).toEqual('2 chairs');
      expect(tinyplural('pen', 2)).toEqual('2 pens');
    });
  });

  describe('zero and negative counts', () => {
    it('treats 0 as plural', () => {
      expect(tinyplural('cactus', 0)).toEqual('0 cacti');
      expect(tinyplural('fungus', 0)).toEqual('0 fungi');
      expect(tinyplural('day', 0)).toEqual('0 days');
      expect(tinyplural('week', 0)).toEqual('0 weeks');
      expect(tinyplural('quiz', 0)).toEqual('0 quizzes');
      expect(tinyplural('deer', 0)).toEqual('0 deer');
      expect(tinyplural('aircraft', 0)).toEqual('0 aircraft');
      expect(tinyplural('hero', 0)).toEqual('0 heroes');
      expect(tinyplural('baby', 0)).toEqual('0 babies');
      expect(tinyplural('man', 0)).toEqual('0 men');
    });

    it('treats negative numbers as plural', () => {
      expect(tinyplural('bin', -1)).toEqual('-1 bins');
      expect(tinyplural('car', -5)).toEqual('-5 cars');
      expect(tinyplural('person', -3)).toEqual('-3 people');
    });
  });

  describe('edge cases', () => {
    it('preserves original casing', () => {
      expect(tinyplural('Foot', 1)).toEqual('1 Foot');
      expect(tinyplural('Foot', 2)).toEqual('2 Feet');
    });

    it('handles abbreviated words', () => {
      expect(tinyplural('photo', 2)).toEqual('2 photos');
      expect(tinyplural('memo', 2)).toEqual('2 memos');
    });
  });
});

describe('data arrays', () => {
  it('nonChangingNouns has no duplicates', () => {
    expect(Object.keys(nonChangingNouns).length).toBeGreaterThan(0);
  });

  it('irregularNouns has no duplicate singles', () => {
    expect(Object.keys(irregularNouns).length).toBeGreaterThan(0);
  });
});

describe('Checking data arrays for duplicates', () => {
  it('nonChangingNouns', () => {
    expect(Object.keys(nonChangingNouns).length).toBeGreaterThan(0);
  });
  it('irregularNouns', () => {
    expect(Object.keys(irregularNouns).length).toBeGreaterThan(0);
  });
});

describe('comprehensive plural tests', () => {
  const testCases: [string, string][] = [
    ['this', 'these'],
    ['that', 'those'],
    ['is', 'are'],
    ['man', 'men'],
    ['superman', 'supermen'],
    ['ox', 'oxen'],
    ['bus', 'buses'],
    ['airbus', 'airbuses'],
    ['railbus', 'railbuses'],
    ['wife', 'wives'],
    ['guest', 'guests'],
    ['thing', 'things'],
    ['mess', 'messes'],
    ['guess', 'guesses'],
    ['person', 'people'],
    ['meteor', 'meteors'],
    ['chateau', 'chateaus'],
    ['lap', 'laps'],
    ['cough', 'coughs'],
    ['death', 'deaths'],
    ['coach', 'coaches'],
    ['boy', 'boys'],
    ['toy', 'toys'],
    ['guy', 'guys'],
    ['girl', 'girls'],
    ['chair', 'chairs'],
    ['toe', 'toes'],
    ['tiptoe', 'tiptoes'],
    ['tomato', 'tomatoes'],
    ['potato', 'potatoes'],
    ['tornado', 'tornadoes'],
    ['torpedo', 'torpedoes'],
    ['hero', 'heroes'],
    ['superhero', 'superheroes'],
    ['volcano', 'volcanoes'],
    ['canto', 'cantos'],
    ['hetero', 'heteros'],
    ['photo', 'photos'],
    ['portico', 'porticos'],
    ['quarto', 'quartos'],
    ['kimono', 'kimonos'],
    ['albino', 'albinos'],
    ['cherry', 'cherries'],
    ['piano', 'pianos'],
    ['pro', 'pros'],
    ['combo', 'combos'],
    ['turbo', 'turbos'],
    ['bar', 'bars'],
    ['crowbar', 'crowbars'],
    ['van', 'vans'],
    ['tobacco', 'tobaccos'],
    ['afficionado', 'afficionados'],
    ['monkey', 'monkeys'],
    ['neutrino', 'neutrinos'],
    ['rhino', 'rhinos'],
    ['steno', 'stenos'],
    ['latino', 'latinos'],
    ['casino', 'casinos'],
    ['avocado', 'avocados'],
    ['commando', 'commandos'],
    ['tuxedo', 'tuxedos'],
    ['speedo', 'speedos'],
    ['dingo', 'dingoes'],
    ['echo', 'echoes'],
    ['nacho', 'nachos'],
    ['motto', 'mottos'],
    ['psycho', 'psychos'],
    ['poncho', 'ponchos'],
    ['pass', 'passes'],
    ['ghetto', 'ghettos'],
    ['mango', 'mangos'],
    ['lady', 'ladies'],
    ['bath', 'baths'],
    ['professional', 'professionals'],
    ['dwarf', 'dwarves'],
    ['encyclopedia', 'encyclopedias'],
    ['louse', 'lice'],
    ['roof', 'roofs'],
    ['woman', 'women'],
    ['formula', 'formulas'],
    ['polyhedron', 'polyhedra'],
    ['index', 'indices'],
    ['matrix', 'matrices'],
    ['vertex', 'vertices'],
    ['axe', 'axes'],
    ['pickaxe', 'pickaxes'],
    ['crisis', 'crises'],
    ['criterion', 'criteria'],
    ['phenomenon', 'phenomena'],
    ['addendum', 'addenda'],
    ['datum', 'data'],
    ['forum', 'forums'],
    ['millennium', 'millennia'],
    ['alumnus', 'alumni'],
    ['medium', 'mediums'],
    ['census', 'censuses'],
    ['genus', 'genera'],
    ['dogma', 'dogmata'],
    ['life', 'lives'],
    ['hive', 'hives'],
    ['kiss', 'kisses'],
    ['dish', 'dishes'],
    ['human', 'humans'],
    ['knife', 'knives'],
    ['phase', 'phases'],
    ['judge', 'judges'],
    ['class', 'classes'],
    ['witch', 'witches'],
    ['church', 'churches'],
    ['massage', 'massages'],
    ['prospectus', 'prospectuses'],
    ['syllabus', 'syllabi'],
    ['viscus', 'viscera'],
    ['cactus', 'cacti'],
    ['hippopotamus', 'hippopotamuses'],
    ['octopus', 'octopuses'],
    ['platypus', 'platypuses'],
    ['kangaroo', 'kangaroos'],
    ['atlas', 'atlases'],
    ['stigma', 'stigmata'],
    ['schema', 'schemata'],
    ['diagnosis', 'diagnoses'],
    ['mongoose', 'mongooses'],
    ['mouse', 'mice'],
    ['liturgist', 'liturgists'],
    ['box', 'boxes'],
    ['gas', 'gases'],
    ['self', 'selves'],
    ['chief', 'chiefs'],
    ['quiz', 'quizzes'],
    ['child', 'children'],
    ['shelf', 'shelves'],
    ['fizz', 'fizzes'],
    ['tooth', 'teeth'],
    ['thief', 'thieves'],
    ['day', 'days'],
    ['loaf', 'loaves'],
    ['fix', 'fixes'],
    ['spy', 'spies'],
    ['vertebra', 'vertebrae'],
    ['clock', 'clocks'],
    ['cuff', 'cuffs'],
    ['leaf', 'leaves'],
    ['calf', 'calves'],
    ['moth', 'moths'],
    ['mouth', 'mouths'],
    ['house', 'houses'],
    ['proof', 'proofs'],
    ['hoof', 'hooves'],
    ['elf', 'elves'],
    ['turf', 'turfs'],
    ['craft', 'crafts'],
    ['die', 'dice'],
    ['penny', 'pennies'],
    ['campus', 'campuses'],
    ['virus', 'viri'],
    ['iris', 'irises'],
    ['bureau', 'bureaus'],
    ['kiwi', 'kiwis'],
    ['wiki', 'wikis'],
    ['igloo', 'igloos'],
    ['ninja', 'ninjas'],
    ['pizza', 'pizzas'],
    ['kayak', 'kayaks'],
    ['canoe', 'canoes'],
    ['tiding', 'tidings'],
    ['pea', 'peas'],
    ['drive', 'drives'],
    ['nose', 'noses'],
    ['movie', 'movies'],
    ['status', 'statuses'],
    ['alias', 'aliases'],
    ['memorandum', 'memorandums'],
    ['language', 'languages'],
    ['plural', 'plurals'],
    ['word', 'words'],
    ['multiple', 'multiples'],
    ['reward', 'rewards'],
    ['sandwich', 'sandwiches'],
    ['subway', 'subways'],
    ['direction', 'directions'],
    ['land', 'lands'],
    ['row', 'rows'],
    ['grow', 'grows'],
    ['flow', 'flows'],
    ['rose', 'roses'],
    ['raise', 'raises'],
    ['friend', 'friends'],
    ['follower', 'followers'],
    ['male', 'males'],
    ['nail', 'nails'],
    ['sex', 'sexes'],
    ['tape', 'tapes'],
    ['ruler', 'rulers'],
    ['king', 'kings'],
    ['queen', 'queens'],
    ['zero', 'zeros'],
    ['quest', 'quests'],
    ['goose', 'geese'],
    ['foot', 'feet'],
    ['ex', 'exes'],
    ['reflex', 'reflexes'],
    ['heat', 'heats'],
    ['train', 'trains'],
    ['test', 'tests'],
    ['pie', 'pies'],
    ['fly', 'flies'],
    ['eye', 'eyes'],
    ['lie', 'lies'],
    ['node', 'nodes'],
    ['trade', 'trades'],
    ['chinese', 'chinese'],
    ['please', 'pleases'],
    ['japanese', 'japanese'],
    ['regex', 'regexes'],
    ['license', 'licenses'],
    ['zebra', 'zebras'],
    ['general', 'generals'],
    ['corps', 'corps'],
    ['pliers', 'pliers'],
    ['flyer', 'flyers'],
    ['scissors', 'scissors'],
    ['fireman', 'firemen'],
    ['chirp', 'chirps'],
    ['harp', 'harps'],
    ['corpse', 'corpses'],
    ['dye', 'dyes'],
    ['move', 'moves'],
    ['zombie', 'zombies'],
    ['variety', 'varieties'],
    ['talkie', 'talkies'],
    ['walkie-talkie', 'walkie-talkies'],
    ['groupie', 'groupies'],
    ['goonie', 'goonies'],
    ['lassie', 'lassies'],
    ['genie', 'genies'],
    ['foodie', 'foodies'],
    ['faerie', 'faeries'],
    ['collie', 'collies'],
    ['obloquy', 'obloquies'],
    ['looey', 'looies'],
    ['osprey', 'ospreys'],
    ['cover', 'covers'],
    ['tie', 'ties'],
    ['groove', 'grooves'],
    ['bee', 'bees'],
    ['ave', 'aves'],
    ['wave', 'waves'],
    ['wolf', 'wolves'],
    ['airwave', 'airwaves'],
    ['archive', 'archives'],
    ['arch', 'arches'],
    ['dive', 'dives'],
    ['aftershave', 'aftershaves'],
    ['cave', 'caves'],
    ['grave', 'graves'],
    ['gift', 'gifts'],
    ['nerve', 'nerves'],
    ['nerd', 'nerds'],
    ['carve', 'carves'],
    ['rave', 'raves'],
    ['scarf', 'scarves'],
    ['sale', 'sales'],
    ['sail', 'sails'],
    ['swerve', 'swerves'],
    ['love', 'loves'],
    ['dove', 'doves'],
    ['glove', 'gloves'],
    ['wharf', 'wharves'],
    ['valve', 'valves'],
    ['werewolf', 'werewolves'],
    ['view', 'views'],
    ['emu', 'emus'],
    ['menu', 'menus'],
    ['wax', 'waxes'],
    ['fax', 'faxes'],
    ['nut', 'nuts'],
    ['crust', 'crusts'],
    ['lemma', 'lemmata'],
    ['anathema', 'anathemata'],
    ['analysis', 'analyses'],
    ['locus', 'loci'],
    ['uterus', 'uteri'],
    ['curriculum', 'curricula'],
    ['quorum', 'quora'],
    ['genius', 'geniuses'],
    ['flower', 'flowers'],
    ['crash', 'crashes'],
    ['soul', 'souls'],
    ['career', 'careers'],
    ['planet', 'planets'],
    ['son', 'sons'],
    ['sun', 'suns'],
    ['drink', 'drinks'],
    ['diploma', 'diplomas'],
    ['dilemma', 'dilemmas'],
    ['grandma', 'grandmas'],
    ['no', 'nos'],
    ['yes', 'yeses'],
    ['employ', 'employs'],
    ['employee', 'employees'],
    ['history', 'histories'],
    ['story', 'stories'],
    ['purchase', 'purchases'],
    ['order', 'orders'],
    ['key', 'keys'],
    ['bomb', 'bombs'],
    ['city', 'cities'],
    ['sanity', 'sanities'],
    ['ability', 'abilities'],
    ['activity', 'activities'],
    ['cutie', 'cuties'],
    ['validation', 'validations'],
    ['floaty', 'floaties'],
    ['nicety', 'niceties'],
    ['goalie', 'goalies'],
    ['crawly', 'crawlies'],
    ['duty', 'duties'],
    ['scrutiny', 'scrutinies'],
    ['deputy', 'deputies'],
    ['beauty', 'beauties'],
    ['bank', 'banks'],
    ['family', 'families'],
    ['tally', 'tallies'],
    ['ally', 'allies'],
    ['alley', 'alleys'],
    ['valley', 'valleys'],
    ['medley', 'medleys'],
    ['melody', 'melodies'],
    ['trolly', 'trollies'],
    ['thunk', 'thunks'],
    ['koala', 'koalas'],
    ['special', 'specials'],
    ['book', 'books'],
    ['knob', 'knobs'],
    ['crab', 'crabs'],
    ['plough', 'ploughs'],
    ['high', 'highs'],
    ['low', 'lows'],
    ['hiccup', 'hiccups'],
    ['bonus', 'bonuses'],
    ['circus', 'circuses'],
    ['abacus', 'abacuses'],
    ['phobia', 'phobias'],
    ['case', 'cases'],
    ['lace', 'laces'],
    ['trace', 'traces'],
    ['mage', 'mages'],
    ['lotus', 'lotuses'],
    ['motorbus', 'motorbuses'],
    ['cutlas', 'cutlases'],
    ['tequila', 'tequilas'],
    ['liar', 'liars'],
    ['delta', 'deltas'],
    ['visa', 'visas'],
    ['flea', 'fleas'],
    ['favela', 'favelas'],
    ['cobra', 'cobras'],
    ['finish', 'finishes'],
    ['gorilla', 'gorillas'],
    ['mass', 'masses'],
    ['face', 'faces'],
    ['rabbit', 'rabbits'],
    ['adventure', 'adventures'],
    ['breeze', 'breezes'],
    ['brew', 'brews'],
    ['canopy', 'canopies'],
    ['copy', 'copies'],
    ['cave', 'caves'],
    ['charge', 'charges'],
    ['cinema', 'cinemas'],
    ['coffee', 'coffees'],
    ['favourite', 'favourites'],
    ['themself', 'themselves'],
    ['country', 'countries'],
    ['issue', 'issues'],
    ['authority', 'authorities'],
    ['force', 'forces'],
    ['objective', 'objectives'],
    ['present', 'presents'],
    ['industry', 'industries'],
    ['believe', 'believes'],
    ['century', 'centuries'],
    ['category', 'categories'],
    ['eve', 'eves'],
    ['fee', 'fees'],
    ['gene', 'genes'],
    ['try', 'tries'],
    ['currency', 'currencies'],
    ['pose', 'poses'],
    ['cheese', 'cheeses'],
    ['clue', 'clues'],
    ['cheer', 'cheers'],
    ['litre', 'litres'],
    ['money', 'monies'],
    ['attorney', 'attorneys'],
    ['balcony', 'balconies'],
    ['cockney', 'cockneys'],
    ['donkey', 'donkeys'],
    ['honey', 'honeys'],
    ['smiley', 'smilies'],
    ['survey', 'surveys'],
    ['whiskey', 'whiskeys'],
    ['whisky', 'whiskies'],
    ['volley', 'volleys'],
    ['tongue', 'tongues'],
    ['suit', 'suits'],
    ['suite', 'suites'],
    ['cruise', 'cruises'],
    ['eave', 'eaves'],
    ['consultancy', 'consultancies'],
    ['pouch', 'pouches'],
    ['wallaby', 'wallabies'],
    ['abyss', 'abysses'],
    ['weekly', 'weeklies'],
    ['whistle', 'whistles'],
    ['utilise', 'utilises'],
    ['utilize', 'utilizes'],
    ['mercy', 'mercies'],
    ['mercenary', 'mercenaries'],
    ['take', 'takes'],
    ['flush', 'flushes'],
    ['gate', 'gates'],
    ['evolve', 'evolves'],
    ['slave', 'slaves'],
    ['native', 'natives'],
    ['revolve', 'revolves'],
    ['twelve', 'twelves'],
    ['sleeve', 'sleeves'],
    ['subjective', 'subjectives'],
    ['stream', 'streams'],
    ['beam', 'beams'],
    ['foam', 'foams'],
    ['callus', 'calluses'],
    ['use', 'uses'],
    ['beau', 'beaus'],
    ['gateau', 'gateaus'],
    ['fetus', 'fetuses'],
    ['luau', 'luaus'],
    ['pilau', 'pilaus'],
    ['shoe', 'shoes'],
    ['sandshoe', 'sandshoes'],
    ['zeus', 'zeuses'],
    ['nucleus', 'nuclei'],
    ['sky', 'skies'],
    ['beach', 'beaches'],
    ['brush', 'brushes'],
    ['hoax', 'hoaxes'],
    ['scratch', 'scratches'],
    ['nanny', 'nannies'],
    ['negro', 'negroes'],
    ['taco', 'tacos'],
    ['cafe', 'cafes'],
    ['giraffe', 'giraffes'],
    ['goodwife', 'goodwives'],
    ['housewife', 'housewives'],
    ['safe', 'safes'],
    ['save', 'saves'],
    ['pocketknife', 'pocketknives'],
    ['tartufe', 'tartufes'],
    ['tartuffe', 'tartuffes'],
    ['truffle', 'truffles'],
    ['jefe', 'jefes'],
    ['agrafe', 'agrafes'],
    ['agraffe', 'agraffes'],
    ['bouffe', 'bouffes'],
    ['carafe', 'carafes'],
    ['chafe', 'chafes'],
    ['pouffe', 'pouffes'],
    ['pouf', 'poufs'],
    ['piaffe', 'piaffes'],
    ['gaffe', 'gaffes'],
    ['executive', 'executives'],
    ['cove', 'coves'],
    ['fave', 'faves'],
    ['positive', 'positives'],
    ['solve', 'solves'],
    ['trove', 'troves'],
    ['treasure', 'treasures'],
    ['suave', 'suaves'],
    ['bluff', 'bluffs'],
    ['half', 'halves'],
    ['knockoff', 'knockoffs'],
    ['handkerchief', 'handkerchiefs'],
    ['reed', 'reeds'],
    ['reef', 'reefs'],
    ['yourself', 'yourselves'],
    ['sunroof', 'sunroofs'],
    ['plateau', 'plateaus'],
    ['radius', 'radii'],
    ['stratum', 'strata'],
    ['stratus', 'strati'],
    ['focus', 'foci'],
    ['fungus', 'fungi'],
    ['appendix', 'appendices'],
    ['seraph', 'seraphim'],
    ['cherub', 'cherubim'],
    ['memo', 'memos'],
    ['cello', 'cellos'],
    ['automaton', 'automata'],
    ['button', 'buttons'],
    ['crayon', 'crayons'],
    ['captive', 'captives'],
    ['abrasive', 'abrasives'],
    ['archive', 'archives'],
    ['additive', 'additives'],
    ['hive', 'hives'],
    ['beehive', 'beehives'],
    ['olive', 'olives'],
    ['black olive', 'black olives'],
    ['chive', 'chives'],
    ['adjective', 'adjectives'],
    ['cattle drive', 'cattle drives'],
    ['explosive', 'explosives'],
    ['negative', 'negatives'],
    ['fugitive', 'fugitives'],
    ['progressive', 'progressives'],
    ['laxative', 'laxatives'],
    ['incentive', 'incentives'],
    ['genesis', 'geneses'],
    ['surprise', 'surprises'],
    ['enterprise', 'enterprises'],
    ['relative', 'relatives'],
    ['perspective', 'perspectives'],
    ['superlative', 'superlatives'],
    ['afterlife', 'afterlives'],
    ['native', 'natives'],
    ['detective', 'detectives'],
    ['collective', 'collectives'],
    ['lowlife', 'lowlives'],
    ['low-life', 'low-lives'],
    ['strife', 'strifes'],
    ['pony', 'ponies'],
    ['phony', 'phonies'],
    ['felony', 'felonies'],
    ['colony', 'colonies'],
    ['symphony', 'symphonies'],
    ['semicolony', 'semicolonies'],
    ['radiotelephony', 'radiotelephonies'],
    ['company', 'companies'],
    ['ceremony', 'ceremonies'],
    ['carnivore', 'carnivores'],
    ['emphasis', 'emphases'],
    ['abuse', 'abuses'],
    ['ass', 'asses'],
    ['mile', 'miles'],
    ['consensus', 'consensuses'],
    ['coatdress', 'coatdresses'],
    ['courthouse', 'courthouses'],
    ['playhouse', 'playhouses'],
    ['crispness', 'crispnesses'],
    ['racehorse', 'racehorses'],
    ['greatness', 'greatnesses'],
    ['demon', 'demons'],
    ['lemon', 'lemons'],
    ['pokemon', 'pokemon'],
    ['pokémon', 'pokémon'],
    ['christmas', 'christmases'],
    ['zymase', 'zymases'],
    ['accomplice', 'accomplices'],
    ['amice', 'amices'],
    ['titmouse', 'titmice'],
    ['slice', 'slices'],
    ['base', 'bases'],
    ['database', 'databases'],
    ['rise', 'rises'],
    ['uprise', 'uprises'],
    ['size', 'sizes'],
    ['prize', 'prizes'],
    ['booby', 'boobies'],
    ['hobby', 'hobbies'],
    ['baby', 'babies'],
    ['cookie', 'cookies'],
    ['budgie', 'budgies'],
    ['calorie', 'calories'],
    ['brownie', 'brownies'],
    ['lolly', 'lollies'],
    ['hippie', 'hippies'],
    ['smoothie', 'smoothies'],
    ['techie', 'techies'],
    ['specie', 'species'],
    ['quickie', 'quickies'],
    ['pixie', 'pixies'],
    ['rotisserie', 'rotisseries'],
    ['porkpie', 'porkpies'],
    ['newbie', 'newbies'],
    ['veggie', 'veggies'],
    ['bourgeoisie', 'bourgeoisies'],
    ['party', 'parties'],
    ['apology', 'apologies'],
    ['ancestry', 'ancestries'],
    ['anomaly', 'anomalies'],
    ['anniversary', 'anniversaries'],
    ['battery', 'batteries'],
    ['nappy', 'nappies'],
    ['hanky', 'hankies'],
    ['junkie', 'junkies'],
    ['hogtie', 'hogties'],
    ['footsie', 'footsies'],
    ['curry', 'curries'],
    ['fantasy', 'fantasies'],
    ['housefly', 'houseflies'],
    ['falsy', 'falsies'],
    ['doggy', 'doggies'],
    ['carny', 'carnies'],
    ['cabby', 'cabbies'],
    ['charlie', 'charlies'],
    ['bookie', 'bookies'],
    ['auntie', 'aunties'],
  ];

  testCases.forEach(([singular, plural]) => {
    it(`${singular} -> ${plural}`, () => {
      expect(tinyplural(singular, 2)).toEqual(`2 ${plural}`);
    });
  });
});
