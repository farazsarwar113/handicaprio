/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

//var Thing = require('../api/thing/thing.model');
var Dictionary = require('../models/dictionary.model');

Dictionary.find({}).remove()
  .then(() => {
    Dictionary.create({
      word: 'aboard',
      type: 'adverb'
    }, {
      word: 'abnormally',
      type: 'adverb'
    }, {
      word: 'about',
      type: 'adverb'
    }, {
      word: 'abroad',
      type: 'adverb'
    }, {
      word: 'absentmindedly',
      type: 'adverb'
    }, {
      word: 'absolutely',
      type: 'adverb'
    }, {
		word: 'abundantly',
		type: 'adverb'
	}, {
		word: 'accidentally',
		type: 'adverb'
	}, {
		word: 'accordingly',
		type: 'adverb'
	}, {
		word: 'actively',
		type: 'adverb'
	}, {
		word: 'acutely',
		type: 'adverb'
	}, {
		word: 'admiringly',
		type: 'adverb'
	}, {
		word: 'affectionately',
		type: 'adverb'
	}, {
		word: 'affirmatively',
		type: 'adverb'
	}, {
		word: 'after',
		type: 'adverb'
	}, {
		word: 'afterwards',
		type: 'adverb'
	}, {
		word: 'agreeably',
		type: 'adverb'
	}, {
		word: 'almost',
		type: 'adverb'
	}, {
		word: 'already',
		type: 'adverb'
	}, {
		word: 'always',
		type: 'adverb'
	}, {
		word: 'amazingly',
		type: 'adverb'
	}, {
		word: 'angrily',
		type: 'adverb'
	}, {
		word: 'annoyingly',
		type: 'adverb'
	}, {
		word: 'annually',
		type: 'adverb'
	}, {
		word: 'anxiously',
		type: 'adverb'
	}, {
		word: 'anyhow',
		type: 'adverb'
	}, {
		word: 'anyplace',
		type: 'adverb'
	}, {
		word: 'anywhere',
		type: 'adverb'
	}, {
		word: 'anyway',
		type: 'adverb'
	}, {
		word: 'appreciably',
		type: 'adverb'
	}, {
		word: 'appropriately',
		type: 'adverb'
	}, {
		word: 'around',
		type: 'adverb'
	}, {
		word: 'arrogantly',
		type: 'adverb'
	}, {
		word: 'aside',
		type: 'adverb'
	}, {
		word: 'assuredly',
		type: 'adverb'
	}, {
		word: 'astonishingly',
		type: 'adverb'
	}, {
		word: 'away',
		type: 'adverb'
	}, {
		word: 'awfully',
		type: 'adverb'
	}, {
		word: 'awkwardly',
		type: 'adverb'
	}, {
		word: 'badly',
		type: 'adverb'
	}, {
		word: 'barely',
		type: 'adverb'
	}, {
		word: 'bashfully',
		type: 'adverb'
	}, {
		word: 'beautifully',
		type: 'adverb'
	}, {
		word: 'before',
		type: 'adverb'
	}, {
		word: 'begrudgingly',
		type: 'adverb'
	}, {
		word: 'belivably',
		type: 'adverb'
	}, {
		word: 'bewilderedly',
		type: 'adverb'
	}, {
		word: 'bewilderingly',
		type: 'adverb'
	}, {
		word: 'bitterly',
		type: 'adverb'
	}, {
		word: 'bleakly',
		type: 'adverb'
	}, {
		word: 'blindly',
		type: 'adverb'
	}, {
		word: 'blissfully',
		type: 'adverb'
	}, {
		word: 'boldly',
		type: 'adverb'
	}, {
		word: 'boastfully',
		type: 'adverb'
	}, {
		word: 'boldly',
		type: 'adverb'
	}, {
		word: 'boyishly',
		type: 'adverb'
	}, {
		word: 'bravely',
		type: 'adverb'
	}, {
		word: 'briefly',
		type: 'adverb'
	}, {
		word: 'brightly',
		type: 'adverb'
	}, {
		word: 'busily',
		type: 'adverb'
	}, {
		word: 'brutally',
		type: 'adverb'
	}, {
		word: 'briskly',
		type: 'adverb'
	}, {
		word: 'brilliantly',
		type: 'adverb'
	}, {
		word: 'calmly',
		type: 'adverb'
	}, {
		word: 'candidly',
		type: 'adverb'
	}, {
		word: 'carefully',
		type: 'adverb'
	}, {
		word: 'carelessly',
		type: 'adverb'
	}, {
		word: 'casually',
		type: 'adverb'
	}, {
		word: 'cautiously',
		type: 'adverb'
	}, {
		word: 'certainly',
		type: 'adverb'
	}, {
		word: 'charmingly',
		type: 'adverb'
	}, {
		word: 'cheerfully',
		type: 'adverb'
	}, {
		word: 'chiefly',
		type: 'adverb'
	}, {
		word: 'childishly',
		type: 'adverb'
	}, {
		word: 'cleanly',
		type: 'adverb'
	}, {
		word: 'clearly',
		type: 'adverb'
	}, {
		word: 'cleverly',
		type: 'adverb'
	}, {
		word: 'closely',
		type: 'adverb'
	}, {
		word: 'cloudily',
		type: 'adverb'
	}, {
		word: 'clumsily',
		type: 'adverb'
	}, {
		word: 'coaxingly',
		type: 'adverb'
	}, {
		word: 'coincidentally',
		type: 'adverb'
	}, {
		word: 'coldly',
		type: 'adverb'
	}, {
		word: 'colorfully',
		type: 'adverb'
	}, {
		word: 'commonly',
		type: 'adverb'
	}, {
		word: 'comfortably',
		type: 'adverb'
	}, {
		word: 'compactly',
		type: 'adverb'
	}, {
		word: 'compassionately',
		type: 'adverb'
	}, {
		word: 'completely',
		type: 'adverb'
	}, {
		word: 'confusedly',
		type: 'adverb'
	}, {
		word: 'consequently',
		type: 'adverb'
	}, {
		word: 'considerably',
		type: 'adverb'
	}, {
		word: 'considerately',
		type: 'adverb'
	}, {
		word: 'consistently',
		type: 'adverb'
	}, {
		word: 'constantly',
		type: 'adverb'
	}, {
		word: 'continually',
		type: 'adverb'
	}, {
		word: 'continuously',
		type: 'adverb'
	}, {
		word: 'coolly',
		type: 'adverb'
	}, {
		word: 'cutely',
		type: 'adverb'
	}, {
		word: 'customarily',
		type: 'adverb'
	}, {
		word: 'currently',
		type: 'adverb'
	}, {
		word: 'curiously',
		type: 'adverb'
	}, {
		word: 'cunningly',
		type: 'adverb'
	}, {
		word: 'correctly',
		type: 'adverb'
	}, {
		word: 'courageously',
		type: 'adverb'
	}, {
		word: 'cruelly',
		type: 'adverb'
	}, {
		word: 'crossly',
		type: 'adverb'
	}, {
		word: 'crazily',
		type: 'adverb'
	}, {
		word: 'covertly',
		type: 'adverb'
	}, {
		word: 'cowardly',
		type: 'adverb'
	}, {
		word: 'daily',
		type: 'adverb'
	}, {
		word: 'daintily',
		type: 'adverb'
	}, {
		word: 'dangerously',
		type: 'adverb'
	}, {
		word: 'daringly',
		type: 'adverb'
	}, {
		word: 'darkly',
		type: 'adverb'
	}, {
		word: 'dastardly',
		type: 'adverb'
	}, {
		word: 'dearly',
		type: 'adverb'
	}, {
		word: 'decently',
		type: 'adverb'
	}, {
		word: 'deeply',
		type: 'adverb'
	}, {
		word: 'defiantly',
		type: 'adverb'
	}, {
		word: 'deftly',
		type: 'adverb'
	}, {
		word: 'deliberately',
		type: 'adverb'
	}, {
		word: 'delicately',
		type: 'adverb'
	}, {
		word: 'delightfully',
		type: 'adverb'
	}, {
		word: 'densely',
		type: 'adverb'
	}, {
		word: 'diagonally',
		type: 'adverb'
	}, {
		word: 'differently',
		type: 'adverb'
	}, {
		word: 'diligently',
		type: 'adverb'
	}, {
		word: 'directly',
		type: 'adverb'
	}, {
		word: 'disorderly',
		type: 'adverb'
	}, {
		word: 'divisively',
		type: 'adverb'
	}, {
		word: 'docilely',
		type: 'adverb'
	}, {
		word: 'dopily',
		type: 'adverb'
	}, {
		word: 'doubtfully',
		type: 'adverb'
	}, {
		word: 'down',
		type: 'adverb'
	}, {
		word: 'dramatically',
		type: 'adverb'
	}, {
		word: 'dreamily',
		type: 'adverb'
	}, {
		word: 'during',
		type: 'adverb'
	}, {
		word: 'eagerly',
		type: 'adverb'
	}, {
		word: 'early',
		type: 'adverb'
	}, {
		word: 'earnestly',
		type: 'adverb'
	}, {
		word: 'easily',
		type: 'adverb'
	}, {
		word: 'efficiently',
		type: 'adverb'
	}, {
		word: 'effortlessly',
		type: 'adverb'
	}, {
		word: 'elaborately',
		type: 'adverb'
	}, {
		word: 'eloquently',
		type: 'adverb'
	}, {
		word: 'elegantly',
		type: 'adverb'
	}, {
		word: 'elsewhere',
		type: 'adverb'
	}, {
		word: 'emotionally',
		type: 'adverb'
	}, {
		word: 'endlessly',
		type: 'adverb'
	}, {
		word: 'energetically',
		type: 'adverb'
	}, {
		word: 'enjoyably',
		type: 'adverb'
	}, {
		word: 'enormously',
		type: 'adverb'
	}, {
		word: 'enough',
		type: 'adverb'
	}, {
		word: 'enthusiastically',
		type: 'adverb'
	}, {
		word: 'entirely',
		type: 'adverb'
	}, {
		word: 'equally',
		type: 'adverb'
	}, {
		word: 'especially',
		type: 'adverb'
	}, {
		word: 'essentially',
		type: 'adverb'
	}, {
		word: 'eternally',
		type: 'adverb'
	}, {
		word: 'ethically',
		type: 'adverb'
	}, {
		word: 'even',
		type: 'adverb'
	}, {
		word: 'evenly',
		type: 'adverb'
	}, {
		word: 'eventually',
		type: 'adverb'
	}, {
		word: 'evermore',
		type: 'adverb'
	}, {
		word: 'every',
		type: 'adverb'
	}, {
		word: 'everywhere',
		type: 'adverb'
	}, {
		word: 'evidently',
		type: 'adverb'
	}, {
		word: 'evocatively',
		type: 'adverb'
	}, {
		word: 'exactly',
		type: 'adverb'
	}, {
		word: 'exceedingly',
		type: 'adverb'
	}, {
		word: 'exceptionally',
		type: 'adverb'
	}, {
		word: 'excitedly',
		type: 'adverb'
	}, {
		word: 'exclusively',
		type: 'adverb'
	}, {
		word: 'explicitly',
		type: 'adverb'
	}, {
		word: 'expressly',
		type: 'adverb'
	}, {
		word: 'extensively',
		type: 'adverb'
	}, {
		word: 'externally',
		type: 'adverb'
	}, {
		word: 'extra',
		type: 'adverb'
	}, {
		word: 'extraordinarily',
		type: 'adverb'
	}, {
		word: 'extremely',
		type: 'adverb'
	}, {
		word: 'fairly',
		type: 'adverb'
	}, {
		word: 'faithfully',
		type: 'adverb'
	}, {
		word: 'famously',
		type: 'adverb'
	}, {
		word: 'far',
		type: 'adverb'
	}, {
		word: 'fashionably',
		type: 'adverb'
	}, {
		word: 'fast',
		type: 'adverb'
	}, {
		word: 'fatally',
		type: 'adverb'
	}, {
		word: 'favorably',
		type: 'adverb'
	}, {
		word: 'ferociously',
		type: 'adverb'
	}, {
		word: 'fervently',
		type: 'adverb'
	}, {
		word: 'fiercely',
		type: 'adverb'
	}, {
		word: 'fiery',
		type: 'adverb'
	}, {
		word: 'finally',
		type: 'adverb'
	}, {
		word: 'financially',
		type: 'adverb'
	}, {
		word: 'finitely',
		type: 'adverb'
	}, {
		word: 'fluently',
		type: 'adverb'
	}, {
		word: 'fondly',
		type: 'adverb'
	}, {
		word: 'foolishly',
		type: 'adverb'
	}, {
		word: 'forever',
		type: 'adverb'
	}, {
		word: 'formally',
		type: 'adverb'
	}, {
		word: 'formerly',
		type: 'adverb'
	}, {
		word: 'fortunately',
		type: 'adverb'
	}, {
		word: 'forward',
		type: 'adverb'
	}, {
		word: 'frankly',
		type: 'adverb'
	}, {
		word: 'frantically',
		type: 'adverb'
	}, {
		word: 'freely',
		type: 'adverb'
	}, {
		word: 'frequently',
		type: 'adverb'
	}, {
		word: 'frenetically',
		type: 'adverb'
	}, {
		word: 'fully',
		type: 'adverb'
	}, {
		word: 'furiously',
		type: 'adverb'
	}, {
		word: 'furthermore',
		type: 'adverb'
	}, {
		word: 'generally',
		type: 'adverb'
	}, {
		word: 'generously',
		type: 'adverb'
	}, {
		word: 'genuinely',
		type: 'adverb'
	}, {
		word: 'gently',
		type: 'adverb'
	}, {
		word: 'girlishly',
		type: 'adverb'
	}, {
		word: 'gladly',
		type: 'adverb'
	}, {
		word: 'gleefully',
		type: 'adverb'
	}, {
		word: 'gracefully',
		type: 'adverb'
	}, {
		word: 'graciously',
		type: 'adverb'
	}, {
		word: 'gradually',
		type: 'adverb'
	}, {
		word: 'gratefully',
		type: 'adverb'
	}, {
		word: 'greatly',
		type: 'adverb'
	}, {
		word: 'greedily',
		type: 'adverb'
	}, {
		word: 'grimly',
		type: 'adverb'
	}, {
		word: 'grudgingly',
		type: 'adverb'
	}, {
		word: 'habitually',
		type: 'adverb'
	}, {
		word: 'half-heartedly',
		type: 'adverb'
	}, {
		word: 'handily',
		type: 'adverb'
	}, {
		word: 'handsomely',
		type: 'adverb'
	}, {
		word: 'haphazardly',
		type: 'adverb'
	}, {
		word: 'happily',
		type: 'adverb'
	}, {
		word: 'hastily',
		type: 'adverb'
	}, {
		word: 'harmoniously',
		type: 'adverb'
	}, {
		word: 'harshly',
		type: 'adverb'
	}, {
		word: 'hastily',
		type: 'adverb'
	}, {
		word: 'hysterically',
		type: 'adverb'
	}, {
		word: 'hurriedly',
		type: 'adverb'
	}, {
		word: 'hungrily',
		type: 'adverb'
	}, {
		word: 'humorously',
		type: 'adverb'
	}, {
		word: 'hugely',
		type: 'adverb'
	}, {
		word: 'however',
		type: 'adverb'
	}, {
		word: 'hourly',
		type: 'adverb'
	}, {
		word: 'horizontally',
		type: 'adverb'
	}, {
		word: 'hopelessly',
		type: 'adverb'
	}, {
		word: 'hatefully',
		type: 'adverb'
	}, {
		word: 'hauntingly',
		type: 'adverb'
	}, {
		word: 'healthily',
		type: 'adverb'
	}, {
		word: 'heartily',
		type: 'adverb'
	}, {
		word: 'honestly',
		type: 'adverb'
	}, {
		word: 'hitherto',
		type: 'adverb'
	}, {
		word: 'highly',
		type: 'adverb'
	}, {
		word: 'hence',
		type: 'adverb'
	}, {
		word: 'helpfully',
		type: 'adverb'
	}, {
		word: 'heavily',
		type: 'adverb'
	}, {
		word: 'icily',
		type: 'adverb'
	}, {
		word: 'irritably',
		type: 'adverb'
	}, {
		word: 'irrefutably',
		type: 'adverb'
	}, {
		word: 'ironically',
		type: 'adverb'
	}, {
		word: 'inwardly',
		type: 'adverb'
	}, {
		word: 'invisibly',
		type: 'adverb'
	}, {
		word: 'invariably',
		type: 'adverb'
	}, {
		word: 'internally',
		type: 'adverb'
	}, {
		word: 'intermittently',
		type: 'adverb'
	}, {
		word: 'interestingly',
		type: 'adverb'
	}, {
		word: 'intently',
		type: 'adverb'
	}, {
		word: 'identifiably',
		type: 'adverb'
	}, {
		word: 'idiotically',
		type: 'adverb'
	}, {
		word: 'imaginatively',
		type: 'adverb'
	}, {
		word: 'immeasurably',
		type: 'adverb'
	}, {
		word: 'immediately',
		type: 'adverb'
	}, {
		word: 'immensely',
		type: 'adverb'
	}, {
		word: 'impatiently',
		type: 'adverb'
	}, {
		word: 'intelligently',
		type: 'adverb'
	}, {
		word: 'intensely',
		type: 'adverb'
	}, {
		word: 'instantly',
		type: 'adverb'
	}, {
		word: 'inquisitively',
		type: 'adverb'
	}, {
		word: 'impressively',
		type: 'adverb'
	}, {
		word: 'inappropriately',
		type: 'adverb'
	}, {
		word: 'incessantly',
		type: 'adverb'
	}, {
		word: 'incorrectly',
		type: 'adverb'
	}, {
		word: 'indeed',
		type: 'adverb'
	}, {
		word: 'independently',
		type: 'adverb'
	}, {
		word: 'innocently',
		type: 'adverb'
	}, {
		word: 'infrequently',
		type: 'adverb'
	}, {
		word: 'informally',
		type: 'adverb'
	}, {
		word: 'infinitely',
		type: 'adverb'
	}, {
		word: 'inevitably',
		type: 'adverb'
	}, {
		word: 'indoors',
		type: 'adverb'
	}, {
		word: 'indubitably',
		type: 'adverb'
	}, {
		word: 'jaggedly',
		type: 'adverb'
	}, {
		word: 'jauntily',
		type: 'adverb'
	}, {
		word: 'jealously',
		type: 'adverb'
	}, {
		word: 'jovially',
		type: 'adverb'
	}, {
		word: 'just',
		type: 'adverb'
	}, {
		word: 'joylessly',
		type: 'adverb'
	}, {
		word: 'joyously',
		type: 'adverb'
	}, {
		word: 'jubilantly',
		type: 'adverb'
	}, {
		word: 'justly',
		type: 'adverb'
	}, {
		word: 'judgmentally',
		type: 'adverb'
	}, {
		word: 'keenly',
		type: 'adverb'
	}, {
		word: 'kiddingly',
		type: 'adverb'
	}, {
		word: 'kindheartedly',
		type: 'adverb'
	}, {
		word: 'kindly',
		type: 'adverb'
	}, {
		word: 'knavishly',
		type: 'adverb'
	}, {
		word: 'knottily',
		type: 'adverb'
	}, {
		word: 'knowingly',
		type: 'adverb'
	}, {
		word: 'knowledgeably',
		type: 'adverb'
	}, {
		word: 'kookily',
		type: 'adverb'
	}, {
		word: 'lastly',
		type: 'adverb'
	}, {
		word: 'lately',
		type: 'adverb'
	}, {
		word: 'later',
		type: 'adverb'
	}, {
		word: 'lazily',
		type: 'adverb'
	}, {
		word: 'lightly',
		type: 'adverb'
	}, {
		word: 'likely',
		type: 'adverb'
	}, {
		word: 'limply',
		type: 'adverb'
	}, {
		word: 'luxuriously',
		type: 'adverb'
	}, {
		word: 'luckily',
		type: 'adverb'
	}, {
		word: 'loyally',
		type: 'adverb'
	}, {
		word: 'lovingly',
		type: 'adverb'
	}, {
		word: 'lithely',
		type: 'adverb'
	}, {
		word: 'lively',
		type: 'adverb'
	}, {
		word: 'loftily',
		type: 'adverb'
	}, {
		word: 'longingly',
		type: 'adverb'
	}, {
		word: 'loosely',
		type: 'adverb'
	}, {
		word: 'loudly',
		type: 'adverb'
	}, {
		word: 'madly',
		type: 'adverb'
	}, {
		word: 'magically',
		type: 'adverb'
	}, {
		word: 'mainly',
		type: 'adverb'
	}, {
		word: 'majestically',
		type: 'adverb'
	}, {
		word: 'markedly',
		type: 'adverb'
	}, {
		word: 'materially',
		type: 'adverb'
	}, {
		word: 'meaningfully',
		type: 'adverb'
	}, {
		word: 'meanly',
		type: 'adverb'
	}, {
		word: 'meantime',
		type: 'adverb'
	}, {
		word: 'meanwhile',
		type: 'adverb'
	}, {
		word: 'measurably',
		type: 'adverb'
	}, {
		word: 'mechanically',
		type: 'adverb'
	}, {
		word: 'medically',
		type: 'adverb'
	}, {
		word: 'menacingly',
		type: 'adverb'
	}, {
		word: 'merely',
		type: 'adverb'
	}, {
		word: 'merrily',
		type: 'adverb'
	}, {
		word: 'methodically',
		type: 'adverb'
	}, {
		word: 'mightily',
		type: 'adverb'
	}, {
		word: 'miserably',
		type: 'adverb'
	}, {
		word: 'mockingly',
		type: 'adverb'
	}, {
		word: 'monthly',
		type: 'adverb'
	}, {
		word: 'morally',
		type: 'adverb'
	}, {
		word: 'more',
		type: 'adverb'
	}, {
		word: 'moreover',
		type: 'adverb'
	}, {
		word: 'mortally',
		type: 'adverb'
	}, {
		word: 'mostly',
		type: 'adverb'
	}, {
		word: 'much',
		type: 'adverb'
	}, {
		word: 'mysteriously',
		type: 'adverb'
	}, {
		word: 'nastily',
		type: 'adverb'
	}, {
		word: 'naturally',
		type: 'adverb'
	}, {
		word: 'nearby',
		type: 'adverb'
	}, {
		word: 'naughtily',
		type: 'adverb'
	}, {
		word: 'nearly',
		type: 'adverb'
	}, {
		word: 'neatly',
		type: 'adverb'
	}, {
		word: 'needily',
		type: 'adverb'
	}, {
		word: 'negatively',
		type: 'adverb'
	}, {
		word: 'nervously',
		type: 'adverb'
	}, {
		word: 'never',
		type: 'adverb'
	}, {
		word: 'nevertheless',
		type: 'adverb'
	}, {
		word: 'next',
		type: 'adverb'
	}, {
		word: 'nicely',
		type: 'adverb'
	}, {
		word: 'nightly',
		type: 'adverb'
	}, {
		word: 'noisily',
		type: 'adverb'
	}, {
		word: 'normally',
		type: 'adverb'
	}, {
		word: 'nosily',
		type: 'adverb'
	}, {
		word: 'nowadays',
		type: 'adverb'
	}, {
		word: 'numbly',
		type: 'adverb'
	}, {
		word: 'obediently',
		type: 'adverb'
	}, {
		word: 'obligingly',
		type: 'adverb'
	}, {
		word: 'obnoxiously',
		type: 'adverb'
	}, {
		word: 'obviously',
		type: 'adverb'
	}, {
		word: 'occasionally',
		type: 'adverb'
	}, {
		word: 'oddly',
		type: 'adverb'
	}, {
		word: 'offensively',
		type: 'adverb'
	}, {
		word: 'officially',
		type: 'adverb'
	}, {
		word: 'often',
		type: 'adverb'
	}, {
		word: 'ominously',
		type: 'adverb'
	}, {
		word: 'once',
		type: 'adverb'
	}, {
		word: 'only',
		type: 'adverb'
	}, {
		word: 'openly',
		type: 'adverb'
	}, {
		word: 'optimistically',
		type: 'adverb'
	}, {
		word: 'orderly',
		type: 'adverb'
	}, {
		word: 'ordinarily',
		type: 'adverb'
	}, {
		word: 'outdoors',
		type: 'adverb'
	}, {
		word: 'overseas',
		type: 'adverb'
	}, {
		word: 'overconfidently',
		type: 'adverb'
	}, {
		word: 'outwards',
		type: 'adverb'
	}, {
		word: 'outwardly',
		type: 'adverb'
	}, {
		word: 'outrageously',
		type: 'adverb'
	}, {
		word: 'painfully',
		type: 'adverb'
	}, {
		word: 'painlessly',
		type: 'adverb'
	}, {
		word: 'paradoxically',
		type: 'adverb'
	}, {
		word: 'partially',
		type: 'adverb'
	}, {
		word: 'particularly',
		type: 'adverb'
	}, {
		word: 'passionately',
		type: 'adverb'
	}, {
		word: 'patiently',
		type: 'adverb'
	}, {
		word: 'perfectly',
		type: 'adverb'
	}, {
		word: 'periodically',
		type: 'adverb'
	}, {
		word: 'perpetually',
		type: 'adverb'
	}, {
		word: 'persistently',
		type: 'adverb'
	}, {
		word: 'personally',
		type: 'adverb'
	}, {
		word: 'persuasively',
		type: 'adverb'
	}, {
		word: 'physically',
		type: 'adverb'
	}, {
		word: 'plainly',
		type: 'adverb'
	}, {
		word: 'playfully',
		type: 'adverb'
	}, {
		word: 'poetically',
		type: 'adverb'
	}, {
		word: 'politely',
		type: 'adverb'
	}, {
		word: 'poorly',
		type: 'adverb'
	}, {
		word: 'positively',
		type: 'adverb'
	}, {
		word: 'possibly',
		type: 'adverb'
	}, {
		word: 'potentially',
		type: 'adverb'
	}, {
		word: 'powerfully',
		type: 'adverb'
	}, {
		word: 'presently',
		type: 'adverb'
	}, {
		word: 'presumably',
		type: 'adverb'
	}, {
		word: 'prettily',
		type: 'adverb'
	}, {
		word: 'previously',
		type: 'adverb'
	}, {
		word: 'primly',
		type: 'adverb'
	}, {
		word: 'principally',
		type: 'adverb'
	}, {
		word: 'probably',
		type: 'adverb'
	}, {
		word: 'promptly',
		type: 'adverb'
	}, {
		word: 'properly',
		type: 'adverb'
	}, {
		word: 'proudly',
		type: 'adverb'
	}, {
		word: 'punctually',
		type: 'adverb'
	}, {
		word: 'quaintly',
		type: 'adverb'
	}, {
		word: 'queasily',
		type: 'adverb'
	}, {
		word: 'questionably',
		type: 'adverb'
	}, {
		word: 'questioningly',
		type: 'adverb'
	}, {
		word: 'quicker',
		type: 'adverb'
	}, {
		word: 'quickly',
		type: 'adverb'
	}, {
		word: 'quietly',
		type: 'adverb'
	}, {
		word: 'quirkily',
		type: 'adverb'
	}, {
		word: 'quite',
		type: 'adverb'
	}, {
		word: 'quizzically',
		type: 'adverb'
	}, {
		word: 'randomly',
		type: 'adverb'
	}, {
		word: 'rapidly',
		type: 'adverb'
	}, {
		word: 'rarely',
		type: 'adverb'
	}, {
		word: 'readily',
		type: 'adverb'
	}, {
		word: 'really',
		type: 'adverb'
	}, {
		word: 'reasonably',
		type: 'adverb'
	}, {
		word: 'recently',
		type: 'adverb'
	}, {
		word: 'regularly',
		type: 'adverb'
	}, {
		word: 'reliably',
		type: 'adverb'
	}, {
		word: 'remarkably',
		type: 'adverb'
	}, {
		word: 'repeatedly',
		type: 'adverb'
	}, {
		word: 'reproachfully',
		type: 'adverb'
	}, {
		word: 'reponsibly',
		type: 'adverb'
	}, {
		word: 'resentfully',
		type: 'adverb'
	}, {
		word: 'respectably',
		type: 'adverb'
	}, {
		word: 'ruthlessly',
		type: 'adverb'
	}, {
		word: 'rudely',
		type: 'adverb'
	}, {
		word: 'roughly',
		type: 'adverb'
	}, {
		word: 'respectfully',
		type: 'adverb'
	}, {
		word: 'restfully',
		type: 'adverb'
	}, {
		word: 'richly',
		type: 'adverb'
	}, {
		word: 'ridiculously',
		type: 'adverb'
	}, {
		word: 'righteously',
		type: 'adverb'
	}, {
		word: 'rightfully',
		type: 'adverb'
	}, {
		word: 'rightly',
		type: 'adverb'
	}, {
		word: 'rigidly',
		type: 'adverb'
	}, {
		word: 'routinely',
		type: 'adverb'
	}, {
		word: 'sadly',
		type: 'adverb'
	}, {
		word: 'safely',
		type: 'adverb'
	}, {
		word: 'scarcely',
		type: 'adverb'
	}, {
		word: 'scarily',
		type: 'adverb'
	}, {
		word: 'scientifically',
		type: 'adverb'
	}, {
		word: 'searchingly',
		type: 'adverb'
	}, {
		word: 'secretively',
		type: 'adverb'
	}, {
		word: 'securely',
		type: 'adverb'
	}, {
		word: 'sedately',
		type: 'adverb'
	}, {
		word: 'seemingly',
		type: 'adverb'
	}, {
		word: 'seldom',
		type: 'adverb'
	}, {
		word: 'selfishly',
		type: 'adverb'
	}, {
		word: 'selflessly',
		type: 'adverb'
	}, {
		word: 'separately',
		type: 'adverb'
	}, {
		word: 'seriously',
		type: 'adverb'
	}, {
		word: 'shamelessly',
		type: 'adverb'
	}, {
		word: 'sharply',
		type: 'adverb'
	}, {
		word: 'shortly',
		type: 'adverb'
	}, {
		word: 'shrilly',
		type: 'adverb'
	}, {
		word: 'significantly',
		type: 'adverb'
	}, {
		word: 'silently',
		type: 'adverb'
	}, {
		word: 'simply',
		type: 'adverb'
	}, {
		word: 'sincerely',
		type: 'adverb'
	}, {
		word: 'singularly',
		type: 'adverb'
	}, {
		word: 'shyly',
		type: 'adverb'
	}, {
		word: 'skillfully',
		type: 'adverb'
	}, {
		word: 'sleepily',
		type: 'adverb'
	}, {
		word: 'slightly',
		type: 'adverb'
	}, {
		word: 'slowly',
		type: 'adverb'
	}, {
		word: 'smoothly',
		type: 'adverb'
	}, {
		word: 'softly',
		type: 'adverb'
	}, {
		word: 'sometimes',
		type: 'adverb'
	}, {
		word: 'somehow',
		type: 'adverb'
	}, {
		word: 'solidly',
		type: 'adverb'
	}, {
		word: 'somewhat',
		type: 'adverb'
	}, {
		word: 'somewhere',
		type: 'adverb'
	}, {
		word: 'soon',
		type: 'adverb'
	}, {
		word: 'specially',
		type: 'adverb'
	}, {
		word: 'specifically',
		type: 'adverb'
	}, {
		word: 'steadily',
		type: 'adverb'
	}, {
		word: 'startlingly',
		type: 'adverb'
	}, {
		word: 'splendidly',
		type: 'adverb'
	}, {
		word: 'spiritually',
		type: 'adverb'
	}, {
		word: 'speedily',
		type: 'adverb'
	}, {
		word: 'spectacularly',
		type: 'adverb'
	}, {
		word: 'stealthily',
		type: 'adverb'
	}, {
		word: 'sternly',
		type: 'adverb'
	}, {
		word: 'still',
		type: 'adverb'
	}, {
		word: 'strenuously',
		type: 'adverb'
	}, {
		word: 'stressfully',
		type: 'adverb'
	}, {
		word: 'strictly',
		type: 'adverb'
	}, {
		word: 'structurally',
		type: 'adverb'
	}, {
		word: 'stupidly',
		type: 'adverb'
	}, {
		word: 'stylishly',
		type: 'adverb'
	}, {
		word: 'subsequently',
		type: 'adverb'
	}, {
		word: 'substantially',
		type: 'adverb'
	}, {
		word: 'subtly',
		type: 'adverb'
	}, {
		word: 'successfully',
		type: 'adverb'
	}, {
		word: 'suddenly',
		type: 'adverb'
	}, {
		word: 'sufficiently',
		type: 'adverb'
	}, {
		word: 'suitably',
		type: 'adverb'
	}, {
		word: 'supremely',
		type: 'adverb'
	}, {
		word: 'surely',
		type: 'adverb'
	}, {
		word: 'surprisingly',
		type: 'adverb'
	}, {
		word: 'suspiciously',
		type: 'adverb'
	}, {
		word: 'swiftly',
		type: 'adverb'
	}, {
		word: 'sweetly',
		type: 'adverb'
	}, {
		word: 'sympathetically',
		type: 'adverb'
	}, {
		word: 'systematically',
		type: 'adverb'
	}, {
		word: 'temporarily',
		type: 'adverb'
	}, {
		word: 'tenderly',
		type: 'adverb'
	}, {
		word: 'twice',
		type: 'adverb'
	}, {
		word: 'truthfully',
		type: 'adverb'
	}, {
		word: 'truly',
		type: 'adverb'
	}, {
		word: 'tremendously',
		type: 'adverb'
	}, {
		word: 'touchingly',
		type: 'adverb'
	}, {
		word: 'totally',
		type: 'adverb'
	}, {
		word: 'too',
		type: 'adverb'
	}, {
		word: 'tomorrow',
		type: 'adverb'
	}, {
		word: 'tensely',
		type: 'adverb'
	}, {
		word: 'tepidly',
		type: 'adverb'
	}, {
		word: 'terribly',
		type: 'adverb'
	}, {
		word: 'thankfully',
		type: 'adverb'
	}, {
		word: 'then',
		type: 'adverb'
	}, {
		word: 'there',
		type: 'adverb'
	}, {
		word: 'thereby',
		type: 'adverb'
	}, {
		word: 'thoroughly',
		type: 'adverb'
	}, {
		word: 'thoughtfully',
		type: 'adverb'
	}, {
		word: 'thus',
		type: 'adverb'
	}, {
		word: 'tightly',
		type: 'adverb'
	}, {
		word: 'today',
		type: 'adverb'
	}, {
		word: 'together',
		type: 'adverb'
	}, {
		word: 'tomorrow',
		type: 'adverb'
	}, {
		word: 'too',
		type: 'adverb'
	},{
		word:'totally',
		type: 'adverb'
		
	},{
        word:'touchingly',
        type: 'adverb'
		

	},{
		word:'tremendously',
		type: 'adverb'
		
	},{
		word:'truly',
		type: 'adverb'
		

	},{
		word:'truthfully',
		type: 'adverb'
		
	},{
		word:'twice',
		type: 'adverb'
		

	},{
		word:'ultimately',
		type: 'adverb'
		

	},{
		word:'unanimously',
		type: 'adverb'

	},{
		word:'unbearably',
		type: 'adverb'

	},{
		word:'unbelievably',
		type: 'adverb'

	},{
		word:'unemotionally',
		type: 'adverb'

	},{
		word:'unethically',
		type: 'adverb'

	},{
		word:'unexpectedly',
		type: 'adverb'

	},{
		word:'unfavorably',
		type: 'adverb'

	},{
		word:'unfortunately',
		type: 'adverb'

	},{
		word:'unfailingly',
		type: 'adverb'

	},{
		word:'uniformally',
		type: 'adverb'

	},{
		word:'unilaterally',
		type: 'adverb'

	},{
		word:'unimpressively',
		type: 'adverb'

	},{
		word:'universally',
		type: 'adverb'

	},{
		word:'unnaturally',
		type: 'adverb'

	},{
		word:'unnecessarily',
		type: 'adverb'

	},{
		word:'unquestionably',
		type: 'adverb'


	},{
		word:'unwillingly',
		type: 'adverb'


	},{
		word:'up',
		type: 'adverb'


	},{
		word:'unkindly',
      type: 'adverb'


	},{
		word:'upbeat',
		type: 'adverb'
	},{
        word:'upliftingly',
		type: 'adverb'
	},{
        word:'upright',
		type: 'adverb'

	},{
        word:'unselfishly',
        type: 'adverb'
	},{
       word:'upside-down',
       type: 'adverb'
	},{
      word:'unskillfully',
      type: 'adverb'
	},{
		word:'upward',
      type: 'adverb'

	},{
		word:'upwardly',
      type: 'adverb'

	},{
		word:'urgently',
      type: 'adverb'

	},{
		word:'usefully',
      type: 'adverb'

	},{
		word:'uselessly',
      type: 'adverb'

	},{
		word:'usually',
      type: 'adverb'

	},{		
		word:'utterly',
      type: 'adverb'

	},{
		word:'vacantly',
      type: 'adverb'


	},{
		word:'vaguely',
      type: 'adverb'


	},{
		word:'vainly',
      type: 'adverb'


	},{
		word:'valiantly',
      type: 'adverb'


	},{
		word:'vastly',
      type: 'adverb'


	},{
		word:'verbally',
      type: 'adverb'


	},{
		word:'vertically',
      type: 'adverb'


	},{
		word:'very',
      type: 'adverb'


	},{
		word:'viciously',
      type: 'adverb'


	},{
		word:'victoriously',
      type: 'adverb'


	},{
		word:'vigilantly',
      type: 'adverb'


	},{
		word:'vigorously',
      type: 'adverb'


	},{
		word:'violently',
      type: 'adverb'


	},{
		word:'visibly',
      type: 'adverb'


	},{
		word:'visually',
      type: 'adverb'


	},{
		word:'vivaciously',
      type: 'adverb'


	},{
		word:'voluntarily',
      type: 'adverb'


	},{
		word:'warmly',
      type: 'adverb'


	},{
		word:'weakly',
      type: 'adverb'


	},{
		word:'wearily',
      type: 'adverb'


	},{
		word:'weekly',
      type: 'adverb'


	},{
		word:'well',
      type: 'adverb'


	},{
		word:'wetly',
      type: 'adverb'


	},{
		word:'when',
      type: 'adverb'


	},{
		word:'where',
      type: 'adverb'


	},{
		word:'while',
      type: 'adverb'


	},{
		word:'why',
      type: 'adverb'


	},{
		word:'whole-heartedly',
      type: 'adverb'


	},{
		word:'wholly',
      type: 'adverb'


	},{
		word:'wickedly',
      type: 'adverb'


	},{
		word:'widely',
      type: 'adverb'


	},{
		word:'wiggly',
      type: 'adverb'


	},{
		word:'wildly',
      type: 'adverb'


	},{
		word:'willfully',
      type: 'adverb'


	},{
		word:'willingly',
      type: 'adverb'


	},{
		word:'wisely',
      type: 'adverb'


	},{
		word:'woefully',
      type: 'adverb'


	},{
		word:'wonderfully',
      type: 'adverb'


	},{
		word:'worriedly',
      type: 'adverb'


	},{
		word:'worthily',
      type: 'adverb'


	},{
		word:'wrongly',
      type: 'adverb'


	},{
		word:'yearly',
      type: 'adverb'


	},{
		word:'yearningly',
      type: 'adverb'


	},{
		word:'yesterday',
      type: 'adverb'


	},{
		word:'yet',
      type: 'adverb'


	},{
		word:'youthfully',
      type: 'adverb'


	},{
		word:'zanily',
      type: 'adverb'


	},{
		word:'zealously',
      type: 'adverb'


	},{
		word:'zestfully',
      type: 'adverb'


	},{
		word:'zestily',
      type: 'adverb'


	},{
		word:'abandoned',
      type: 'adjective'


	},{
		word:'able',
      type: 'adjective'


	},{
		word:'absolute',
     type: 'adjective'


	},{
		word:'adorable',
     type: 'adjective'


	},{
		word:'adventurous',
     type: 'adjective'


	},{
		word:'academic',
     type: 'adjective'


	},{
		word:'acceptable',
     type: 'adjective'


	},{
		word:'acclaimed',
     type: 'adjective'


	},{
		word:'accomplished',
     type: 'adjective'


	},{
		word:'accurate',
     type: 'adjective'


	},{
		word:'aching',
     type: 'adjective'


	},{
		word:'acidic',
     type: 'adjective'


	},{
		word:'acrobatic',
     type: 'adjective'


	},{
		word:'active',
     type: 'adjective'


	},{
		word:'actual',
     type: 'adjective'


	},{
		word:'adept',
     type: 'adjective'


	},{
		word:'admirable',
     type: 'adjective'


	},{
		word:'admired',
     type: 'adjective'


	},{
		word:'adolescent',
     type: 'adjective'


	},{
		word:'adorable',
     type: 'adjective'


	},{
		word:'adored',
     type: 'adjective'


	},{
		word:'advanced',
     type: 'adjective'

	},{
		word:'afraid',
     type: 'adjective'

	},{
		word:'affectionate',
     type: 'adjective'

	},{
		word:'aged',
     type: 'adjective'

	},{
		word:'aggravating',
     type: 'adjective'

	},{
		word:'aggressive',
     type: 'adjective'

	},{
		word:'agile',
     type: 'adjective'

	},{
		word:'agitated',
     type: 'adjective'

	},{
		word:'agonizing',
     type: 'adjective'

	},{
		word:'agreeable',
     type: 'adjective'

	},{
		word:'alarmed',
     type: 'adjective'

	},{
		word:'alarming',
     type: 'adjective'

	},{
		word:'alert',
     type: 'adjective'

	},{
		word:'alive',
     type: 'adjective'

	},{
		word:'all',
     type: 'adjective'

	},{
		word:'amazing',
     type: 'adjective'

	},{
		word:'ambitious',
     type: 'adjective'

	},{
		word:'amused',
     type: 'adjective'
	},{
		word:'amusing',
     type: 'adjective'

	},{
		word:'anchored',
     type: 'adjective'

	},{
		word:'ancient',
     type: 'adjective'

	},{
		word:'angelic',
     type: 'adjective'

	},{
		word:'angry',
     type: 'adjective'

	},{
		word:'anguished',
     type: 'adjective'

	},{
		word:'animated',
     type: 'adjective'

	},{
		word:'annual',
     type: 'adjective'

	},{
		word:'another',
     type: 'adjective'

	},{
		word:'antique',
     type: 'adjective'

	},{
		word:'anxious',
     type: 'adjective'
	},{
		word:'any',
     type: 'adjective'

	},{
		word:'apprehensive',
     type: 'adjective'

	},{
		word:'appropriate',
     type: 'adjective'

	},{
		word:'apt',
     type: 'adjective'

	},{
		word:'arctic',
     type: 'adjective'

	},{
		word:'arid',
     type: 'adjective'

	},{
		word:'ashamed',
     type: 'adjective'

	},{
		word:'assured',
     type: 'adjective'

	},{
		word:'astonishing',
     type: 'adjective'

	},{
		word:'athletic',
     type: 'adjective'

	},{
		word:'attached',
     type: 'adjective'

	},{
		word:'attentive',
     type: 'adjective'

	},{
		word:'attractive',
     type: 'adjective'

	},{
		word:'authentic',
     type: 'adjective'

	},{
		word:'authorized',
     type: 'adjective'

	},{
		word:'automatic',
     type: 'adjective'

	},{
		word:'average',
     type: 'adjective'

	},{
		word:'aware',
     type: 'adjective'

	},{
		word:'awesome',
     type: 'adjective'

	},{
		word:'awful',
     type: 'adjective'

	},{
		word:'awkward',
     type: 'adjective'

	},{
		word:'bad',
     type: 'adjective'

	},{
		word:'back',
     type: 'adjective'

	},{
		word:'bare',
     type: 'adjective'

	},{
		word:'basic',
     type: 'adjective'

	},{
		word:'beautiful',
     type: 'adjective'

	},{
		word:'belated',
     type: 'adjective'

	},{
		word:'beloved',
     type: 'adjective'


	},{
		word:'beneficial',
     type: 'adjective'


	},{
		word:'better',
     type: 'adjective'


	},{
		word:'best',
     type: 'adjective'


	},{
		word:'big',
     type: 'adjective'


	},{
		word:'big-hearted',
     type: 'adjective'


	},{
		word:'bitter',
     type: 'adjective'


	},{
		word:'black',
     type: 'adjective'


	},{
		word:'black-and-white',
     type: 'adjective'


	},{
		word:'blank',
     type: 'adjective'


	},{
		word:'blind',
     type: 'adjective'


	},{
		word:'blissful',
     type: 'adjective'


	},{
		word:'blond',
     type: 'adjective'


	},{
		word:'blue',
     type: 'adjective'


	},{
		word:'blushing',
     type: 'adjective'


	},{
		word:'bogus',
     type: 'adjective'


	},{
		word:'boiling',
     type: 'adjective'


	},{
		word:'boring',
     type: 'adjective'


	},{
		word:'bouncy',
     type: 'adjective'


	},{
		word:'brave',
     type: 'adjective'


	},{
		word:'breakable',
     type: 'adjective'


	},{
		word:'brief',
     type: 'adjective'


	},{
		word:'bright',
     type: 'adjective'


	},{
		word:'brilliant',
     type: 'adjective'


	},{
		word:'broken',
     type: 'adjective'


	},{
		word:'brown',
     type: 'adjective'


	},{
		word:'bronze',
     type: 'adjective'


	},{
		word:'bubbly',
     type: 'adjective'


	},{
		word:'bumpy',
     type: 'adjective'


	},{
		word:'burdensome',
     type: 'adjective'


	},{
		word:'busy',
     type: 'adjective'


	},{
		word:'buttery',
     type: 'adjective'


	},{
		word:'buzzing',
     type: 'adjective'


	},{
		word:'calculating',
     type: 'adjective'


	},{
		word:'calm',
     type: 'adjective'


	},{
		word:'capital',
     type: 'adjective'


	},{
		word:'carefree',
     type: 'adjective'


	},{
		word:'careful',
     type: 'adjective'


	},{
		word:'careless',
     type: 'adjective'


	},{
		word:'caring',
     type: 'adjective'


	},{
		word:'cautious',
     type: 'adjective'


	},{
		word:'celebrated',
     type: 'adjective'


	},{
		word:'charming',
     type: 'adjective'


	},{
		word:'cheap',
     type: 'adjective'


	},{
		word:'cheerful',
     type: 'adjective'


	},{
		word:'chief',
     type: 'adjective'


	},{
		word:'clean',
     type: 'adjective'


	},{
		word:'clear',
     type: 'adjective'


	},{
		word:'circular',
     type: 'adjective'


	},{
		word:'clear-cut',
     type: 'adjective'


	},{
		word:'classic',
     type: 'adjective'


	},{
		word:'close',
     type: 'adjective'


	},{
		word:'closed',
     type: 'adjective'


	},{
		word:'cloudy',
     type: 'adjective'


	},{
		word:'clueless',
     type: 'adjective'


	},{
		word:'colorful',
     type: 'adjective'


	},{
		word:'colorless',
     type: 'adjective'


	},{
		word:'comfortable',
     type: 'adjective'


	},{
		word:'common',
     type: 'adjective'


	},{
		word:'complete',
     type: 'adjective'


	},{
		word:'complex',
     type: 'adjective'


	},{
		word:'complicated',
     type: 'adjective'


	},{
		word:'composed',
     type: 'adjective'


	},{
		word:'concerned',
     type: 'adjective'


	},{
		word:'concrete',
     type: 'adjective'


	},{
		word:'confused',
     type: 'adjective'


	},{
		word:'consious',
     type: 'adjective'


	},{
		word:'considerate',
     type: 'adjective'


	},{
		word:'constant',
     type: 'adjective'


	},{
		word:'content',
     type: 'adjective'


	},{
		word:'conventional',
     type: 'adjective'


	},{
		word:'cooked',
     type: 'adjective'


	},{
		word:'cool',
     type: 'adjective'


	},{
		word:'cooperative',
     type: 'adjective'


	},{
		word:'coordinated',
     type: 'adjective'


	},{
		word:'corrupt',
     type: 'adjective'


	},{
		word:'costly',
     type: 'adjective'


	},{
		word:'courageous',
     type: 'adjective'


	},{
		word:'crazy',
     type: 'adjective'


	},{
		word:'creamy',
     type: 'adjective'


	},{
		word:'creative',
     type: 'adjective'


	},{
		word:'creepy',
     type: 'adjective'


	},{
		word:'crimnal',
     type: 'adjective'


	},{
		word:'crispy',
     type: 'adjective'


	},{
		word:'critical',
     type: 'adjective'


	},{
		word:'cruel',
     type: 'adjective'


	},{
		word:'crushing',
     type: 'adjective'


	},{
		word:'cultured',
     type: 'adjective'


	},{
		word:'cutre',
     type: 'adjective'


	},{
		word:'cylindrical',
     type: 'adjective'


	},{
		word:'damaged',
     type: 'adjective'


	},{
		word:'dangerous',
     type: 'adjective'


	},{
		word:'dead',
     type: 'adjective'


	},{
		word:'dear',
     type: 'adjective'


	},{
		word:'dazzling',
     type: 'adjective'


	},{
		word:'darling',
     type: 'adjective'


	},{
		word:'dearest',
     type: 'adjective'


	},{
		word:'decent',
     type: 'adjective'


	},{
		word:'decimal',
     type: 'adjective'


	},{
		word:'deep',
     type: 'adjective'


	},{
		word:'defenseless',
     type: 'adjective'


	},{
		word:'defensive',
     type: 'adjective'


	},{
		word:'delicious',
     type: 'adjective'


	},{
		word:'delayed',
     type: 'adjective'

	},{
		word:'definite',
     type: 'adjective'

	},{
		word:'demanding',
     type: 'adjective'

	},{
		word:'dental',
     type: 'adjective'

	},{
		word:'dependent',
     type: 'adjective'

	},{
		word:'different',
     type: 'adjective'

	},{
		word:'difficult',
     type: 'adjective'

	},{
		word:'detailed',
     type: 'adjective'

	},{
		word:'direct',
     type: 'adjective'

	},{
		word:'disgusting',
     type: 'adjective'

	},{
		word:'disloyal',
     type: 'adjective'

	},{
		word:'distant',
     type: 'adjective'

	},{
		word:'dirty',
     type: 'adjective'

	},{
		word:'distinct',
     type: 'adjective'

	},{
		word:'double',
     type: 'adjective'

	},{
		word:'drafty',
     type: 'adjective'

	},{
		word:'dramatic',
     type: 'adjective'

	},{
		word:'dry',
     type: 'adjective'

	},{
		word:'dual',
     type: 'adjective'

	},{
		word:'dull',
     type: 'adjective'

	},{
		word:'dutiful',
     type: 'adjective'

	},{
		word:'each',
     type: 'adjective'

	},{
		word:'eager',
     type: 'adjective'

	},{
		word:'earnest',
     type: 'adjective'

	},{
		word:'early',
     type: 'adjective'

	},{
		word:'easy',
     type: 'adjective'

	},{
		word:'edible',
     type: 'adjective'

	},{
		word:'educated',
     type: 'adjective'

	},{
		word:'elaborate',
     type: 'adjective'

	},{
		word:'elastic',
     type: 'adjective'

	},{
		word:'elderly',
     type: 'adjective'

	},{
		word:'electric',
     type: 'adjective'

	},{
		word:'elegant',
     type: 'adjective'

	},{
		word:'embarrassed',
     type: 'adjective'

	},{
		word:'emotional',
     type: 'adjective'

	},{
		word:'empty',
     type: 'adjective'

	},{
		word:'energetic',
     type: 'adjective'

	},{
		word:'enormous',
     type: 'adjective'

	},{
		word:'entire',
     type: 'adjective'

	},{
		word:'equal',
     type: 'adjective'

	},{
		word:'essential',
     type: 'adjective'

	},{
		word:'ethical',
     type: 'adjective'

	},{
		word:'even',
     type: 'adjective'

	},{
		word:'evergreen',
     type: 'adjective'

	},{
		word:'everlasting',
     type: 'adjective'

	},{
		word:'every',
     type: 'adjective'

	},{
		word:'evil',
     type: 'adjective'

	},{
		word:'excellent',
     type: 'adjective'

	},{
		word:'exhuasted',
     type: 'adjective'

	},{
		word:'excited',
     type: 'adjective'

	},{
		word:'exciting',
     type: 'adjective'

	},{
		word:'expensive',
     type: 'adjective'

	},{
		word:'expert',
     type: 'adjective'

	},{
		word:'experienced',
     type: 'adjective'

	},{
		word:'extra-large',
     type: 'adjective'

	},{
		word:'extra-small',
     type: 'adjective'

	},{
		word:'fabulous',
     type: 'adjective'

	},{
		word:'fake',
     type: 'adjective'

	},{
		word:'false',
     type: 'adjective'

	},{
		word:'fimilar',
     type: 'adjective'

	},{
		word:'famous',
     type: 'adjective'

	},{
		word:'fair',
     type: 'adjective'

	},{
		word:'faithful',
     type: 'adjective'

	},{
		word:'famous',
     type: 'adjective'

	},{
		word:'fancy',
     type: 'adjective'

	},{
		word:'faraway',
     type: 'adjective'

	},{
		word:'fast',
     type: 'adjective'

	},{
		word:'fat',
     type: 'adjective'

	},{
		word:'fatherly',
     type: 'adjective'

	},{
		word:'favorable',
     type: 'adjective'

	},{
		word:'favorite',
     type: 'adjective'

	},{
		word:'fearful',
     type: 'adjective'

	},{
		word:'fearless',
     type: 'adjective'

	},{
		word:'female',
     type: 'adjective'

	},{
		word:'few',
     type: 'adjective'

	},{
		word:'fine',
     type: 'adjective'

	},{
		word:'finished',
     type: 'adjective'

	},{
		word:'firm',
     type: 'adjective'

	},{
		word:'first',
     type: 'adjective'

	},{
		word:'fitting',
     type: 'adjective'

	},{
		word:'fixed',
     type: 'adjective'

	},{
		word:'flawless',
     type: 'adjective'

	},{
		word:'flowery',
     type: 'adjective'

	},{
		word:'fluffy',
     type: 'adjective'

	},{
		word:'fluid',
     type: 'adjective'

	},{
		word:'fond',
     type: 'adjective'

	},{
		word:'focused',
     type: 'adjective'

	},{
		word:'foolish',
     type: 'adjective'

	},{
		word:'forceful',
     type: 'adjective'

	},{
		word:'formal',
     type: 'adjective'

	},{
		word:'fortunate',
     type: 'adjective'

	},{
		word:'fragrant',
     type: 'adjective'

	},{
		word:'frank',
     type: 'adjective'

	},{
		word:'free',
     type: 'adjective'

	},{
		word:'fresh',
     type: 'adjective'

	},{
		word:'frequent',
     type: 'adjective'

	},{
		word:'french',
     type: 'adjective'

	},{
		word:'friendly',
     type: 'adjective'

	},{
		word:'frightened',
     type: 'adjective'

	},{
		word:'frightening',
     type: 'adjective'

	},{
		word:'front',
     type: 'adjective'

	},{
		word:'frozen',
     type: 'adjective'

	},{
		word:'fruitful',
     type: 'adjective'

	},{
		word:'full',
     type: 'adjective'

	},{
		word:'funny',
     type: 'adjective'

	},{
		word:'functional',
     type: 'adjective'

	},{
		word:'fussy',
     type: 'adjective'

	},{
		word:'fuzzy',
     type: 'adjective'

	},{
		word:'gaseous',
     type: 'adjective'

	},{
		word:'general',
     type: 'adjective'

	},{
		word:'generous',
     type: 'adjective'

	},{
		word:'gentle',
     type: 'adjective'

	},{
		word:'genuine',
     type: 'adjective'

	},{
		word:'giant',
     type: 'adjective'

	},{
		word:'gigantic',
     type: 'adjective'

	},{
		word:'gifted',
     type: 'adjective'

	},{
		word:'giving',
     type: 'adjective'

	},{
		word:'glass',
     type: 'adjective'

	},{
		word:'glittering',
     type: 'adjective'

	},{
		word:'glorious',
     type: 'adjective'

	},{
		word:'glossy',
     type: 'adjective'

	},{
		word:'golden',
     type: 'adjective'

	},{
		word:'good',
     type: 'adjective'

	},{
		word:'good-natured',
     type: 'adjective'

	},{
		word:'gorgeous',
     type: 'adjective'

	},{
		word:'graceful',
     type: 'adjective'

	},{
		word:'grateful',
     type: 'adjective'

	},{
		word:'gray',
     type: 'adjective'

	},{
		word:'grave',
     type: 'adjective'

	},{
		word:'greedy',
     type: 'adjective'

	},{
		word:'green',
     type: 'adjective'

	},{
		word:'great',
     type: 'adjective'

	},{
		word:'gross',
     type: 'adjective'

	},{
		word:'growing',
     type: 'adjective'

	},{
		word:'grown',
     type: 'adjective'

	},{
		word:'hairy',
     type: 'adjective'

	},{
		word:'half',
     type: 'adjective'

	},{
		word:'handmade',
     type: 'adjective'

	},{
		word:'handsome',
     type: 'adjective'

	},{
		word:'handy',
     type: 'adjective'

	},{
		word:'happy',
     type: 'adjective'

	},{
		word:'hard',
     type: 'adjective'

	},{
		word:'harmful',
     type: 'adjective'

	},{
		word:'harmless',
     type: 'adjective'

	},{
		word:'hateful',
     type: 'adjective'

	},{
		word:'healthy',
     type: 'adjective'

	},{
		word:'haunting',
     type: 'adjective'

	},{
		word:'hearty',
     type: 'adjective'

	},{
		word:'heavenly',
     type: 'adjective'

	},{
		word:'heavy',
     type: 'adjective'

	},{
		word:'helpful',
     type: 'adjective'

	},{
		word:'helpless',
     type: 'adjective'

	},{
		word:'hidden',
     type: 'adjective'

	},{
		word:'high',
     type: 'adjective'

	},{
		word:'high-level',
     type: 'adjective'

	},{
		word:'hilarious',
     type: 'adjective'

	},{
		word:'honest',
     type: 'adjective'

	},{
		word:'hot',
     type: 'adjective'

	},{
		word:'huge',
     type: 'adjective'

	},{
		word:'horrible',
     type: 'adjective'

	},{
		word:'hopeful',
     type: 'adjective'

	},{
		word:'honored',
     type: 'adjective'

	},{
		word:'humble',
     type: 'adjective'

	},{
		word:'hungry',
     type: 'adjective'

	},{
		word:'humiliating',
     type: 'adjective'

	},{
		word:'icy',
     type: 'adjective'

	},{
		word:'ideal',
     type: 'adjective'

	},{
		word:'idle',
     type: 'adjective'

	},{
		word:'ill',
     type: 'adjective'

	},{
		word:'illegal',
     type: 'adjective'

	},{
		word:'ignorant',
     type: 'adjective'

	},{
		word:'ill-fated',
     type: 'adjective'

	},{
		word:'ill-informed',
     type: 'adjective'

	},{
		word:'immense',
     type: 'adjective'

	},{
		word:'immediate',
     type: 'adjective'

	},{
		word:'impassioned',
     type: 'adjective'

	},{
		word:'imperfect',
     type: 'adjective'

	},{
		word:'impolite',
     type: 'adjective'

	},{
		word:'impractical',
     type: 'adjective'

	},{
		word:'important',
     type: 'adjective'

	},{
		word:'impossible',
     type: 'adjective'

	},{
		word:'impressionable',
     type: 'adjective'

	},{
		word:'impressive',
     type: 'adjective'

	},{
		word:'impractical',
     type: 'adjective'

	},{
		word:'impure',
     type: 'adjective'

	},{
		word:'inborn',
     type: 'adjective'

	},{
		word:'incomparable',
     type: 'adjective'

	},{
		word:'incomplete',
     type: 'adjective'

	},{
		word:'incompatible',
     type: 'adjective'

	},{
		word:'incompatible',
     type: 'adjective'

	},{
		word:'infamous',
     type: 'adjective'

	},{
		word:'inexperienced',
     type: 'adjective'

	},{
		word:'infinite',
     type: 'adjective'

	},{
		word:'informal',
     type: 'adjective'

	},{
		word:'innocent',
     type: 'adjective'

	},{
		word:'insecure',
     type: 'adjective'

	},{
		word:'insidious',
     type: 'adjective'

	},{
		word:'insignificant',
     type: 'adjective'

	},{
		word:'intent',
     type: 'adjective'

	},{
		word:'intelligent',
     type: 'adjective'

	},{
		word:'intentional',
     type: 'adjective'

	},{
		word:'interesting',
     type: 'adjective'

	},{
		word:'internal',
     type: 'adjective'

	},{
		word:'international',
     type: 'adjective'

	},{
		word:'irresponsible',
     type: 'adjective'

	},{
		word:'itchy',
     type: 'adjective'

	},{
		word:'irritating',
     type: 'adjective'

	},{
		word:'jaded',
     type: 'adjective'

	},{
		word:'jam-packed',
     type: 'adjective'

	},{
		word:'jealous',
     type: 'adjective'

	},{
		word:'joint',
     type: 'adjective'

	},{
		word:'jolly',
     type: 'adjective'

	},{
		word:'joyful',
     type: 'adjective'

	},{
		word:'junior',
     type: 'adjective'

	},{
		word:'juicy',
     type: 'adjective'

	},{
		word:'jambo',
     type: 'adjective'

	},{
		word:'joyful',
     type: 'adjective'

	},{
		word:'keen',
     type: 'adjective'

	},{
		word:'key',
     type: 'adjective'

	},{
		word:'kind',
     type: 'adjective'

	},{
		word:'kindhearted',
     type: 'adjective'

	},{
		word:'kindly',
     type: 'adjective'

	},{
		word:'knowledgeable',
     type: 'adjective'

	},{
		word:'known',
     type: 'adjective'

	},{
		word:'knowing',
     type: 'adjective'

	},{
		word:'lame',
     type: 'adjective'

	},{
		word:'large',
     type: 'adjective'

	},{
		word:'last',
     type: 'adjective'

	},{
		word:'lasting',
     type: 'adjective'

	},{
		word:'late',
     type: 'adjective'

	},{
		word:'lazy',
     type: 'adjective'

	},{
		word:'lawful',
     type: 'adjective'

	},{
		word:'left',
     type: 'adjective'

	},{
		word:'legal',
     type: 'adjective'

	},{
		word:'leading',
     type: 'adjective'

	},{
		word:'light',
     type: 'adjective'

	},{
		word:'liquid',
     type: 'adjective'

	},{
		word:'likable',
     type: 'adjective'

	},{
		word:'lighthearted',
     type: 'adjective'

	},{
		word:'linear',
     type: 'adjective'

	},{
		word:'limp',
     type: 'adjective'

	},{
		word:'limping',
     type: 'adjective'

	},{
		word:'little',
     type: 'adjective'

	},{
		word:'live',
     type: 'adjective'

	},{
		word:'long-term',
     type: 'adjective'

	},{
		word:'lively',
     type: 'adjective'

	},{
		word:'lone',
     type: 'adjective'

	},{
		word:'lonely',
     type: 'adjective'

	},{
		word:'long',
     type: 'adjective'

	},{
		word:'loose',
     type: 'adjective'

	},{
		word:'lost',
     type: 'adjective'

	},{
		word:'loud',
     type: 'adjective'

	},{
		word:'low',
     type: 'adjective'

	},{
		word:'loyal',
     type: 'adjective'

	},{
		word:'lucky',
     type: 'adjective'

	},{
		word:'lovable',
     type: 'adjective'

	},{
		word:'luxurious',
     type: 'adjective'

	},{
		word:'mad',
     type: 'adjective'

	},{
		word:'made-up',
     type: 'adjective'

	},{
		word:'major',
     type: 'adjective'

	},{
		word:'married',
     type: 'adjective'

	},{
		word:'male',
     type: 'adjective'

	},{
		word:'massive',
     type: 'adjective'

	},{
		word:'mature',
     type: 'adjective'

	},{
		word:'mean',
     type: 'adjective'

	},{
		word:'medical',
     type: 'adjective'

	},{
		word:'majestic',
     type: 'adjective'

	},{
		word:'magnificent',
     type: 'adjective'

	},{
		word:'marvelous',
     type: 'adjective'

	},{
		word:'mealy',
     type: 'adjective'

	},{
		word:'meaty',
     type: 'adjective'

	},{
		word:'medical',
     type: 'adjective'

	},{
		word:'mediocre',
     type: 'adjective'

	},{
		word:'medium',
     type: 'adjective'

	},{
		word:'meek',
     type: 'adjective'

	},{
		word:'mild',
     type: 'adjective'

	},{
		word:'metallic',
     type: 'adjective'

	},{
		word:'melodic',
     type: 'adjective'

	},{
		word:'memorable',
     type: 'adjective'

	},{
		word:'milky',
     type: 'adjective'

	},{
		word:'mindless',
     type: 'adjective'

	},{
		word:'minor',
     type: 'adjective'

	},{
		word:'minty',
     type: 'adjective'

	},{
		word:'misguided',
     type: 'adjective'

	},{
		word:'misty',
     type: 'adjective'

	},{
		word:'mixed',
     type: 'adjective'

	},{
		word:'modern',
     type: 'adjective'

	},{
		word:'modest',
     type: 'adjective'

	},{
		word:'moist',
     type: 'adjective'

	},{
		word:'monthly',
     type: 'adjective'

	},{
		word:'moral',
     type: 'adjective'

	},{
		word:'motionless',
     type: 'adjective'

	},{
		word:'motherly',
     type: 'adjective'

	},{
		word:'muddy',
     type: 'adjective'

	},{
		word:'musty',
     type: 'adjective'

	},{
		word:'multicolored',
     type: 'adjective'

	},{
		word:'muted',
     type: 'adjective'

	},{
		word:'narrow',
     type: 'adjective'

	},{
		word:'nasty',
     type: 'adjective'

	},{
		word:'natural',
     type: 'adjective'

	},{
		word:'naughty',
     type: 'adjective'

	},{
		word:'near',
     type: 'adjective'

	},{
		word:'neat',
     type: 'adjective'

	},{
		word:'necessary',
     type: 'adjective'

	},{
		word:'negative',
     type: 'adjective'

	},{
		word:'neglected',
     type: 'adjective'

	},{
		word:'negligible',
     type: 'adjective'

	},{
		word:'nervous',
     type: 'adjective'

	},{
		word:'new',
     type: 'adjective'

	},{
		word:'neighboring',
     type: 'adjective'

	},{
		word:'next',
     type: 'adjective'

	},{
		word:'nice',
     type: 'adjective'

	},{
		word:'nimble',
     type: 'adjective'

	},{
		word:'nippy',
     type: 'adjective'

	},{
		word:'noisy',
     type: 'adjective'

	},{
		word:'nonstop',
     type: 'adjective'

	},{
		word:'normal',
     type: 'adjective'

	},{
		word:'noted',
     type: 'adjective'

	},{
		word:'notable',
     type: 'adjective'

	},{
		word:'noisy',
     type: 'adjective'

	},{
		word:'novel',
     type: 'adjective'

	},{
		word:'numb',
     type: 'adjective'

	},{
		word:'nutty',
     type: 'adjective'

	},{
		word:'nutritious',
     type: 'adjective'

	},{
		word:'noteworthy',
     type: 'adjective'

	},{
		word:'noxious',
     type: 'adjective'

	},{
		word:'obedient',
     type: 'adjective'

	},{
		word:'oily',
     type: 'adjective'

	},{
		word:'odd',
     type: 'adjective'

	},{
		word:'oblong',
     type: 'adjective'

	},{
		word:'obese',
     type: 'adjective'

	},{
		word:'obvious',
     type: 'adjective'

	},{
		word:'old',
     type: 'adjective'

	},{
		word:'official',
     type: 'adjective'

	},{
		word:'occasional',
     type: 'adjective'

	},{
		word:'oblong',
     type: 'adjective'

	},{
		word:'oddball',
     type: 'adjective'

	},{
		word:'offbeat',
     type: 'adjective'

	},{
		word:'offensive',
     type: 'adjective'

	},{
		word:'only',
     type: 'adjective'

	},{
		word:'open',
     type: 'adjective'

	},{
		word:'old-fashioned',
     type: 'adjective'

	},{
		word:'orange',
     type: 'adjective'

	},{
		word:'oderly',
     type: 'adjective'

	},{
		word:'optimal',
     type: 'adjective'

	},{
		word:'optimistic',
     type: 'adjective'

	},{
		word:'organic',
     type: 'adjective'

	},{
		word:'orginal',
     type: 'adjective'

	},{
		word:'other',
     type: 'adjective'

	},{
		word:'our',
     type: 'adjective'

	},{
		word:'ordinary',
     type: 'adjective'

	},{
		word:'outgoing',
     type: 'adjective'

	},{
		word:'outlying',
     type: 'adjective'

	},{
		word:'outstanding',
     type: 'adjective'

	},{
		word:'oval',
     type: 'adjective'

	},{
		word:'overcooked',
     type: 'adjective'

	},{
		word:'overdue',
     type: 'adjective'

	},{
		word:'overjoyed',
     type: 'adjective'

	},{
		word:'overlooked',
     type: 'adjective'

	},{
		word:'parallel',
     type: 'adjective'

	},{
		word:'perfect',
     type: 'adjective'

	},{
		word:'perfumed',
     type: 'adjective'

	},{
		word:'passionate',
     type: 'adjective'

	},{
		word:'past',
     type: 'adjective'

	},{
		word:'peaceful',
     type: 'adjective'

	},{
		word:'pink',
     type: 'adjective'

	},{
		word:'plain',
     type: 'adjective'

	},{
		word:'physical',
     type: 'adjective'

	},{
		word:'petty',
     type: 'adjective'

	},{
		word:'pertinent',
     type: 'adjective'

	},{
		word:'personal',
     type: 'adjective'

	},{
		word:'plastic',
     type: 'adjective'

	},{
		word:'playful',
     type: 'adjective'

	},{
		word:'pleasant',
     type: 'adjective'

	},{
		word:'pleased',
     type: 'adjective'

	},{
		word:'polished',
     type: 'adjective'

	},{
		word:'polite',
     type: 'adjective'

	},{
		word:'political',
     type: 'adjective'

	},{
		word:'pointed',
     type: 'adjective'

	},{
		word:'pointless',
     type: 'adjective'

	},{
		word:'poised',
     type: 'adjective'

	},{
		word:'poor',
     type: 'adjective'

	},{
		word:'popular',
     type: 'adjective'

	},{
		word:'positive',
     type: 'adjective'

	},{
		word:'possible',
     type: 'adjective'

	},{
		word:'potable',
     type: 'adjective'

	},{
		word:'powerful',
     type: 'adjective'

	},{
		word:'powerless',
     type: 'adjective'

	},{
		word:'potable',
     type: 'adjective'

	},{
		word:'present',
     type: 'adjective'

	},{
		word:'precious',
     type: 'adjective'

	},{
		word:'prestigious',
     type: 'adjective'

	},{
		word:'pretty',
     type: 'adjective'

	},{
		word:'previous',
     type: 'adjective'

	},{
		word:'pricey',
     type: 'adjective'

	},{
		word:'primary',
     type: 'adjective'

	},{
		word:'prime',
     type: 'adjective'

	},{
		word:'private',
     type: 'adjective'

	},{
		word:'profitable',
     type: 'adjective'

	},{
		word:'prize',
     type: 'adjective'

	},{
		word:'proper',
     type: 'adjective'

	},{
		word:'proud',
     type: 'adjective'

	},{
		word:'prudent',
     type: 'adjective'

	},{
		word:'pure',
     type: 'adjective'

	},{
		word:'purple',
     type: 'adjective'

	},{
		word:'punctual',
     type: 'adjective'

	},{
		word:'pungent',
     type: 'adjective'

	},{
		word:'puzzled',
     type: 'adjective'

	},{
		word:'puzzling',
     type: 'adjective'

	},{
		word:'pushy',
     type: 'adjective'

	},{
		word:'qualified',
     type: 'adjective'

	},{
		word:'quick',
     type: 'adjective'

	},{
		word:'quarrelsome',
     type: 'adjective'

	},{
		word:'quiet',
     type: 'adjective'

	},{
		word:'quarterly',
     type: 'adjective'

	},{
		word:'radiant',
     type: 'adjective'

	},{
		word:'rapid',
     type: 'adjective'

	},{
		word:'rare',
     type: 'adjective'

	},{
		word:'ragged',
     type: 'adjective'

	},{
		word:'raw',
     type: 'adjective'

	},{
		word:'real',
     type: 'adjective'

	},{
		word:'red',
     type: 'adjective'

	},{
		word:'reckless',
     type: 'adjective'

	},{
		word:'recent',
     type: 'adjective'

	},{
		word:'rectangular',
     type: 'adjective'

	},{
		word:'ready',
     type: 'adjective'

	},{
		word:'regal',
     type: 'adjective'

	},{
		word:'regular',
     type: 'adjective'

	},{
		word:'reasonable',
     type: 'adjective'

	},{
		word:'reflecting',
     type: 'adjective'

	},{
		word:'reliable',
     type: 'adjective'

	},{
		word:'required',
     type: 'adjective'

	},{
		word:'remote',
     type: 'adjective'

	},{
		word:'remarkable',
     type: 'adjective'

	},{
		word:'rich',
     type: 'adjective'

	},{
		word:'rigid',
     type: 'adjective'

	},{
		word:'respectful',
     type: 'adjective'

	},{
		word:'responsible',
     type: 'adjective'

	},{
		word:'required',
     type: 'adjective'

	},{
		word:'revolving',
     type: 'adjective'

	},{
		word:'rewarding',
     type: 'adjective'

	},{
		word:'ripe',
     type: 'adjective'

	},{
		word:'robust',
     type: 'adjective'

	},{
		word:'roasted',
     type: 'adjective'

	},{
		word:'rough',
     type: 'adjective'

	},{
		word:'rotten',
     type: 'adjective'

	},{
		word:'rotating',
     type: 'adjective'

	},{
		word:'round',
     type: 'adjective'

	},{
		word:'royal',
     type: 'adjective'

	},{
		word:'rubbery',
     type: 'adjective'

	},{
		word:'rundown',
     type: 'adjective'

	},{
		word:'rude',
     type: 'adjective'

	},{
		word:'rural',
     type: 'adjective'

	},{
		word:'runny',
     type: 'adjective'

	},{
		word:'relieved',
     type: 'adjective'

	},{
		word:'sad',
     type: 'adjective'

	},{
		word:'safe',
     type: 'adjective'

	},{
		word:'salty',
     type: 'adjective'

	},{
		word:'same',
     type: 'adjective'

	},{
		word:'sandy',
     type: 'adjective'

	},{
		word:'sane',
     type: 'adjective'

	},{
		word:'sarcastic',
     type: 'adjective'

	},{
		word:'satisfied',
     type: 'adjective'

	},{
		word:'scaly',
     type: 'adjective'

	},{
		word:'scarce',
     type: 'adjective'

	},{
		word:'scared',
     type: 'adjective'

	},{
		word:'scary',
     type: 'adjective'

	},{
		word:'scented',
     type: 'adjective'

	},{
		word:'scholarly',
     type: 'adjective'

	},{
		word:'scientific',
     type: 'adjective'

	},{
		word:'second',
     type: 'adjective'

	},{
		word:'scondary',
     type: 'adjective'

	},{
		word:'second-hand',
     type: 'adjective'

	},{
		word:'secret',
     type: 'adjective'

	},{
		word:'selfish',
     type: 'adjective'

	},{
		word:'scratchy',
     type: 'adjective'

	},{
		word:'sentimental',
     type: 'adjective'

	},{
		word:'self-reliant',
     type: 'adjective'

	},{
		word:'self-assured',
     type: 'adjective'

	},{
		word:'separate',
     type: 'adjective'

	},{
		word:'serious',
     type: 'adjective'

	},{
		word:'several',
     type: 'adjective'

	},{
		word:'shabby',
     type: 'adjective'

	},{
		word:'shadowy',
     type: 'adjective'

	},{
		word:'shameful',
     type: 'adjective'

	},{
		word:'shameless',
     type: 'adjective'

	},{
		word:'sharp',
     type: 'adjective'

	},{
		word:'shaddy',
     type: 'adjective'

	},{
		word:'shiny',
     type: 'adjective'

	},{
		word:'shocked',
     type: 'adjective'

	},{
		word:'shocking',
     type: 'adjective'

	},{
		word:'short',
     type: 'adjective'

	},{
		word:'short-term',
     type: 'adjective'

	},{
		word:'showy',
     type: 'adjective'

	},{
		word:'shrill',
     type: 'adjective'

	},{
		word:'shy',
     type: 'adjective'

	},{
		word:'sick',
     type: 'adjective'

	},{
		word:'silent',
     type: 'adjective'

	},{
		word:'silky',
     type: 'adjective'

	},{
		word:'silly',
     type: 'adjective'

	},{
		word:'silver',
     type: 'adjective'

	},{
		word:'similar',
     type: 'adjective'

	},{
		word:'simple',
     type: 'adjective'

	},{
		word:'skinny',
     type: 'adjective'

	},{
		word:'sleepy',
     type: 'adjective'

	},{
		word:'sinful',
     type: 'adjective'

	},{
		word:'single',
     type: 'adjective'

	},{
		word:'skeletal',
     type: 'adjective'

	},{
		word:'sizzling',
     type: 'adjective'

	},{
		word:'slim',
     type: 'adjective'

	},{
		word:'slimy',
     type: 'adjective'

	},{
		word:'slippery',
     type: 'adjective'

	},{
		word:'slow',
     type: 'adjective'

	},{
		word:'small',
     type: 'adjective'

	},{
		word:'smart',
     type: 'adjective'

	},{
		word:'smooth',
     type: 'adjective'

	},{
		word:'smug',
     type: 'adjective'

	},{
		word:'snarling',
     type: 'adjective'

	},{
		word:'snoopy',
     type: 'adjective'

	},{
		word:'sneaky',
     type: 'adjective'

	},{
		word:'solid',
     type: 'adjective'

	},{
		word:'some',
     type: 'adjective'

	},{
		word:'sociable',
     type: 'adjective'

	},{
		word:'soft',
     type: 'adjective'

	},{
		word:'sociable',
     type: 'adjective'

	},{
		word:'sophisticated',
     type: 'adjective'

	},{
		word:'sore',
     type: 'adjective'

	},{
		word:'sorrowful',
     type: 'adjective'

	},{
		word:'sour',
     type: 'adjective'

	},{
		word:'spanish',
     type: 'adjective'

	},{
		word:'soupy',
     type: 'adjective'

	},{
		word:'soulful',
     type: 'adjective'

	},{
		word:'sparkling',
     type: 'adjective'

	},{
		word:'sparse',
     type: 'adjective'

	},{
		word:'specific',
     type: 'adjective'

	},{
		word:'spectacular',
     type: 'adjective'

	},{
		word:'speedy',
     type: 'adjective'

	},{
		word:'spicy',
     type: 'adjective'

	},{
		word:'spirited',
     type: 'adjective'

	},{
		word:'spotless',
     type: 'adjective'

	},{
		word:'spotted',
     type: 'adjective'

	},{
		word:'splendid',
     type: 'adjective'

	},{
		word:'spiteful',
     type: 'adjective'

	},{
		word:'squeaky',
     type: 'adjective'

	},{
		word:'square',
     type: 'adjective'

	},{
		word:'stable',
     type: 'adjective'

	},{
		word:'stale',
     type: 'adjective'

	},{
		word:'standard',
     type: 'adjective'

	},{
		word:'stark',
     type: 'adjective'

	},{
		word:'stormy',
     type: 'adjective'

	},{
		word:'strange',
     type: 'adjective'

	},{
		word:'steel',
     type: 'adjective'

	},{
		word:'strict',
     type: 'adjective'

	},{
		word:'strong',
     type: 'adjective'

	},{
		word:'stunning',
     type: 'adjective'

	},{
		word:'striped',
     type: 'adjective'

	},{
		word:'striking',
     type: 'adjective'

	},{
		word:'studious',
     type: 'adjective'

	},{
		word:'stupid',
     type: 'adjective'

	},{
		word:'stylish',
     type: 'adjective'

	},{
		word:'submissive',
     type: 'adjective'

	},{
		word:'sunny',
     type: 'adjective'

	},{
		word:'superb',
     type: 'adjective'

	},{
		word:'super',
     type: 'adjective'

	},{
		word:'suburban',
     type: 'adjective'

	},{
		word:'sudden',
     type: 'adjective'

	},{
		word:'sugary',
     type: 'adjective'

	},{
		word:'superficial',
     type: 'adjective'

	},{
		word:'superior',
     type: 'adjective'

	},{
		word:'sure-footed',
     type: 'adjective'

	},{
		word:'supportive',
     type: 'adjective'

	},{
		word:'suspicious',
     type: 'adjective'

	},{
		word:'surprised',
     type: 'adjective'

	},{
		word:'sweaty',
     type: 'adjective'

	},{
		word:'sweet',
     type: 'adjective'

	},{
		word:'sympathetic',
     type: 'adjective'

	},{
		word:'swift',
     type: 'adjective'

	},{
		word:'tall',
     type: 'adjective'

	},{
		word:'tan',
     type: 'adjective'

	},{
		word:'tame',
     type: 'adjective'

	},{
		word:'talkative',
     type: 'adjective'

	},{
		word:'tangible',
     type: 'adjective'

	},{
		word:'tasty',
     type: 'adjective'

	},{
		word:'tart',
     type: 'adjective'

	},{
		word:'tender',
     type: 'adjective'

	},{
		word:'tense',
     type: 'adjective'

	},{
		word:'tattered',
     type: 'adjective'

	},{
		word:'teeming',
     type: 'adjective'

	},{
		word:'tempting',
     type: 'adjective'

	},{
		word:'testy',
     type: 'adjective'

	},{
		word:'these',
     type: 'adjective'

	},{
		word:'that',
     type: 'adjective'

	},{
		word:'thankful',
     type: 'adjective'

	},{
		word:'terrible',
     type: 'adjective'

	},{
		word:'terrific',
     type: 'adjective'

	},{
		word:'thick',
     type: 'adjective'

	},{
		word:'thin',
     type: 'adjective'

	},{
		word:'third',
     type: 'adjective'

	},{
		word:'thirsty',
     type: 'adjective'

	},{
		word:'those',
     type: 'adjective'

	},{
		word:'thorough',
     type: 'adjective'

	},{
		word:'thoughtful',
     type: 'adjective'

	},{
		word:'thrifty',
     type: 'adjective'

	},{
		word:'tidy',
     type: 'adjective'

	},{
		word:'timely',
     type: 'adjective'

	},{
		word:'tinted',
     type: 'adjective'

	},{
		word:'tiny',
     type: 'adjective'

	},{
		word:'total',
     type: 'adjective'

	},{
		word:'thorny',
     type: 'adjective'

	},{
		word:'thunderous',
     type: 'adjective'

	},{
		word:'tough',
     type: 'adjective'

	},{
		word:'tight',
     type: 'adjective'

	},{
		word:'treasured',
     type: 'adjective'

	},{
		word:'true',
     type: 'adjective'

	},{
		word:'tremendous',
     type: 'adjective'

	},{
		word:'trim',
     type: 'adjective'

	},{
		word:'tragic',
     type: 'adjective'

	},{
		word:'trained',
     type: 'adjective'

	},{
		word:'triangular',
     type: 'adjective'

	},{
		word:'tricky',
     type: 'adjective'

	},{
		word:'trivial',
     type: 'adjective'

	},{
		word:'troubled',
     type: 'adjective'

	},{
		word:'trusting',
     type: 'adjective'

	},{
		word:'trusty',
     type: 'adjective'
	},{
		word:'trustworthy',
     type: 'adjective'

	},{
		word:'truthful',
     type: 'adjective'

	},{
		word:'tubby',
     type: 'adjective'

	},{
		word:'twin',
     type: 'adjective'

	},{
		word:'turbulent',
     type: 'adjective'

	},{
		word:'ugly',
     type: 'adjective'

	},{
		word:'ultiamte',
     type: 'adjective'

	},{
		word:'unacceptable',
     type: 'adjective'

	},{
		word:'unaware',
     type: 'adjective'

	},{
		word:'uncommon',
     type: 'adjective'

	},{
		word:'unconscious',
     type: 'adjective'

	},{
		word:'understand',
     type: 'adjective'

	},{
		word:'unequaled',
     type: 'adjective'

	},{
		word:'uneven',
     type: 'adjective'

	},{
		word:'unfinished',
     type: 'adjective'

	},{
		word:'unfit',
     type: 'adjective'

	},{
		word:'unique',
     type: 'adjective'

	},{
		word:'unimportant',
     type: 'adjective'

	},{
		word:'unfolded',
     type: 'adjective'

	},{
		word:'unhealthy',
     type: 'adjective'

	},{
		word:'unfortunate',
     type: 'adjective'

	},{
		word:'unknown',
     type: 'adjective'

	},{
		word:'unlawful',
     type: 'adjective'

	},{
		word:'unlined',
     type: 'adjective'

	},{
		word:'unlucky',
     type: 'adjective'

	},{
		word:'unnatural',
     type: 'adjective'

	},{
		word:'unpleasent',
     type: 'adjective'

	},{
		word:'unselfish',
     type: 'adjective'

	},{
		word:'unsteady',
     type: 'adjective'

	},{
		word:'unsung',
     type: 'adjective'

	},{
		word:'untidy',
     type: 'adjective'

	},{
		word:'untimely',
     type: 'adjective'

	},{
		word:'unsightly',
     type: 'adjective'

	},{
		word:'untrue',
     type: 'adjective'

	},{
		word:'unused',
     type: 'adjective'

	},{
		word:'unusual',
     type: 'adjective'

	},{
		word:'unwelcome',
     type: 'adjective'

	},{
		word:'unwilling',
     type: 'adjective'

	},{
		word:'unbeat',
     type: 'adjective'

	},{
		word:'unwritten',
     type: 'adjective'

	},{
		word:'upright',
     type: 'adjective'

	},{
		word:'upset',
     type: 'adjective'

	},{
		word:'urban',
     type: 'adjective'

	},{
		word:'used',
     type: 'adjective'

	},{
		word:'usable',
     type: 'adjective'

	},{
		word:'useful',
     type: 'adjective'

	},{
		word:'useless',
     type: 'adjective'

	},{
		word:'utter',
     type: 'adjective'

	},{
		word:'utilized',
     type: 'adjective'

	},{
		word:'vacant',
     type: 'adjective'

	},{
		word:'vague',
     type: 'adjective'

	},{
		word:'vain',
     type: 'adjective'

	},{
		word:'valid',
     type: 'adjective'

	},{
		word:'valuable',
     type: 'adjective'

	},{
		word:'vapid',
     type: 'adjective'

	},{
		word:'variable',
     type: 'adjective'

	},{
		word:'vast',
     type: 'adjective'

	},{
		word:'vibrant',
     type: 'adjective'

	},{
		word:'venerated',
     type: 'adjective'

	},{
		word:'virtual',
     type: 'adjective'

	},{
		word:'visible',
     type: 'adjective'

	},{
		word:'victorious',
     type: 'adjective'

	},{
		word:'violet',
     type: 'adjective'

	},{
		word:'virtual',
     type: 'adjective'

	},{
		word:'vital',
     type: 'adjective'

	},{
		word:'voluminous',
     type: 'adjective'

	},{
		word:'vivid',
     type: 'adjective'

	},{
		word:'wan',
     type: 'adjective'

	},{
		word:'warlike',
     type: 'adjective'

	},{
		word:'warm',
     type: 'adjective'

	},{
		word:'warm-hearted',
     type: 'adjective'

	},{
		word:'warped',
     type: 'adjective'

	},{
		word:'wasteful',
     type: 'adjective'

	},{
		word:'watchful',
     type: 'adjective'

	},{
		word:'watery',
     type: 'adjective'
	},{
		word:'weak',
     type: 'adjective'

	},{
		word:'waterlogged',
     type: 'adjective'

	},{
		word:'wee',
     type: 'adjective'

	},{
		word:'weekly',
     type: 'adjective'

	},{
		word:'weepy',
     type: 'adjective'

	},{
		word:'welcome',
     type: 'adjective'

	},{
		word:'well-documented',
     type: 'adjective'

	},{
		word:'weighty',
     type: 'adjective'

	},{
		word:'well-groomed',
     type: 'adjective'

	},{
		word:'well-informed',
     type: 'adjective'

	},{
		word:'well-made',
     type: 'adjective'

	},{
		word:'well-off',
     type: 'adjective'

	},{
		word:'well-to-do',
     type: 'adjective'

	},{
		word:'well-lit',
     type: 'adjective'

	},{
		word:'wet',
     type: 'adjective'

	},{
		word:'which',
     type: 'adjective'

	},{
		word:'whispered',
     type: 'adjective'

	},{
		word:'well-worn',
     type: 'adjective'

	},{
		word:'whirlwind',
     type: 'adjective'

	},{
		word:'white',
     type: 'adjective'

	},{
		word:'whole',
     type: 'adjective'

	},{
		word:'whooping',
     type: 'adjective'

	},{
		word:'wicked',
     type: 'adjective'

	},{
		word:'wide',
     type: 'adjective'

	},{
		word:'wide-eyed',
     type: 'adjective'

	},{
		word:'wild',
     type: 'adjective'

	},{
		word:'willing',
     type: 'adjective'

	},{
		word:'winding',
     type: 'adjective'

	},{
		word:'windy',
     type: 'adjective'

	},{
		word:'wise',
     type: 'adjective'

	},{
		word:'wity',
     type: 'adjective'

	},{
		word:'wooden',
     type: 'adjective'

	},{
		word:'wonderful',
     type: 'adjective'

	},{
		word:'worldly',
     type: 'adjective'

	},{
		word:'wordy',
     type: 'adjective'

	},{
		word:'wobbly',
     type: 'adjective'

	},{
		word:'wise',
     type: 'adjective'

	},{
		word:'worried',
     type: 'adjective'

	},{
		word:'worse',
     type: 'adjective'

	},{
		word:'worst',
     type: 'adjective'

	},{
		word:'worthless',
     type: 'adjective'

	},{
		word:'wry',
     type: 'adjective'

	},{
		word:'wrong',
     type: 'adjective'

	},{
		word:'wretched',
     type: 'adjective'

	},{
		word:'worthwhile',
     type: 'adjective'

	},{
		word:'worthless',
     type: 'adjective'

	},{
		word:'yearly',
     type: 'adjective'

	},{
		word:'yellow',
     type: 'adjective'

	},{
		word:'yellowish',
     type: 'adjective'

	},{
		word:'young',
     type: 'adjective'

	},{
		word:'yummy',
     type: 'adjective'

	},{
		word:'zigzag',
     type: 'adjective'

	},{
		word:'zealous',
     type: 'adjective'

	},{
		word:'accept',                      //verb
     type: 'verb'

	},{
		word:'add',
     type: 'verb'

	},{
		word:'admire',
     type: 'verb'

	},{
		word:'admit',
     type: 'verb'

	},{
		word:'advice',
     type: 'verb'

	},{
		word:'afford',
     type: 'verb'

	},{
		word:'agree',
     type: 'verb'

	},{
		word:'alert',
     type: 'verb'

	},{
		word:'allow',
     type: 'verb'

	},{
		word:'amuse',
     type: 'verb'

	},{
		word:'analyze',
     type: 'verb'

	},{
		word:'announce',
     type: 'verb'

	},{
		word:'appear',
     type: 'verb'

	},{
		word:'answer',
     type: 'verb'

	},{
		word:'annoy',
     type: 'verb'

	},{
		word:'apologies',
     type: 'verb'

	},{
		word:'applaud',
     type: 'verb'

	},{
		word:'ask',
     type: 'verb'

	},{
		word:'arrest',
     type: 'verb'

	},{
		word:'arrange',
     type: 'verb'

	},{
		word:'arive',
     type: 'verb'

	},{
		word:'approve',
     type: 'verb'

	},{
		word:'argue',
     type: 'verb'

	},{
		word:'attach',
     type: 'verb'

	},{
		word:'attack',
     type: 'verb'

	},{
		word:'attend',
     type: 'verb'

	},{
		word:'avoid',
     type: 'verb'

	},{
		word:'attempt',
     type: 'verb'

	},{
		word:'back',
     type: 'verb'

	},{
		word:'bake',
     type: 'verb'

	},{
		word:'balance',
     type: 'verb'

	},{
		word:'bang',
     type: 'verb'

	},{
		word:'ban',
     type: 'verb'

	},{
		word:'bare',
     type: 'verb'

	},{
		word:'bat',
     type: 'verb'

	},{
		word:'bathe',
     type: 'verb'

	},{
		word:'battle',
     type: 'verb'

	},{
		word:'beam',
     type: 'verb'

	},{
		word:'beg',
     type: 'verb'

	},{
		word:'behave',
     type: 'verb'

	},{
		word:'belong',
     type: 'verb'

	},{
		word:'bless',
     type: 'verb'

	},{
		word:'blind',
     type: 'verb'

	},{
		word:'blink',
     type: 'verb'

	},{
		word:'boast',
     type: 'verb'

	},{
		word:'bolt',
     type: 'verb'

	},{
		word:'bomb',
     type: 'verb'

	},{
		word:'book',
     type: 'verb'

	},{
		word:'bore',
     type: 'verb'

	},{
		word:'borrow',
     type: 'verb'

	},{
		word:'bounce',
     type: 'verb'

	},{
		word:'bow',
     type: 'verb'

	},{
		word:'box',
     type: 'verb'

	},{
		word:'brake',
     type: 'verb'

	},{
		word:'branch',
     type: 'verb'

	},{
		word:'breathe',
     type: 'verb'

	},{
		word:'brush',
     type: 'verb'

	},{
		word:'bubble',
     type: 'verb'

	},{
		word:'bump',
     type: 'verb'

	},{
		word:'burn',
     type: 'verb'

	},{
		word:'bury',
     type: 'verb'

	},{
		word:'buzz',
     type: 'verb'

	},{
		word:'calculate',
     type: 'verb'

	},{
		word:'call',
     type: 'verb'

	},{
		word:'camp',
     type: 'verb'

	},{
		word:'care',
     type: 'verb'

	},{
		word:'carry',
     type: 'verb'

	},{
		word:'cause',
     type: 'verb'

	},{
		word:'carve',
     type: 'verb'

	},{
		word:'change',
     type: 'verb'

	},{
		word:'charge',
     type: 'verb'

	},{
		word:'cahllenge',
     type: 'verb'

	},{
		word:'chase',
     type: 'verb'

	},{
		word:'cheat',
     type: 'verb'

	},{
		word:'check',
     type: 'verb'

	},{
		word:'cheer',
     type: 'verb'

	},{
		word:'chew',
     type: 'verb'

	},{
		word:'chop',
     type: 'verb'

	},{
		word:'claim',
     type: 'verb'

	},{
		word:'clap',
     type: 'verb'

	},{
		word:'clean',
     type: 'verb'

	},{
		word:'clear',
     type: 'verb'

	},{
		word:'clip',
     type: 'verb'

	},{
		word:'close',
     type: 'verb'

	},{
		word:'coach',
     type: 'verb'

	},{
		word:'coil',
     type: 'verb'

	},{
		word:'collect',
     type: 'verb'

	},{
		word:'colour',
     type: 'verb'

	},{
		word:'comb',
     type: 'verb'

	},{
		word:'command',
     type: 'verb'

	},{
		word:'communicate',
     type: 'verb'

	},{
		word:'compete',
     type: 'verb'

	},{
		word:'complain',
     type: 'verb'

	},{
		word:'complete',
     type: 'verb'

	},{
		word:'concentrate',
     type: 'verb'

	},{
		word:'concern',
     type: 'verb'

	},{
		word:'confess',
     type: 'verb'

	},{
		word:'confuse',
     type: 'verb'

	},{
		word:'connect',
     type: 'verb'

	},{
		word:'consider',
     type: 'verb'

	},{
		word:'consist',
     type: 'verb'

	},{
		word:'contain',
     type: 'verb'

	},{
		word:'continue',
     type: 'verb'

	},{
		word:'copy',
     type: 'verb'

	},{
		word:'correct',
     type: 'verb'

	},{
		word:'cough',
     type: 'verb'

	},{
		word:'count',
     type: 'verb'

	},{
		word:'cover',
     type: 'verb'

	},{
		word:'crack',
     type: 'verb'

	},{
		word:'clash',
     type: 'verb'

	},{
		word:'crawl',
     type: 'verb'

	},{
		word:'cross',
     type: 'verb'

	},{
		word:'crush',
     type: 'verb'

	},{
		word:'cry',
     type: 'verb'

	},{
		word:'cure',
     type: 'verb'

	},{
		word:'curl',
     type: 'verb'

	},{
		word:'curve',
     type: 'verb'

	},{
		word:'cycle',
     type: 'verb'

	},{
		word:'dam',
     type: 'verb'

	},{
		word:'damage',
     type: 'verb'

	},{
		word:'dance',
     type: 'verb'

	},{
		word:'dare',
     type: 'verb'

	},{
		word:'decay',
     type: 'verb'

	},{
		word:'decide',
     type: 'verb'

	},{
		word:'delight',
     type: 'verb'

	},{
		word:'deliver',
     type: 'verb'

	},{
		word:'depand',
     type: 'verb'

	},{
		word:'described',
     type: 'verb'

	},{
		word:'desert',
     type: 'verb'

	},{
		word:'deserve',
     type: 'verb'

	},{
		word:'destroy',
     type: 'verb'
	},{
		word:'detect',
     type: 'verb'

	},{
		word:'develop',
     type: 'verb'

	},{
		word:'disagree',
     type: 'verb'

	},{
		word:'disappear',
     type: 'verb'

	},{
		word:'disapprove',
     type: 'verb'

	},{
		word:'disarm',
     type: 'verb'

	},{
		word:'diccover',
     type: 'verb'

	},{
		word:'dislike',
     type: 'verb'

	},{
		word:'divide',
     type: 'verb'

	},{
		word:'double',
     type: 'verb'

	},{
		word:'doubt',
     type: 'verb'

	},{
		word:'drag',
     type: 'verb'

	},{
		word:'drain',
     type: 'verb'

	},{
		word:'dream',
     type: 'verb'

	},{
		word:'dress',
     type: 'verb'

	},{
		word:'drip',
     type: 'verb'

	},{
		word:'drop',
     type: 'verb'

	},{
		word:'drown',
     type: 'verb'

	},{
		word:'drum',
     type: 'verb'

	},{
		word:'dry',
     type: 'verb'

	},{
		word:'dust',
     type: 'verb'

	},{
		word:'earn',
     type: 'verb'

	},{
		word:'educate',
     type: 'verb'

	},{
		word:'employ',
     type: 'verb'

	},{
		word:'empty',
     type: 'verb'

	},{
		word:'embarrasss',
     type: 'verb'

	},{
		word:'encourage',
     type: 'verb'

	},{
		word:'enjoy',
     type: 'verb'

	},{
		word:'enter',
     type: 'verb'

	},{
		word:'entertain',
     type: 'verb'

	},{
		word:'escape',
     type: 'verb'

	},{
		word:'examine',
     type: 'verb'

	},{
		word:'excite',
     type: 'verb'

	},{
		word:'excuse',
     type: 'verb'

	},{
		word:'exercise',
     type: 'verb'

	},{
		word:'exist',
     type: 'verb'

	},{
		word:'expand',
     type: 'verb'

	},{
		word:'expect',
     type: 'verb'

	},{
		word:'explain',
     type: 'verb'

	},{
		word:'expolode',
     type: 'verb'

	},{
		word:'extend',
     type: 'verb'

	},{
		word:'face',
     type: 'verb'

	},{
		word:'fade',
     type: 'verb'

	},{
		word:'fail',
     type: 'verb'

	},{
		word:'fancy',
     type: 'verb'

	},{
		word:'fasten',
     type: 'verb'

	},{
		word:'fax',
     type: 'verb'

	},{
		word:'fear',
     type: 'verb'

	},{
		word:'fence',
     type: 'verb'

	},{
		word:'file',
     type: 'verb'

	},{
		word:'fill',
     type: 'verb'

	},{
		word:'fetch',
     type: 'verb'

	},{
		word:'film',
     type: 'verb'

	},{
		word:'fire',
     type: 'verb'

	},{
		word:'fit',
     type: 'verb'

	},{
		word:'fix',
     type: 'verb'

	},{
		word:'flap',
     type: 'verb'

	},{
		word:'flash',
     type: 'verb'

	},{
		word:'float',
     type: 'verb'

	},{
		word:'flood',
     type: 'verb'

	},{
		word:'flow',
     type: 'verb'

	},{
		word:'flower',
     type: 'verb'

	},{
		word:'fold',
     type: 'verb'

	},{
		word:'follow',
     type: 'verb'

	},{
		word:'fool',
     type: 'verb'

	},{
		word:'form',
     type: 'verb'

	},{
		word:'force',
     type: 'verb'

	},{
		word:'found',
     type: 'verb'

	},{
		word:'frame',
     type: 'verb'

	},{
		word:'frighten',
     type: 'verb'

	},{
		word:'fry',
     type: 'verb'

	},{
		word:'gather',
     type: 'verb'

	},{
		word:'gaze',
     type: 'verb'

	},{
		word:'glow',
     type: 'verb'

	},{
		word:'glue',
     type: 'verb'
	},{
		word:'grab',
     type: 'verb'

	},{
		word:'grate',
     type: 'verb'

	},{
		word:'grease',
     type: 'verb'

	},{
		word:'greet',
     type: 'verb'

	},{
		word:'grin',
     type: 'verb'

	},{
		word:'grip',
     type: 'verb'

	},{
		word:'groan',
     type: 'verb'

	},{
		word:'gurantee',
     type: 'verb'

	},{
		word:'guard',
     type: 'verb'

	},{
		word:'guess',
     type: 'verb'

	},{
		word:'guide',
     type: 'verb'

	},{
		word:'hammer',
     type: 'verb'

	},{
		word:'hand',
     type: 'verb'

	},{
		word:'handle',
     type: 'verb'

	},{
		word:'hang',
     type: 'verb'

	},{
		word:'happen',
     type: 'verb'

	},{
		word:'harass',
     type: 'verb'

	},{
		word:'harm',
     type: 'verb'

	},{
		word:'hate',
     type: 'verb'

	},{
		word:'haunt',
     type: 'verb'

	},{
		word:'head',
     type: 'verb'

	},{
		word:'heal',
     type: 'verb'

	},{
		word:'heap',
     type: 'verb'

	},{
		word:'heat',
     type: 'verb'

	},{
		word:'help',
     type: 'verb'

	},{
		word:'hook',
     type: 'verb'

	},{
		word:'hop',
     type: 'verb'

	},{
		word:'hope',
     type: 'verb'

	},{
		word:'hover',
     type: 'verb'

	},{
		word:'hug',
     type: 'verb'

	},{
		word:'hum',
     type: 'verb'

	},{
		word:'hunt',
     type: 'verb'

	},{
		word:'hurry',
     type: 'verb'

	},{
		word:'identify',
     type: 'verb'

	},{
		word:'ignore',
     type: 'verb'

	},{
		word:'imagine',
     type: 'verb'

	},{
		word:'impress',
     type: 'verb'

	},{
		word:'improve',
     type: 'verb'

	},{
		word:'include',
     type: 'verb'

	},{
		word:'increase',
     type: 'verb'

	},{
		word:'inform',
     type: 'verb'

	},{
		word:'inject',
     type: 'verb'

	},{
		word:'injure',
     type: 'verb'

	},{
		word:'influence',
     type: 'verb'

	},{
		word:'instruct',
     type: 'verb'

	},{
		word:'intend',
     type: 'verb'

	},{
		word:'interest',
     type: 'verb'

	},{
		word:'interfere',
     type: 'verb'

	},{
		word:'interrupt',
     type: 'verb'

	},{
		word:'introduce',
     type: 'verb'

	},{
		word:'invent',
     type: 'verb'

	},{
		word:'invite',
     type: 'verb'

	},{
		word:'itch',
     type: 'verb'

	},{
		word:'irritate',
     type: 'verb'

	},{
		word:'jail',
     type: 'verb'

	},{
		word:'jam',
     type: 'verb'

	},{
		word:'jog',
     type: 'verb'

	},{
		word:'join',
     type: 'verb'

	},{
		word:'joke',
     type: 'verb'

	},{
		word:'judge',
     type: 'verb'

	},{
		word:'juggle',
     type: 'verb'

	},{
		word:'jump',
     type: 'verb'

	},{
		word:'kick',
     type: 'verb'

	},{
		word:'kill',
     type: 'verb'

	},{
		word:'kiss',
     type: 'verb'

	},{
		word:'kneel',
     type: 'verb'

	},{
		word:'knit',
     type: 'verb'

	},{
		word:'knock',
     type: 'verb'

	},{
		word:'knot',
     type: 'verb'

	},{
		word:'label',
     type: 'verb'

	},{
		word:'land',
     type: 'verb'

	},{
		word:'last',
     type: 'verb'

	},{
		word:'laugh',
     type: 'verb'

	},{
		word:'launch',
     type: 'verb'

	},{
		word:'learn',
     type: 'verb'

	},{
		word:'level',
     type: 'verb'

	},{
		word:'license',
     type: 'verb'

	},{
		word:'lick',
     type: 'verb'

	},{
		word:'lie',
     type: 'verb'

	},{
		word:'lighten',
     type: 'verb'

	},{
		word:'like',
     type: 'verb'

	},{
		word:'list',
     type: 'verb'

	},{
		word:'listen',
     type: 'verb'

	},{
		word:'live',
     type: 'verb'

	},{
		word:'load',
     type: 'verb'

	},{
		word:'lock',
     type: 'verb'

	},{
		word:'long',
     type: 'verb'

	},{
		word:'look',
     type: 'verb'

	},{
		word:'love',
     type: 'verb'

	},{
		word:'man',
     type: 'verb'

	},{
		word:'manage',
     type: 'verb'

	},{
		word:'march',
     type: 'verb'

	},{
		word:'mark',
     type: 'verb'

	},{
		word:'marry',
     type: 'verb'

	},{
		word:'match',
     type: 'verb'

	},{
		word:'mate',
     type: 'verb'

	},{
		word:'matter',
     type: 'verb'

	},{
		word:'measure',
     type: 'verb'

	},{
		word:'meddle',
     type: 'verb'

	},{
		word:'melt',
     type: 'verb'

	},{
		word:'memorise',
     type: 'verb'

	},{
		word:'mend',
     type: 'verb'

	},{
		word:'mess-up',
     type: 'verb'

	},{
		word:'milk',
     type: 'verb'

	},{
		word:'mine',
     type: 'verb'

	},{
		word:'miss',
     type: 'verb'

	},{
		word:'mix',
     type: 'verb'

	},{
		word:'moan',
     type: 'verb'

	},{
		word:'moor',
     type: 'verb'

	},{
		word:'mourn',
     type: 'verb'

	},{
		word:'move',
     type: 'verb'

	},{
		word:'muddle',
     type: 'verb'

	},{
		word:'mug',
     type: 'verb'

	},{
		word:'multiply',
     type: 'verb'

	},{
		word:'murder',
     type: 'verb'

	},{
		word:'nail',
     type: 'verb'

	},{
		word:'name',
     type: 'verb'

	},{
		word:'need',
     type: 'verb'

	},{
		word:'nest',
     type: 'verb'

	},{
		word:'nod',
     type: 'verb'

	},{
		word:'note',
     type: 'verb'

	},{
		word:'notice',
     type: 'verb'

	},{
		word:'number',
     type: 'verb'

	},{
		word:'obey',
     type: 'verb'

	},{
		word:'object',
     type: 'verb'

	},{
		word:'observe',
     type: 'verb'

	},{
		word:'obtain',
     type: 'verb'

	},{
		word:'occur',
     type: 'verb'

	},{
		word:'offend',
     type: 'verb'

	},{
		word:'offer',
     type: 'verb'

	},{
		word:'open',
     type: 'verb'

	},{
		word:'order',
     type: 'verb'

	},{
		word:'overflow',
     type: 'verb'

	},{
		word:'owe',
     type: 'verb'

	},{
		word:'own',
     type: 'verb'

	},{
		word:'peep',
     type: 'verb'

	},{
		word:'perform',
     type: 'verb'

	},{
		word:'permit',
     type: 'verb'

	},{
		word:'phone',
     type: 'verb'

	},{
		word:'pick',
     type: 'verb'

	},{
		word:'pinch',
     type: 'verb'

	},{
		word:'pine',
     type: 'verb'

	},{
		word:'place',
     type: 'verb'

	},{
		word:'plan',
     type: 'verb'

	},{
		word:'plant',
     type: 'verb'

	},{
		word:'play',
     type: 'verb'

	},{
		word:'please',
     type: 'verb'

	},{
		word:'plug',
     type: 'verb'

	},{
		word:'point',
     type: 'verb'

	},{
		word:'poke',
     type: 'verb'

	},{
		word:'polish',
     type: 'verb'

	},{
		word:'pop',
     type: 'verb'

	},{
		word:'post',
     type: 'verb'

	},{
		word:'possess',
     type: 'verb'

	},{
		word:'pour',
     type: 'verb'

	},{
		word:'practice',
     type: 'verb'

	},{
		word:'practise',
     type: 'verb'

	},{
		word:'pray',
     type: 'verb'

	},{
		word:'preach',
     type: 'verb'

	},{
		word:'precede',
     type: 'verb'

	},{
		word:'prefer',
     type: 'verb'

	},{
		word:'prepare',
     type: 'verb'

	},{
		word:'present',
     type: 'verb'

	},{
		word:'preserve',
     type: 'verb'

	},{
		word:'press',
     type: 'verb'

	},{
		word:'pretend',
     type: 'verb'

	},{
		word:'prevent',
     type: 'verb'

	},{
		word:'prick',
     type: 'verb'

	},{
		word:'print',
     type: 'verb'

	},{
		word:'produce',
     type: 'verb'

	},{
		word:'program',
     type: 'verb'

	},{
		word:'promise',
     type: 'verb'

	},{
		word:'protect',
     type: 'verb'

	},{
		word:'provide',
     type: 'verb'

	},{
		word:'pull',
     type: 'verb'

	},{
		word:'pump',
     type: 'verb'

	},{
		word:'punch',
     type: 'verb'

	},{
		word:'puncture',
     type: 'verb'

	},{
		word:'punish',
     type: 'verb'

	},{
		word:'push',
     type: 'verb'

	},{
		word:'question',
     type: 'verb'

	},{
		word:'queue',
     type: 'verb'

	},{
		word:'race',
     type: 'verb'
	},{
		word:'radiate',
     type: 'verb'

	},{
		word:'rain',
     type: 'verb'

	},{
		word:'raise',
     type: 'verb'

	},{
		word:'reach',
     type: 'verb'

	},{
		word:'realise',
     type: 'verb'

	},{
		word:'receive',
     type: 'verb'

	},{
		word:'recognise',
     type: 'verb'

	},{
		word:'record',
     type: 'verb'

	},{
		word:'reduce',
     type: 'verb'

	},{
		word:'reflect',
     type: 'verb'

	},{
		word:'refuse',
     type: 'verb'

	},{
		word:'regret',
     type: 'verb'

	},{
		word:'resign',
     type: 'verb'

	},{
		word:'reject',
     type: 'verb'

	},{
		word:'rejoice',
     type: 'verb'

	},{
		word:'relax',
     type: 'verb'

	},{
		word:'release',
     type: 'verb'

	},{
		word:'relay',
     type: 'verb'

	},{
		word:'remain',
     type: 'verb'

	},{
		word:'remember',
     type: 'verb'

	},{
		word:'remind',
     type: 'verb'

	},{
		word:'remove',
     type: 'verb'

	},{
		word:'repair',
     type: 'verb'

	},{
		word:'repeat',
     type: 'verb'

	},{
		word:'replace',
     type: 'verb'

	},{
		word:'reply',
     type: 'verb'

	},{
		word:'report',
     type: 'verb'

	},{
		word:'reproduce',
     type: 'verb'

	},{
		word:'request',
     type: 'verb'

	},{
		word:'rescue',
     type: 'verb'

	},{
		word:'retire',
     type: 'verb'

	},{
		word:'return',
     type: 'verb'

	},{
		word:'rhyme',
     type: 'verb'

	},{
		word:'rinse',
     type: 'verb'

	},{
		word:'risk',
     type: 'verb'

	},{
		word:'rob',
     type: 'verb'

	},{
		word:'rock',
     type: 'verb'

	},{
		word:'roll',
     type: 'verb'

	},{
		word:'rot',
     type: 'verb'

	},{
		word:'rub',
     type: 'verb'

	},{
		word:'rub',
     type: 'verb'

	},{
		word:'ruin',
     type: 'verb'

	},{
		word:'rule',
     type: 'verb'

	},{
		word:'rush',
     type: 'verb'

	},{
		word:'sack',
     type: 'verb'

	},{
		word:'sail',
     type: 'verb'

	},{
		word:'satisfy',
     type: 'verb'

	},{
		word:'save',
     type: 'verb'

	},{
		word:'saw',
     type: 'verb'

	},{
		word:'scare',
     type: 'verb'

	},{
		word:'scatter',
     type: 'verb'

	},{
		word:'scold',
     type: 'verb'

	},{
		word:'scorch',
     type: 'verb'

	},{
		word:'scrape',
     type: 'verb'

	},{
		word:'scratch',
     type: 'verb'

	},{
		word:'stream',
     type: 'verb'

	},{
		word:'screw',
     type: 'verb'

	},{
		word:'scribble',
     type: 'verb'

	},{
		word:'scrub',
     type: 'verb'

	},{
		word:'seal',
     type: 'verb'

	},{
		word:'search',
     type: 'verb'

	},{
		word:'separate',
     type: 'verb'

	},{
		word:'serve',
     type: 'verb'

	},{
		word:'settle',
     type: 'verb'

	},{
		word:'shade',
     type: 'verb'

	},{
		word:'share',
     type: 'verb'

	},{
		word:'shave',
     type: 'verb'

	},{
		word:'shelter',
     type: 'verb'

	},{
		word:'shiver',
     type: 'verb'

	},{
		word:'shock',
     type: 'verb'

	},{
		word:'shop',
     type: 'verb'

	},{
		word:'shrug',
     type: 'verb'

	},{
		word:'sigh',
     type: 'verb'

	},{
		word:'sign',
     type: 'verb'

	},{
		word:'signal',
     type: 'verb'
	},{
		word:'sin',
     type: 'verb'

	},{
		word:'sip',
     type: 'verb'

	},{
		word:'ski',
     type: 'verb'

	},{
		word:'skip',
     type: 'verb'

	},{
		word:'slap',
     type: 'verb'

	},{
		word:'slip',
     type: 'verb'

	},{
		word:'slow',
     type: 'verb'

	},{
		word:'smash',
     type: 'verb'

	},{
		word:'smell',
     type: 'verb'

	},{
		word:'smile',
     type: 'verb'

	},{
		word:'smoke',
     type: 'verb'

	},{
		word:'snatch',
     type: 'verb'

	},{
		word:'sneeze',
     type: 'verb'

	},{
		word:'sniff',
     type: 'verb'

	},{
		word:'snow',
     type: 'verb'

	},{
		word:'soak',
     type: 'verb'

	},{
		word:'soothe',
     type: 'verb'

	},{
		word:'sound',
     type: 'verb'

	},{
		word:'spare',
     type: 'verb'

	},{
		word:'spark',
     type: 'verb'

	},{
		word:'sparkle',
     type: 'verb'

	},{
		word:'spell',
     type: 'verb'

	},{
		word:'spill',
     type: 'verb'

	},{
		word:'spoil',
     type: 'verb'

	},{
		word:'spot',
     type: 'verb'

	},{
		word:'spray',
     type: 'verb'

	},{
		word:'sprout',
     type: 'verb'

	},{
		word:'squash',
     type: 'verb'

	},{
		word:'squeak',
     type: 'verb'

	},{
		word:'squeal',
     type: 'verb'

	},{
		word:'squeeze',
     type: 'verb'

	},{
		word:'stain',
     type: 'verb'

	},{
		word:'stamp',
     type: 'verb'

	},{
		word:'stare',
     type: 'verb'

	},{
		word:'start',
     type: 'verb'

	},{
		word:'stay',
     type: 'verb'

	},{
		word:'steer',
     type: 'verb'

	},{
		word:'step',
     type: 'verb'

	},{
		word:'stir',
     type: 'verb'

	},{
		word:'stitch',
     type: 'verb'

	},{
		word:'stop',
     type: 'verb'

	},{
		word:'store',
     type: 'verb'

	},{
		word:'strap',
     type: 'verb'

	},{
		word:'strenghen',
     type: 'verb'

	},{
		word:'stretch',
     type: 'verb'

	},{
		word:'strip',
     type: 'verb'

	},{
		word:'stroke',
     type: 'verb'

	},{
		word:'stuff',
     type: 'verb'

	},{
		word:'subtract',
     type: 'verb'

	},{
		word:'suceeed',
     type: 'verb'

	},{
		word:'suck',
     type: 'verb'

	},{
		word:'suffer',
     type: 'verb'

	},{
		word:'suggest',
     type: 'verb'

	},{
		word:'suit',
     type: 'verb'

	},{
		word:'supply',
     type: 'verb'

	},{
		word:'support',
     type: 'verb'

	},{
		word:'suppose',
     type: 'verb'

	},{
		word:'surprised',
     type: 'verb'

	},{
		word:'surround',
     type: 'verb'

	},{
		word:'suspect',
     type: 'verb'

	},{
		word:'suspend',
     type: 'verb'

	},{
		word:'switch',
     type: 'verb'

	},{
		word:'talk',
     type: 'verb'

	},{
		word:'tame',
     type: 'verb'

	},{
		word:'tap',
     type: 'verb'

	},{
		word:'taste',
     type: 'verb'

	},{
		word:'tease',
     type: 'verb'

	},{
		word:'telephone',
     type: 'verb'

	},{
		word:'tempt',
     type: 'verb'

	},{
		word:'terrify',
     type: 'verb'

	},{
		word:'test',
     type: 'verb'

	},{
		word:'thank',
     type: 'verb'

	},{
		word:'thaw',
     type: 'verb'

	},{
		word:'tick',
     type: 'verb'

	},{
		word:'tickle',
     type: 'verb'

	},{
		word:'tie',
     type: 'verb'

	},{
		word:'time',
     type: 'verb'

	},{
		word:'tip',
     type: 'verb'

	},{
		word:'tire',
     type: 'verb'

	},{
		word:'touch',
     type: 'verb'

	},{
		word:'tour',
     type: 'verb'

	},{
		word:'tow',
     type: 'verb'

	},{
		word:'trade',
     type: 'verb'

	},{
		word:'trace',
     type: 'verb'

	},{
		word:'train',
     type: 'verb'

	},{
		word:'transport',
     type: 'verb'

	},{
		word:'trap',
     type: 'verb'

	},{
		word:'travel',
     type: 'verb'

	},{
		word:'treat',
     type: 'verb'

	},{
		word:'trick',
     type: 'verb'

	},{
		word:'tremble',
     type: 'verb'

	},{
		word:'trip',
     type: 'verb'

	},{
		word:'trot',
     type: 'verb'

	},{
		word:'trouble',
     type: 'verb'

	},{
		word:'trust',
     type: 'verb'

	},{
		word:'try',
     type: 'verb'

	},{
		word:'tug',
     type: 'verb'

	},{
		word:'tumble',
     type: 'verb'

	},{
		word:'turn',
     type: 'verb'

	},{
		word:'twist',
     type: 'verb'

	},{
		word:'type',
     type: 'verb'

	},{
		word:'undress',
     type: 'verb'

	},{
		word:'unfasten',
     type: 'verb'

	},{
		word:'unite',
     type: 'verb'

	},{
		word:'unpack',
     type: 'verb'

	},{
		word:'use',
     type: 'verb'

	},{
		word:'unlock',
     type: 'verb'

	},{
		word:'untidy',
     type: 'verb'

	},{
		word:'vanish',
     type: 'verb'

	},{
		word:'visit',
     type: 'verb'

	},{
		word:'wail',
     type: 'verb'

	},{
		word:'wait',
     type: 'verb'

	},{
		word:'walk',
     type: 'verb'

	},{
		word:'wander',
     type: 'verb'

	},{
		word:'want',
     type: 'verb'

	},{
		word:'warm',
     type: 'verb'

	},{
		word:'warn',
     type: 'verb'

	},{
		word:'wash',
     type: 'verb'

	},{
		word:'watch',
     type: 'verb'

	},{
		word:'water',
     type: 'verb'

	},{
		word:'wave',
     type: 'verb'

	},{
		word:'weigh',
     type: 'verb'

	},{
		word:'welcome',
     type: 'verb'

	},{
		word:'whine',
     type: 'verb'

	},{
		word:'whip',
     type: 'verb'

	},{
		word:'whirl',
     type: 'verb'

	},{
		word:'whisper',
     type: 'verb'

	},{
		word:'whistle',
     type: 'verb'

	},{
		word:'wink',
     type: 'verb'

	},{
		word:'wipe',
     type: 'verb'

	},{
		word:'wish',
     type: 'verb'

	},{
		word:'wobble',
     type: 'verb'

	},{
		word:'wonder',
     type: 'verb'

	},{
		word:'work',
     type: 'verb'

	},{
		word:'worry',
     type: 'verb'

	},{
		word:'wrap',
     type: 'verb'

	},{
		word:'wreck',
     type: 'verb'

	},{
		word:'wrestle',
     type: 'verb'

	},{
		word:'wriggle',
     type: 'verb'

	},{
		word:'x-ray',
     type: 'verb'

	},{
		word:'yawn',
     type: 'verb'

	},{
		word:'yell',
     type: 'verb'

	},{
		word:'zip',
     type: 'verb'

	},{
		word:'zoom',
     type: 'verb'

	},{
		word:'all',            ////pronoun
     type: 'pronoun'

	},{
		word:'another',
  type: 'pronoun'

	},{
		word:'any',
     type: 'pronoun'

	},{
		word:'anybody',
     type: 'pronoun'

	},{
		word:'anyone',
type: 'pronoun'

	},{
		word:'anything',
     type: 'pronoun'

	},{
		word:'both',
     type: 'pronoun'

	},{
		word:'each',
     type: 'pronoun'

	},{
		word:'each other',
type: 'pronoun'

	},{
		word:'either',
     type: 'pronoun'

	},{
		word:'everybody',
     type: 'pronoun'

	},{
		word:'everyone',
     type: 'pronoun'

	},{
		word:'everything',
     type: 'pronoun'

	},{
		word:'few',
     type: 'pronoun'

	},{
		word:'he',
     type: 'pronoun'

	},{
		word:'her',
     type: 'pronoun'

	},{
		word:'hers',
     type: 'pronoun'

	},{
		word:'herself',
     type: 'pronoun'

	},{
		word:'him',
     typetype: 'pronoun'

	},{
		word:'himself',
     typetype: 'pronoun'
	},{
		word:'his',
     type: 'pronoun'

	},{
		word:'it',
     type: 'pronoun'

	},{
		word:'its',
     type: 'pronoun'

	},{
		word:'itself',
     type: 'pronoun'

	},{
		word:'many',
     type: 'pronoun'

	},{
		word:'me',
     type: 'pronoun'

	},{
		word:'mine',
     type: 'pronoun'

	},{
		word:'more',
     type: 'pronoun'

	},{
		word:'most',
     type: 'pronoun'

	},{
		word:'much',
     type: 'pronoun'

	},{
		word:'myself',
     type: 'pronoun'

	},{
		word:'neither',
     type: 'pronoun'

	},{
		word:'no one',
     type: 'pronoun'

	},{
		word:'nobody',
     type: 'pronoun'

	},{
		word:'none',
     type: 'pronoun'

	},{
		word:'nothing',
     type: 'pronoun'

	},{
		word:'one',
     type: 'pronoun'

	},{
		word:'one another',
     type: 'pronoun'

	},{
		word:'other',
     type: 'pronoun'
	},{
		word:'others',
     type: 'pronoun'

	},{
		word:'ours',
     type: 'pronoun'

	},{
		word:'ourselves',
     type: 'pronoun'

	},{
		word:'several',
     type: 'pronoun'

	},{
		word:'she',
     type: 'pronoun'

	},{
		word:'some',
     type: 'pronoun'

	},{
		word:'somebody',
     type: 'pronoun'

	},{
		word:'someone',
     type: 'pronoun'

	},{
		word:'something',
     type: 'pronoun'

	},{
		word:'that',
     type: 'pronoun'

	},{
		word:'their',
     type: 'pronoun'

	},{
		word:'theirs',
     type: 'pronoun'

	},{
		word:'them',
     type: 'pronoun'

	},{
		word:'themselves',
     type: 'pronoun'

	},{
		word:'these',
     type: 'pronoun'

	},{
		word:'they',
     type:'pronoun'

	},{
		word:'this',
     type:'pronoun'

	},{
		word:'those',
     type:'pronoun'

	},{
		word:'us',
     type:'pronoun'

	},{
		word:'we',
     type:'pronoun'

	},{
		word:'what',
     type:'pronoun'

	},{
		word:'whatever',
     type:'pronoun'

	},{
		word:'which',
     type:'pronoun'

	},{
		word:'whichever',
     type:'pronoun'

	},{
		word:'who',
     type:'pronoun'

	},{
		word:'whoever',
     type:'pronoun'

	},{
		word:'whom',
     type:'pronoun'

	},{
		word:'whomever',
     type:'pronoun'

	},{
		word:'whose',
     type:'pronoun'

	},{
		word:'you',
     type:'pronoun'

	},{
		word:'yours',
     type:'pronoun'

	},{
		word:'yourself',
    type:'pronoun'

	},{
		word:'yourselves',
     type:'pronoun'

	},{                                ///////preposition
		word:'aboard',
     type: 'preposition'

	},{
		word:'about',
     type: 'preposition'

	},{
		word:'above',
     type: 'preposition'

	},{
		word:'across',
     type: 'preposition'

	},{
		word:'after',
     type: 'preposition'

	},{
		word:'against',
     type: 'preposition'

	},{
		word:'along',
     type: 'preposition'

	},{
		word:'amid',
     type: 'preposition'

	},{
		word:'among',
     type: 'preposition'

	},{
		word:'anti',
     type: 'preposition'

	},{
		word:'around',
     type: 'preposition'

	},{
		word:'as',
     type: 'preposition'

	},{
		word:'at',
     type: 'preposition'

	},{
		word:'before',
     type: 'preposition'

	},{
		word:'behind',
     type: 'preposition'

	},{
		word:'below',
     type: 'preposition'

	},{
		word:'beneath',
     type: 'preposition'

	},{
		word:'beside',
     type: 'preposition'

	},{
		word:'besides',
     type: 'preposition'

	},{
		word:'between',
     type: 'preposition'

	},{
		word:'beyond',
     type: 'preposition'

	},{
		word:'but',
     type: 'preposition'

	},{
		word:'by',
     type: 'preposition'

	},{
		word:'concerning',
     type: 'preposition'

	},{
		word:'considering',
     type: 'preposition'

	},{
		word:'despite',
     type: 'preposition'

	},{
		word:'down',
     type: 'preposition'

	},{
		word:'during',
     type: 'preposition'

	},{
		word:'except',
     type: 'preposition'

	},{
		word:'excepting',
     type: 'preposition'

	},{
		word:'excluding',
     type: 'preposition'

	},{
		word:'following',
     type: 'preposition'

	},{
		word:'for',
     type: 'preposition'

	},{
		word:'from',
     type: 'preposition'

	},{
		word:'in',
     type: 'preposition'

	},{
		word:'inside',
     type: 'preposition'

	},{
		word:'into',
     type: 'preposition'

	},{
		word:'like',
     type: 'preposition'

	},{
		word:'minus',
     type: 'preposition'

	},{
		word:'near',
     type: 'preposition'

	},{
		word:'of',
     type: 'preposition'

	},{
		word:'off',
     type: 'preposition'

	},{
		word:'on',
     type: 'preposition'

	},{
		word:'onto',
     type: 'preposition'

	},{
		word:'opposite',
     type: 'preposition'

	},{
		word:'outside',
     type: 'preposition'

	},{
		word:'over',
     type: 'preposition'

	},{
		word:'past',
     type: 'preposition'

	},{
		word:'per',
     type: 'preposition'

	},{
		word:'plus',
     type: 'preposition'

	},{
		word:'regarding',
     type: 'preposition'

	},{
		word:'round',
     type: 'preposition'

	},{
		word:'save',
     type: 'preposition'

	},{
		word:'since',
     type: 'preposition'

	},{
		word:'than',
     type: 'preposition'

	},{
		word:'through',
     type: 'preposition'

	},{
		word:'to',
     type: 'preposition'

	},{
		word:'towards',
     type: 'preposition'

	},{
		word:'toward',
     type: 'preposition'

	},{
		word:'under',
     type: 'preposition'

	},{
		word:'underneath',
     type: 'preposition'

	},{
		word:'unlike',
     type: 'preposition'

	},{
		word:'until',
     type: 'preposition'

	},{
		word:'up',
     type: 'preposition'

	},{
		word:'upon',
     type: 'preposition'

	},{
		word:'versus',
     type: 'preposition'

	},{
		word:'via',
     type: 'preposition'

	},{
		word:'with',
     type: 'preposition'

	},{
		word:'within',
     type: 'preposition'

	},{
		word:'without',
     type: 'preposition'

	},{
		word:'the',  //determiner
      type: 'determiner'

	},{
		word:'a',
     type: 'determiner'

	},{
		word:'an',
     type: 'determiner'

	},{
		word:'another',
     type: 'determiner'

	},{
		word:'no',
     type: 'determiner'

	},{
		word:'some',
     type: 'determiner'

	},{
		word:'any',
     type: 'determiner'

	},{
		word:'my',
     type: 'determiner'

	},{
		word:'our',
     type: 'determiner'

	},{
		word:'their',
     type: 'determiner'

	},{
		word:'her',
     type: 'determiner'

	},{
		word:'his',
     type: 'determiner'

	},{
		word:'its',
     type: 'determiner'

	},{
		word:'each',
     type: 'determiner'

	},{
		word:'every',
     type: 'determiner'

	},{
		word:'certain',
     type: 'determiner'

	},{
		word:'this',
     type: 'determiner'

	},{
		word:'that',
     type: 'determiner'

	},{
		word:'people',      //noun
     type: 'noun'
	},{
		word:'history',
     type: 'noun'

	},{
		word:'way',
     type: 'noun'

	},{
		word:'art',
     type: 'noun'

	},{
		word:'world',
     type: 'noun'

	},{
		word:'information',
     type: 'noun'

	},{
		word:'map',
     type: 'noun'

	},{
		word:'two',
     type: 'noun'

	},{
		word:'family',
     type: 'noun'

	},{
		word:'government',
     type: 'noun'

	},{
		word:'health',
     type: 'noun'

	},{
		word:'system',
     type: 'noun'

	},{
		word:'computer',
     type: 'noun'

	},{
		word:'meat',
     type: 'noun'

	},{
		word:'year',
     type: 'noun'

	},{
		word:'thanks',
     type: 'noun'

	},{
		word:'music',
     type: 'noun'

	},{
		word:'person',
     type: 'noun'

	},{
		word:'reading',
     type: 'noun'

	},{
		word:'method',
     type: 'noun'

	},{
		word:'data',
     type: 'noun'

	},{
		word:'food',
     type: 'noun'

	},{
		word:'understanding',
     type: 'noun'

	},{
		word:'theory',
     type: 'noun'

	},{
		word:'law',
     type: 'noun'

	},{
		word:'bird',
     type: 'noun'

	},{
		word:'problem',
     type: 'noun'

	},{
		word:'literature',
     type: 'noun'

	},{
		word:'software',
     type: 'noun'

	},{
		word:'control',
     type: 'noun'

	},{
		word:'knowledge',
     type: 'noun'

	},{
		word:'power',
     type: 'noun'

	},{
		word:'ability',
     type: 'noun'

	},{
		word:'economics',
     type: 'noun'

	},{
		word:'love',
     type: 'noun'

	},{
		word:'internet',
     type: 'noun'

	},{
		word:'television',
     type: 'noun'

	},{
		word:'science',
     type: 'noun'

	},{
		word:'library',
     type: 'noun'

	},{
		word:'nature',
     type: 'noun'

	},{
		word:'fact',
     type: 'noun'

	},{
		word:'product',
     type: 'noun'

	},{
		word:'idea',
     type: 'noun'

	},{
		word:'temperature',
     type: 'noun'

	},{
		word:'investment',
     type: 'noun'

	},{
		word:'area',
     type: 'noun'

	},{
		word:'society',
     type: 'noun'

	},{
		word:'activity',
     type: 'noun'

	},{
		word:'story',
     type: 'noun'

	},{
		word:'industry',
     type: 'noun'

	},{
		word:'media',
     type: 'noun'

	},{
		word:'thing',
     type: 'noun'

	},{
		word:'oven',
     type: 'noun'

	},{
		word:'community',
     type: 'noun'

	},{
		word:'defination',
     type: 'noun'

	},{
		word:'safety',
     type: 'noun'

	},{
		word:'quality',
     type: 'noun'

	},{
		word:'development',
     type: 'noun'

	},{
		word:'language',
     type: 'noun'

	},{
		word:'management',
     type: 'noun'

	},{
		word:'player',
     type: 'noun'

	},{
		word:'variety',
     type: 'noun'

	},{
		word:'video',
     type: 'noun'

	},{
		word:'week',
     type: 'noun'

	},{
		word:'security',
     type: 'noun'

	},{
		word:'country',
     type: 'noun'

	},{
		word:'exam',
     type: 'noun'

	},{
		word:'movie',
     type: 'noun'

	},{
		word:'organization',
     type: 'noun'

	},{
		word:'equipment',
     type: 'noun'

	},{
		word:'physics',
     type: 'noun'

	},{
		word:'analysis',
     type: 'noun'

	},{
		word:'policy',
     type: 'noun'
	},{
		word:'series',
     type: 'noun'

	},{
		word:'thought',
     type: 'noun'

	},{
		word:'basis',
     type: 'noun'

	},{
		word:'boyfriend',
     type: 'noun'

	},{
		word:'direction',
     type: 'noun'

	},{
		word:'strategy',
     type: 'noun'

	},{
		word:'technology',
     type: 'noun'

	},{
		word:'army',
     type: 'noun'

	},{
		word:'camera',
     type: 'noun'

	},{
		word:'freedom',
     type: 'noun'

	},{
		word:'paper',
     type: 'noun'

	},{
		word:'environment',
     type: 'noun'

	},{
		word:'child',
     type: 'noun'

	},{
		word:'instance',
     type: 'noun'

	},{
		word:'month',
     type: 'noun'

	},{
		word:'truth',
     type: 'noun'

	},{
		word:'marketing',
     type: 'noun'

	},{
		word:'university',
     type: 'noun'

	},{
		word:'writing',
     type: 'noun'

	},{
		word:'article',
     type: 'noun'

	},{
		word:'department',
     type: 'noun'

	},{
		word:'difference',
     type: 'noun'

	},{
		word:'goal',
     type: 'noun'

	},{
		word:'news',
     type: 'noun'

	},{
		word:'audience',
     type: 'noun'

	},{
		word:'fishing',
     type: 'noun'

	},{
		word:'growth',
     type: 'noun'

	},{
		word:'income',
     type: 'noun'

	},{
		word:'marriage',
     type: 'noun'

	},{
		word:'user',
     type: 'noun'

	},{
		word:'combination',
     type: 'noun'

	},{
		word:'failure',
     type: 'noun'

	},{
		word:'meaning',
     type: 'noun'

	},{
		word:'teacher',
     type: 'noun'

	},{
		word:'medicine',
     type: 'noun'

	},{
		word:'philosophy',
     type: 'noun'

	},{
		word:'communication',
     type: 'noun'

	},{
		word:'night',
     type: 'noun'

	},{
		word:'chemistry',
     type: 'noun'

	},{
		word:'disease',
     type: 'noun'

	},{
		word:'disk',
     type: 'noun'

	},{
		word:'energy',
     type: 'noun'

	},{
		word:'nation',
     type: 'noun'

	},{
		word:'road',
     type: 'noun'

	},{
		word:'role',
     type: 'noun'

	},{
		word:'soup',
     type: 'noun'

	},{
		word:'advertising',
     type: 'noun'

	},{
		word:'location',
     type: 'noun'

	},{
		word:'success',
     type: 'noun'

	},{
		word:'addition',
     type: 'noun'

	},{
		word:'apartment',
     type: 'noun'

	},{
		word:'education',
     type: 'noun'

	},{
		word:'math',
     type: 'noun'

	},{
		word:'moment',
     type: 'noun'

	},{
		word:'painting',
     type: 'noun'

	},{
		word:'politios',
     type: 'noun'

	},{
		word:'attentation',
     type: 'noun'

	},{
		word:'decision',
     type: 'noun'

	},{
		word:'event',
     type: 'noun'

	},{
		word:'property',
     type: 'noun'

	},{
		word:'shopping',
     type: 'noun'

	},{
		word:'student',
     type: 'noun'

	},{
		word:'wood',
     type: 'noun'

	},{
		word:'competition',
     type: 'noun'

	},{
		word:'distribution',
     type: 'noun'

	},{
		word:'entertainment',
     type: 'noun'

	},{
		word:'office',
     type: 'noun'

	},{
		word:'population',
     type: 'noun'

	},{
		word:'president',
     type: 'noun'

	},{
		word:'unit',
     type: 'noun'

	},{
		word:'category',
     type: 'noun'

	},{
		word:'cigarette',
     type: 'noun'

	},{
		word:'context',
     type: 'noun'

	},{
		word:'introduction',
     type: 'noun'

	},{
		word:'opportunity',
     type: 'noun'
	},{
		word:'performance',
     type: 'noun'

	},{
		word:'driver',
     type: 'noun'

	},{
		word:'flight',
     type: 'noun'

	},{
		word:'lenght',
     type: 'noun'

	},{
		word:'magazine',
     type: 'noun'

	},{
		word:'newspaper',
     type: 'noun'

	},{
		word:'relationship',
     type: 'noun'

	},{
		word:'teaching',
     type: 'noun'

	},{
		word:'cell',
     type: 'noun'

	},{
		word:'dealer',
     type: 'noun'

	},{
		word:'finding',
     type: 'noun'

	},{
		word:'lake',
     type: 'noun'

	},{
		word:'member',
     type: 'noun'

	},{
		word:'message',
     type: 'noun'

	},{
		word:'phone',
     type: 'noun'

	},{
		word:'scene',
     type: 'noun'

	},{
		word:'appearance',
     type: 'noun'

	},{
		word:'association',
     type: 'noun'

	},{
		word:'concept',
     type: 'noun'

	},{
		word:'customer',
     type: 'noun'

	},{
		word:'death',
     type: 'noun'

	},{
		word:'discussion',
     type: 'noun'

	},{
		word:'housing',
     type: 'noun'

	},{
		word:'inflation',
     type: 'noun'

	},{
		word:'insurance',
     type: 'noun'

	},{
		word:'mood',
     type: 'noun'

	},{
		word:'woman',
     type: 'noun'

	},{
		word:'advice',
     type: 'noun'

	},{
		word:'blood',
     type: 'noun'

	},{
		word:'effort',
     type: 'noun'

	},{
		word:'expression',
     type: 'noun'

	},{
		word:'importance',
     type: 'noun'

	},{
		word:'opinion',
     type: 'noun'

	},{
		word:'payment',
     type: 'noun'

	},{
		word:'reality',
     type: 'noun'

	},{
		word:'responsibility',
     type: 'noun'

	},{
		word:'situation',
     type: 'noun'

	},{
		word:'skill',
     type: 'noun'

	},{
		word:'statement',
     type: 'noun'

	},{
		word:'wealth',
     type: 'noun'

	},{
		word:'application',
     type: 'noun'

	},{
		word:'city',
     type: 'noun'

	},{
		word:'country',
     type: 'noun'

	},{
		word:'depth',
     type: 'noun'

	},{
		word:'estate',
     type: 'noun'

	},{
		word:'foundation',
     type: 'noun'

	},{
		word:'grandmother',
     type: 'noun'

	},{
		word:'heart',
     type: 'noun'

	},{
		word:'perspective',
     type: 'noun'

	},{
		word:'photo',
     type: 'noun'

	},{
		word:'recipe',
     type: 'noun'

	},{
		word:'studio',
     type: 'noun'

	},{
		word:'topic',
     type: 'noun'

	},{
		word:'collection',
     type: 'noun'

	},{
		word:'depression',
     type: 'noun'

	},{
		word:'imagination',
     type: 'noun'

	},{
		word:'passion',
     type: 'noun'

	},{
		word:'percentage',
     type: 'noun'

	},{
		word:'resource',
     type: 'noun'

	},{
		word:'setting',
     type: 'noun'

	},{
		word:'ad',
     type: 'noun'

	},{
		word:'agency',
     type: 'noun'

	},{
		word:'college',
     type: 'noun'

	},{
		word:'connection',
     type: 'noun'

	},{
		word:'critism',
     type: 'noun'

	},{
		word:'debt',
     type: 'noun'

	},{
		word:'description',
     type: 'noun'

	},{
		word:'memory',
     type: 'noun'

	},{
		word:'patience',
     type: 'noun'

	},{
		word:'secretary',
     type: 'noun'

	},{
		word:'solution',
     type: 'noun'

	},{
		word:'administration',
     type: 'noun'

	},{
		word:'aspect',
     type: 'noun'

	},{
		word:'attitude',
     type: 'noun'

	},{
		word:'director',
     type: 'noun'

	},{
		word:'personality',
     type: 'noun'

	},{
		word:'psychology',
     type: 'noun'

	},{
		word:'recommendation',
     type: 'noun'

	},{
		word:'response',
     type: 'noun'

	},{
		word:'selection',
     type: 'noun'

	},{
		word:'storage',
     type: 'noun'

	},{
		word:'version',
     type: 'noun'

	},{
		word:'alcohol',
     type: 'noun'

	},{
		word:'argument',
     type: 'noun'

	},{
		word:'complaint',
     type: 'noun'

	},{
		word:'contract',
     type: 'noun'

	},{
		word:'emphasis',
     type: 'noun'

	},{
		word:'highway',
     type: 'noun'

	},{
		word:'loss',
     type: 'noun'

	},{
		word:'membership',
     type: 'noun'

	},{
		word:'possession',
     type: 'noun'

	},{
		word:'preparation',
     type: 'noun'

	},{
		word:'steak',
     type: 'noun'

	},{
		word:'union',
     type: 'noun'

	},{
		word:'agreement',
     type: 'noun'

	},{
		word:'cancer',
     type: 'noun'

	},{
		word:'currency',
     type: 'noun'

	},{
		word:'employment',
     type: 'noun'

	},{
		word:'engineering',
     type: 'noun'

	},{
		word:'entry',
     type: 'noun'

	},{
		word:'interaction',
     type: 'noun'

	},{
		word:'mixture',
     type: 'noun'

	},{
		word:'preference',
     type: 'noun'

	},{
		word:'region',
     type: 'noun'

	},{
		word:'republic',
     type: 'noun'

	},{
		word:'tradition',
     type: 'noun'

	},{
		word:'virus',
     type: 'noun'

	},{
		word:'actor',
     type: 'noun'

	},{
		word:'classroom',
     type: 'noun'

	},{
		word:'delivery',
     type: 'noun'

	},{
		word:'device',
     type: 'noun'

	},{
		word:'difficulty',
     type: 'noun'

	},{
		word:'drama',
     type: 'noun'

	},{
		word:'election',
     type: 'noun'

	},{
		word:'engine',
     type: 'noun'

	},{
		word:'football',
     type: 'noun'

	},{
		word:'guidance',
     type: 'noun'

	},{
		word:'hotel',
     type: 'noun'

	},{
		word:'owner',
     type: 'noun'

	},{
		word:'priority',
     type: 'noun'

	},{
		word:'protection',
     type: 'noun'

	},{
		word:'suggestion',
     type: 'noun'

	},{
		word:'tension',
     type: 'noun'

	},{
		word:'variation',
     type: 'noun'

	},{
		word:'anxiety',
     type: 'noun'

	},{
		word:'atmosphere',
     type: 'noun'

	},{
		word:'awareness',
     type: 'noun'

	},{
		word:'bath',
     type: 'noun'

	},{
		word:'bread',
     type: 'noun'

	},{
		word:'candidate',
     type: 'noun'

	},{
		word:'climate',
     type: 'noun'

	},{
		word:'comparasion',
     type: 'noun'

	},{
		word:'confusion',
     type: 'noun'

	},{
		word:'construction',
     type: 'noun'

	},{
		word:'elevator',
     type: 'noun'

	},{
		word:'emotion',
     type: 'noun'

	},{
		word:'employee',
     type: 'noun'

	},{
		word:'employer',
     type: 'noun'

	},{
		word:'guest',
     type: 'noun'

	},{
		word:'height',
     type: 'noun'

	},{
		word:'leadership',
     type: 'noun'

	},{
		word:'mall',
     type: 'noun'

	},{
		word:'manager',
     type: 'noun'

	},{
		word:'operation',
     type: 'noun'

	},{
		word:'recording',
     type: 'noun'

	},{
		word:'sample',
     type: 'noun'

	},{
		word:'transportion',
     type: 'noun'

	},{
		word:'charity',
     type: 'noun'

	},{
		word:'cousin',
     type: 'noun'

	},{
		word:'disaster',
     type: 'noun'

	},{
		word:'editor',
     type: 'noun'

	},{
		word:'efficiency',
     type: 'noun'

	},{
		word:'excitement',
     type: 'noun'

	},{
		word:'extent',
     type: 'noun'

	},{
		word:'feedback',
     type: 'noun'

	},{
		word:'guitar',
     type: 'noun'

	},{
		word:'homework',
     type: 'noun'

	},{
		word:'leader',
     type: 'noun'

	},{
		word:'mom',
     type: 'noun'

	},{
		word:'outcome',
     type: 'noun'

	},{
		word:'permission',
     type: 'noun'

	},{
		word:'presentation',
     type: 'noun'

	},{
		word:'promotion',
     type: 'noun'

	},{
		word:'reflection',
     type: 'noun'

	},{
		word:'refrigerator',
     type: 'noun'

	},{
		word:'resolution',
     type: 'noun'

	},{
		word:'revenue',
     type: 'noun'

	},{
		word:'session',
     type: 'noun'

	},{
		word:'singer',
     type: 'noun'

	},{
		word:'tennis',
     type: 'noun'

	},{
		word:'basket',
     type: 'noun'

	},{
		word:'bonus',
     type: 'noun'

	},{
		word:'cabinet',
     type: 'noun'

	},{
		word:'childhood',
     type: 'noun'

	},{
		word:'church',
     type: 'noun'

	},{
		word:'clothes',
     type: 'noun'

	},{
		word:'coffee',
     type: 'noun'

	},{
		word:'dinner',
     type: 'noun'

	},{
		word:'drawing',
     type: 'noun'

	},{
		word:'hair',
     type: 'noun'

	},{
		word:'hearing',
     type: 'noun'

	},{
		word:'initiative',
     type: 'noun'

	},{
		word:'judgment',
     type: 'noun'
	},{
		word:'lab',
     type: 'noun'

	},{
		word:'measurement',
     type: 'noun'

	},{
		word:'mode',
     type: 'noun'

	},{
		word:'mud',
     type: 'noun'

	},{
		word:'orange',
     type: 'noun'

	},{
		word:'poetry',
     type: 'noun'

	},{
		word:'police',
     type: 'noun'

	},{
		word:'possibility',
     type: 'noun'

	},{
		word:'procedure',
     type: 'noun'

	},{
		word:'queen',
     type: 'noun'

	},{
		word:'ratio',
     type: 'noun'

	},{
		word:'relation',
     type: 'noun'

	},{
		word:'restaurant',
     type: 'noun'

	},{
		word:'satisfaction',
     type: 'noun'

	},{
		word:'sector',
     type: 'noun'

	},{
		word:'signature',
     type: 'noun'

	},{
		word:'significance',
     type: 'noun'

	},{
		word:'song',
     type: 'noun'

	},{
		word:'tooth',
     type: 'noun'

	},{
		word:'town',
     type: 'noun'

	},{
		word:'vehicle',
     type: 'noun'

	},{
		word:'volume',
     type: 'noun'

	},{
		word:'wife',
     type: 'noun'

	},{
		word:'accident',
     type: 'noun'

	},{
		word:'airpot',
     type: 'noun'

	},{
		word:'appointment',
     type: 'noun'

	},{
		word:'arrival',
     type: 'noun'

	},{
		word:'assumption',
     type: 'noun'

	},{
		word:'baseball',
     type: 'noun'

	},{
		word:'chapter',
     type: 'noun'

	},{
		word:'committee',
     type: 'noun'

	},{
		word:'conversation',
     type: 'noun'

	},{
		word:'database',
     type: 'noun'

	},{
		word:'enthusiasm',
     type: 'noun'

	},{
		word:'error',
     type: 'noun'

	},{
		word:'explanation',
     type: 'noun'

	},{
		word:'farmer',
     type: 'noun'

	},{
		word:'gate',
     type: 'noun'

	},{
		word:'girl',
     type: 'noun'

	},{
		word:'hall',
     type: 'noun'

	},{
		word:'historian',
     type: 'noun'

	},{
		word:'hospital',
     type: 'noun'

	},{
		word:'injury',
     type: 'noun'

	},{
		word:'instruction',
     type: 'noun'

	},{
		word:'maintenance',
     type: 'noun'

	},{
		word:'meal',
     type: 'noun'

	},{
		word:'manufacture',
     type: 'noun'

	},{
		word:'meal',
     type: 'noun'

	},{
		word:'perception',
     type: 'noun'

	},{
		word:'pie',
     type: 'noun'

	},{
		word:'poem',
     type: 'noun'

	},{
		word:'presence',
     type: 'noun'

	},{
		word:'proposal',
     type: 'noun'

	},{
		word:'reception',
     type: 'noun'

	},{
		word:'replacement',
     type: 'noun'

	},{
		word:'revolution',
     type: 'noun'

	},{
		word:'river',
     type: 'noun'

	},{
		word:'son',
     type: 'noun'

	},{
		word:'speach',
     type: 'noun'

	},{
		word:'tea',
     type: 'noun'

	},{
		word:'village',
     type: 'noun'

	},{
		word:'warning',
     type: 'noun'

	},{
		word:'winner',
     type: 'noun'

	},{
		word:'worker',
     type: 'noun'

	},{
		word:'writer',
     type: 'noun'

	},{
		word:'assistance',
     type: 'noun'

	},{
		word:'breath',
     type: 'noun'

	},{
		word:'buyer',
     type: 'noun'

	},{
		word:'chest',
     type: 'noun'

	},{
		word:'chocolate',
     type: 'noun'

	},{
		word:'conclusion',
     type: 'noun'

	},{
		word:'contribution',
     type: 'noun'

	},{
		word:'cookie',
     type: 'noun'

	},{
		word:'courage',
     type: 'noun'

	},{
		word:'dad',
     type: 'noun'
	},{
		word:'desk',
     type: 'noun'

	},{
		word:'drawer',
     type: 'noun'

	},{
		word:'establishment',
     type: 'noun'

	},{
		word:'examination',
     type: 'noun'

	},{
		word:'garbage',
     type: 'noun'

	},{
		word:'grocery',
     type: 'noun'

	},{
		word:'honey',
     type: 'noun'

	},{
		word:'impression',
     type: 'noun'

	},{
		word:'improvement',
     type: 'noun'

	},{
		word:'independance',
     type: 'noun'

	},{
		word:'insect',
     type: 'noun'

	},{
		word:'inspection',
     type: 'noun'

	},{
		word:'inspector',
     type: 'noun'

	},{
		word:'king',
     type: 'noun'

	},{
		word:'ladder',
     type: 'noun'

	},{
		word:'menu',
     type: 'noun'

	},{
		word:'penalty',
     type: 'noun'

	},{
		word:'piano',
     type: 'noun'

	},{
		word:'potato',
     type: 'noun'

	},{
		word:'profession',
     type: 'noun'

	},{
		word:'professor',
     type: 'noun'

	},{
		word:'quantity',
     type: 'noun'

	},{
		word:'reaction',
     type: 'noun'

	},{
		word:'requirement',
     type: 'noun'

	},{
		word:'salad',
     type: 'noun'

	},{
		word:'sister',
     type: 'noun'

	},{
		word:'supermarket',
     type: 'noun'

	},{
		word:'tongue',
     type: 'noun'

	},{
		word:'waekness',
     type: 'noun'

	},{
		word:'wedding',
     type: 'noun'

	},{
		word:'affair',
     type: 'noun'

	},{
		word:'ambition',
     type: 'noun'

	},{
		word:'analyst',
     type: 'noun'

	},{
		word:'apple',
     type: 'noun'

	},{
		word:'assignment',
     type: 'noun'

	},{
		word:'assistant',
     type: 'noun'

	},{
		word:'bathroom',
     type: 'noun'

	},{
		word:'bedroom',
     type: 'noun'

	},{
		word:'beer',
     type: 'noun'

	},{
		word:'birthday',
     type: 'noun'

	},{
		word:'celebration',
     type: 'noun'

	},{
		word:'championship',
     type: 'noun'

	},{
		word:'cheek',
     type: 'noun'

	},{
		word:'client',
     type: 'noun'

	},{
		word:'consequence',
     type: 'noun'

	},{
		word:'departure',
     type: 'noun'

	},{
		word:'diamond',
     type: 'noun'

	},{
		word:'dirt',
     type: 'noun'

	},{
		word:'ear',
     type: 'noun'

	},{
		word:'fortune',
     type: 'noun'

	},{
		word:'friendship',
     type: 'noun'

	},{
		word:'funeral',
     type: 'noun'

	},{
		word:'gene',
     type: 'noun'

	},{
		word:'girlfriend',
     type: 'noun'

	},{
		word:'hat',
     type: 'noun'

	},{
		word:'indication',
     type: 'noun'

	},{
		word:'intention',
     type: 'noun'

	},{
		word:'lady',
     type: 'noun'

	},{
		word:'midnight',
     type: 'noun'

	},{
		word:'negotiation',
     type: 'noun'

	},{
		word:'obligation',
     type: 'noun'

	},{
		word:'passenger',
     type: 'noun'

	},{
		word:'pizza',
     type: 'noun'

	},{
		word:'platform',
     type: 'noun'

	},{
		word:'poet',
     type: 'noun'

	},{
		word:'pollution',
     type: 'noun'

	},{
		word:'recognition',
     type: 'noun'

	},{
		word:'reputation',
     type: 'noun'

	},{
		word:'shirt',
     type: 'noun'

	},{
		word:'sir',
     type: 'noun'

	},{
		word:'speaker',
     type: 'noun'

	},{
		word:'starnger',
     type: 'noun'

	},{
		word:'surgery',
     type: 'noun'

	},{
		word:'symphaty',
     type: 'noun'

	},{
		word:'tale',
     type: 'noun'

	},{
		word:'throat',
     type: 'noun'

	},{
		word:'trainer',
     type: 'noun'

	},{
		word:'uncle',
     type: 'noun'

	},{
		word:'youth',
     type: 'noun'

	},{
		word:'time',
     type: 'noun'

	},{
		word:'work',
     type: 'noun'

	},{
		word:'film',
     type: 'noun'

	},{
		word:'water',
     type: 'noun'

	},{
		word:'money',
     type: 'noun'

	},{
		word:'example',
     type: 'noun'

	},{
		word:'whlie',
     type: 'noun'

	},{
		word:'business',
     type: 'noun'

	},{
		word:'study',
     type: 'noun'

	},{
		word:'game',
     type: 'noun'

	},{
		word:'life',
     type: 'noun'

	},{
		word:'form',
     type: 'noun'

	},{
		word:'air',
     type: 'noun'

	},{
		word:'day',
     type: 'noun'

	},{
		word:'place',
     type: 'noun'

	},{
		word:'number',
     type: 'noun'

	},{
		word:'part',
     type: 'noun'

	},{
		word:'field',
     type: 'noun'

	},{
		word:'fish',
     type: 'noun'

	},{
		word:'back',
     type: 'noun'

	},{
		word:'process',
     type: 'noun'

	},{
		word:'heat',
     type: 'noun'

	},{
		word:'hand',
     type: 'noun'

	},{
		word:'experience',
     type: 'noun'

	},{
		word:'job',
     type: 'noun'

	},{
		word:'book',
     type: 'noun'

	},{
		word:'end',
     type: 'noun'

	},{
		word:'point',
     type: 'noun'

	},{
		word:'type',
     type: 'noun'

	},{
		word:'home',
     type: 'noun'

	},{
		word:'economy',
     type: 'noun'

	},{
		word:'value',
     type: 'noun'

	},{
		word:'body',
     type: 'noun'

	},{
		word:'market',
     type: 'noun'

	},{
		word:'guide',
     type: 'noun'

	},{
		word:'interest',
     type: 'noun'

	},{
		word:'state',
     type: 'noun'

	},{
		word:'radio',
     type: 'noun'

	},{
		word:'course',
     type: 'noun'

	},{
		word:'company',
     type: 'noun'

	},{
		word:'price',
     type: 'noun'

	},{
		word:'size',
     type: 'noun'

	},{
		word:'card',
     type: 'noun'

	},{
		word:'list',
     type: 'noun'

	},{
		word:'mind',
     type: 'noun'

	},{
		word:'trade',
     type: 'noun'

	},{
		word:'line',
     type: 'noun'

	},{
		word:'care',
     type: 'noun'

	},{
		word:'group',
     type: 'noun'

	},{
		word:'risk',
     type: 'noun'

	},{
		word:'word',
     type: 'noun'

	},{
		word:'fat',
     type: 'noun'

	},{
		word:'force',
     type: 'noun'

	},{
		word:'key',
     type: 'noun'

	},{
		word:'light',
     type: 'noun'

	},{
		word:'training',
     type: 'noun'

	},{
		word:'name',
     type: 'noun'

	},{
		word:'school',
     type: 'noun'

	},{
		word:'top',
     type: 'noun'

	},{
		word:'amount',
     type: 'noun'

	},{
		word:'level',
     type: 'noun'

	},{
		word:'order',
     type: 'noun'

	},{
		word:'practice',
     type: 'noun'

	},{
		word:'research',
     type: 'noun'

	},{
		word:'sense',
     type: 'noun'

	},{
		word:'service',
     type: 'noun'

	},{
		word:'piece',
     type: 'noun'

	},{
		word:'web',
     type: 'noun'

	},{
		word:'boss',
     type: 'noun'

	},{
		word:'sport',
     type: 'noun'

	},{
		word:'fun',
     type: 'noun'

	},{
		word:'house',
     type: 'noun'

	},{
		word:'page',
     type: 'noun'

	},{
		word:'term',
     type: 'noun'

	},{
		word:'test',
     type: 'noun'

	},{
		word:'answer',
     type: 'noun'

	},{
		word:'sound',
     type: 'noun'

	},{
		word:'focus',
     type: 'noun'

	},{
		word:'matter',
     type: 'noun'

	},{
		word:'kind',
     type: 'noun'

	},{
		word:'soil',
     type: 'noun'

	},{
		word:'board',
     type: 'noun'

	},{
		word:'oil',
     type: 'noun'

	},{
		word:'picture',
     type: 'noun'

	},{
		word:'access',
     type: 'noun'

	},{
		word:'garden',
     type: 'noun'

	},{
		word:'range',
     type: 'noun'

	},{
		word:'rate',
     type: 'noun'

	},{
		word:'reason',
     type: 'noun'

	},{
		word:'future',
     type: 'noun'

	},{
		word:'site',
     type: 'noun'

	},{
		word:'demand',
     type: 'noun'

	},{
		word:'exercise',
     type: 'noun'

	},{
		word:'image',
     type: 'noun'

	},{
		word:'case',
     type: 'noun'

	},{
		word:'cause',
     type: 'noun'

	},{
		word:'coast',
     type: 'noun'

	},{
		word:'action',
     type: 'noun'

	},{
		word:'age',
     type: 'noun'

	},{
		word:'bad',
     type: 'noun'

	},{
		word:'boat',
     type: 'noun'

	},{
		word:'record',
     type: 'noun'

	},{
		word:'result',
     type: 'noun'

	},{
		word:'section',
     type: 'noun'

	},{
		word:'building',
     type: 'noun'

	},{
		word:'mouse',
     type: 'noun'

	},{
		word:'cash',
     type: 'noun'

	},{
		word:'class',
     type: 'noun'

	},{
		word:'nothing',
     type: 'noun'

	},{
		word:'period',
     type: 'noun'

	},{
		word:'plan',
     type: 'noun'

	},{
		word:'store',
     type: 'noun'

	},{
		word:'tax',
     type: 'noun'

	},{
		word:'side',
     type: 'noun'

	},{
		word:'subject',
     type: 'noun'

	},{
		word:'space',
     type: 'noun'

	},{
		word:'rule',
     type: 'noun'

	},{
		word:'stock',
     type: 'noun'

	},{
		word:'weather',
     type: 'noun'

	},{
		word:'chance',
     type: 'noun'

	},{
		word:'figure',
     type: 'noun'

	},{
		word:'man',
     type: 'noun'

	},{
		word:'model',
     type: 'noun'

	},{
		word:'source',
     type: 'noun'

	},{
		word:'beginning',
     type: 'noun'

	},{
		word:'earth',
     type: 'noun'

	},{
		word:'program',
     type: 'noun'

	},{
		word:'chicken',
     type: 'noun'

	},{
		word:'design',
     type: 'noun'

	},{
		word:'feature',
     type: 'noun'

	},{
		word:'head',
     type: 'noun'

	},{
		word:'material',
     type: 'noun'

	},{
		word:'purpose',
     type: 'noun'

	},{
		word:'question',
     type: 'noun'

	},{
		word:'rock',
     type: 'noun'

	},{
		word:'salt',
     type: 'noun'

	},{
		word:'act',
     type: 'noun'

	},{
		word:'birth',
     type: 'noun'

	},{
		word:'car',
     type: 'noun'

	},{
		word:'dog',
     type: 'noun'

	},{
		word:'object',
     type: 'noun'

	},{
		word:'scale',
     type: 'noun'

	},{
		word:'sun',
     type: 'noun'

	},{
		word:'note',
     type: 'noun'

	},{
		word:'profit',
     type: 'noun'

	},{
		word:'rent',
     type: 'noun'

	},{
		word:'speed',
     type: 'noun'

	},{
		word:'style',
     type: 'noun'

	},{
		word:'war',
     type: 'noun'

	},{
		word:'bank',
     type: 'noun'

	},{
		word:'craft',
     type: 'noun'

	},{
		word:'half',
     type: 'noun'

	},{
		word:'inside',
     type: 'noun'

	},{
		word:'outside',
     type: 'noun'

	},{
		word:'standard',
     type: 'noun'

	},{
		word:'bus',
     type: 'noun'

	},{
		word:'exchange',
     type: 'noun'

	},{
		word:'eye',
     type: 'noun'

	},{
		word:'fire',
     type: 'noun'

	},{
		word:'position',
     type: 'noun'

	},{
		word:'pressure',
     type: 'noun'

	},{
		word:'stress',
     type: 'noun'

	},{
		word:'advantage',
     type: 'noun'

	},{
		word:'benefit',
     type: 'noun'

	},{
		word:'box',
     type: 'noun'

	},{
		word:'frame',
     type: 'noun'

	},{
		word:'issue',
     type: 'noun'

	},{
		word:'step',
     type: 'noun'

	},{
		word:'cycle',
     type: 'noun'

	},{
		word:'face',
     type: 'noun'

	},{
		word:'item',
     type: 'noun'

	},{
		word:'metal',
     type: 'noun'

	},{
		word:'paint',
     type: 'noun'

	},{
		word:'review',
     type: 'noun'

	},{
		word:'room',
     type: 'noun'

	},{
		word:'screen',
     type: 'noun'

	},{
		word:'structure',
     type: 'noun'

	},{
		word:'view',
     type: 'noun'

	},{
		word:'account',
     type: 'noun'
	},{
		word:'ball',
     type: 'noun'

	},{
		word:'discipline',
     type: 'noun'

	},{
		word:'medium',
     type: 'noun'

	},{
		word:'share',
     type: 'noun'

	},{
		word:'balance',
     type: 'noun'

	},{
		word:'bit',
     type: 'noun'

	},{
		word:'black',
     type: 'noun'

	},{
		word:'bottom',
     type: 'noun'

	},{
		word:'choice',
     type: 'noun'

	},{
		word:'gift',
     type: 'noun'

	},{
		word:'impact',
     type: 'noun'

	},{
		word:'machine',
     type: 'noun'

	},{
		word:'shape',
     type: 'noun'

	},{
		word:'tool',
     type: 'noun'

	},{
		word:'wind',
     type: 'noun'

	},{
		word:'address',
     type: 'noun'

	},{
		word:'average',
     type: 'noun'

	},{
		word:'career',
     type: 'noun'

	},{
		word:'culture',
     type: 'noun'

	},{
		word:'morning',
     type: 'noun'

	},{
		word:'pot',
     type: 'noun'

	},{
		word:'sign',
     type: 'noun'

	},{
		word:'table',
     type: 'noun'

	},{
		word:'task',
     type: 'noun'

	},{
		word:'condition',
     type: 'noun'

	},{
		word:'contact',
     type: 'noun'

	},{
		word:'credit',
     type: 'noun'

	},{
		word:'egg',
     type: 'noun'

	},{
		word:'hope',
     type: 'noun'

	},{
		word:'ice',
     type: 'noun'

	},{
		word:'network',
     type: 'noun'

	},{
		word:'north',
     type: 'noun'

	},{
		word:'square',
     type: 'noun'

	},{
		word:'attempt',
     type: 'noun'

	},{
		word:'date',
     type: 'noun'

	},{
		word:'effect',
     type: 'noun'

	},{
		word:'link',
     type: 'noun'

	},{
		word:'post',
     type: 'noun'

	},{
		word:'star',
     type: 'noun'

	},{
		word:'voice',
     type: 'noun'

	},{
		word:'capital',
     type: 'noun'

	},{
		word:'challenge',
     type: 'noun'

	},{
		word:'friend',
     type: 'noun'

	},{
		word:'self',
     type: 'noun'

	},{
		word:'shot',
     type: 'noun'

	},{
		word:'brush',
     type: 'noun'

	},{
		word:'couple',
     type: 'noun'

	},{
		word:'debate',
     type: 'noun'

	},{
		word:'exit',
     type: 'noun'

	},{
		word:'front',
     type: 'noun'

	},{
		word:'function',
     type: 'noun'

	},{
		word:'lack',
     type: 'noun'

	},{
		word:'living',
     type: 'noun'

	},{
		word:'plant',
     type: 'noun'

	},{
		word:'plastic',
     type: 'noun'

	},{
		word:'spot',
     type: 'noun'

	},{
		word:'summer',
     type: 'noun'

	},{
		word:'taste',
     type: 'noun'

	},{
		word:'theme',
     type: 'noun'

	},{
		word:'track',
     type: 'noun'

	},{
		word:'wing',
     type: 'noun'

	},{
		word:'brain',
     type: 'noun'

	},{
		word:'button',
     type: 'noun'

	},{
		word:'click',
     type: 'noun'

	},{
		word:'desire',
     type: 'noun'

	},{
		word:'foot',
     type: 'noun'

	},{
		word:'gas',
     type: 'noun'

	},{
		word:'influence',
     type: 'noun'

	},{
		word:'notice',
     type: 'noun'

	},{
		word:'rain',
     type: 'noun'

	},{
		word:'wall',
     type: 'noun'

	},{
		word:'base',
     type: 'noun'

	},{
		word:'damage',
     type: 'noun'

	},{
		word:'distance',
     type: 'noun'

	},{
		word:'feeling',
     type: 'noun'

	},{
		word:'pair',
     type: 'noun'

	},{
		word:'savings',
     type: 'noun'

	},{
		word:'staff',
     type: 'noun'

	},{
		word:'sugar',
     type: 'noun'

	},{
		word:'target',
     type: 'noun'

	},{
		word:'text',
     type: 'noun'

	},{
		word:'animal',
     type: 'noun'

	},{
		word:'author',
     type: 'noun'

	},{
		word:'budget',
     type: 'noun'

	},{
		word:'discount',
     type: 'noun'

	},{
		word:'file',
     type: 'noun'

	},{
		word:'ground',
     type: 'noun'

	},{
		word:'lesson',
     type: 'noun'

	},{
		word:'minute',
     type: 'noun'

	},{
		word:'officer',
     type: 'noun'

	},{
		word:'phase',
     type: 'noun'

	},{
		word:'reference',
     type: 'noun'

	},{
		word:'register',
     type: 'noun'

	},{
		word:'sky',
     type: 'noun'

	},{
		word:'stage',
     type: 'noun'

	},{
		word:'stick',
     type: 'noun'

	},{
		word:'title',
     type: 'noun'

	},{
		word:'trouble',
     type: 'noun'

	},{
		word:'bowl',
     type: 'noun'

	},{
		word:'bridge',
     type: 'noun'

	},{
		word:'campaign',
     type: 'noun'

	},{
		word:'character',
     type: 'noun'

	},{
		word:'club',
     type: 'noun'

	},{
		word:'edge',
     type: 'noun'

	},{
		word:'evidence',
     type: 'noun'

	},{
		word:'fan',
     type: 'noun'

	},{
		word:'letter',
     type: 'noun'

	},{
		word:'lock',
     type: 'noun'

	},{
		word:'maximum',
     type: 'noun'

	},{
		word:'novel',
     type: 'noun'

	},{
		word:'option',
     type: 'noun'

	},{
		word:'pack',
     type: 'noun'

	},{
		word:'park',
     type: 'noun'

	},{
		word:'plenty',
     type: 'noun'

	},{
		word:'qauter',
     type: 'noun'

	},{
		word:'skin',
     type: 'noun'

	},{
		word:'sort',
     type: 'noun'

	},{
		word:'weight',
     type: 'noun'

	},{
		word:'baby',
     type: 'noun'

	},{
		word:'background',
     type: 'noun'

	},{
		word:'carry',
     type: 'noun'

	},{
		word:'dish',
     type: 'noun'

	},{
		word:'factor',
     type: 'noun'

	},{
		word:'fruit',
     type: 'noun'

	},{
		word:'glass',
     type: 'noun'

	},{
		word:'joint',
     type: 'noun'

	},{
		word:'master',
     type: 'noun'

	},{
		word:'muscle',
     type: 'noun'

	},{
		word:'red',
     type: 'noun'

	},{
		word:'strenght',
     type: 'noun'

	},{
		word:'traffic',
     type: 'noun'

	},{
		word:'trip',
     type: 'noun'

	},{
		word:'vegetable',
     type: 'noun'

	},{
		word:'appeal',
     type: 'noun'

	},{
		word:'chart',
     type: 'noun'

	},{
		word:'gear',
     type: 'noun'

	},{
		word:'ideal',
     type: 'noun'

	},{
		word:'kitchen',
     type: 'noun'

	},{
		word:'land',
     type: 'noun'

	},{
		word:'log',
     type: 'noun'

	},{
		word:'mother',
     type: 'noun'

	},{
		word:'net',
     type: 'noun'

	},{
		word:'party',
     type: 'noun'

	},{
		word:'principle',
     type: 'noun'

	},{
		word:'relative',
     type: 'noun'

	},{
		word:'sale',
     type: 'noun'

	},{
		word:'season',
     type: 'noun'

	},{
		word:'signal',
     type: 'noun'

	},{
		word:'spirit',
     type: 'noun'

	},{
		word:'street',
     type: 'noun'

	},{
		word:'tree',
     type: 'noun'

	},{
		word:'wave',
     type: 'noun'

	},{
		word:'belt',
     type: 'noun'

	},{
		word:'bench',
     type: 'noun'

	},{
		word:'commission',
     type: 'noun'

	},{
		word:'copy',
     type: 'noun'

	},{
		word:'drop',
     type: 'noun'

	},{
		word:'minimum',
     type: 'noun'

	},{
		word:'path',
     type: 'noun'

	},{
		word:'progress',
     type: 'noun'

	},{
		word:'project',
     type: 'noun'

	},{
		word:'sea',
     type: 'noun'

	},{
		word:'south',
     type: 'noun'

	},{
		word:'status',
     type: 'noun'

	},{
		word:'stuff',
     type: 'noun'

	},{
		word:'ticket',
     type: 'noun'

	},{
		word:'tour',
     type: 'noun'

	},{
		word:'angle',
     type: 'noun'

	},{
		word:'blue',
     type: 'noun'

	},{
		word:'breakfast',
     type: 'noun'

	},{
		word:'confidence',
     type: 'noun'

	},{
		word:'daughter',
     type: 'noun'

	},{
		word:'degree',
     type: 'noun'

	},{
		word:'doctor',
     type: 'noun'

	},{
		word:'dot',
     type: 'noun'

	},{
		word:'dream',
     type: 'noun'

	},{
		word:'duty',
     type: 'noun'

	},{
		word:'essay',
     type: 'noun'

	},{
		word:'father',
     type: 'noun'

	},{
		word:'fee',
     type: 'noun'

	},{
		word:'finance',
     type: 'noun'

	},{
		word:'hour',
     type: 'noun'

	},{
		word:'juice',
     type: 'noun'
	},{
		word:'limit',
     type: 'noun'

	},{
		word:'luck',
     type: 'noun'

	},{
		word:'milk',
     type: 'noun'

	},{
		word:'mouth',
     type: 'noun'

	},{
		word:'peace',
     type: 'noun'

	},{
		word:'pipe',
     type: 'noun'

	},{
		word:'seat',
     type: 'noun'

	},{
		word:'stable',
     type: 'noun'

	},{
		word:'storm',
     type: 'noun'

	},{
		word:'substance',
     type: 'noun'

	},{
		word:'team',
     type: 'noun'

	},{
		word:'trick',
     type: 'noun'

	},{
		word:'afternoon',
     type: 'noun'

	},{
		word:'bat',
     type: 'noun'

	},{
		word:'beach',
     type: 'noun'

	},{
		word:'blank',
     type: 'noun'

	},{
		word:'catch',
     type: 'noun'

	},{
		word:'chain',
     type: 'noun'

	},{
		word:'consideration',
     type: 'noun'

	},{
		word:'cream',
     type: 'noun'

	},{
		word:'crew',
     type: 'noun'

	},{
		word:'detail',
     type: 'noun'

	},{
		word:'gold',
     type: 'noun'

	},{
		word:'interview',
     type: 'noun'

	},{
		word:'kid',
     type: 'noun'

	},{
		word:'mark',
     type: 'noun'

	},{
		word:'match',
     type: 'noun'

	},{
		word:'mission',
     type: 'noun'

	},{
		word:'pain',
     type: 'noun'

	},{
		word:'pleasure',
     type: 'noun'

	},{
		word:'score',
     type: 'noun'

	},{
		word:'screw',
     type: 'noun'

	},{
		word:'sex',
     type: 'noun'

	},{
		word:'shop',
     type: 'noun'

	},{
		word:'shower',
     type: 'noun'

	},{
		word:'suit',
     type: 'noun'

	},{
		word:'tone',
     type: 'noun'

	},{
		word:'window',
     type: 'noun'

	},{
		word:'agent',
     type: 'noun'

	},{
		word:'band',
     type: 'noun'

	},{
		word:'block',
     type: 'noun'

	},{
		word:'bone',
     type: 'noun'

	},{
		word:'calendar',
     type: 'noun'

	},{
		word:'cap',
     type: 'noun'

	},{
		word:'coat',
     type: 'noun'

	},{
		word:'contest',
     type: 'noun'

	},{
		word:'corner',
     type: 'noun'

	},{
		word:'court',
     type: 'noun'

	},{
		word:'cup',
     type: 'noun'

	},{
		word:'district',
     type: 'noun'

	},{
		word:'door',
     type: 'noun'

	},{
		word:'east',
     type: 'noun'

	},{
		word:'finger',
     type: 'noun'

	},{
		word:'garage',
     type: 'noun'

	},{
		word:'guarantee',
     type: 'noun'

	},{
		word:'hole',
     type: 'noun'

	},{
		word:'hook',
     type: 'noun'

	},{
		word:'implement',
     type: 'noun'

	},{
		word:'layer',
     type: 'noun'

	},{
		word:'lecture',
     type: 'noun'

	},{
		word:'lie',
     type: 'noun'

	},{
		word:'manner',
     type: 'noun'

	},{
		word:'meeting',
     type: 'noun'

	},{
		word:'nose',
     type: 'noun'

	},{
		word:'parking',
     type: 'noun'

	},{
		word:'partner',
     type: 'noun'

	},{
		word:'profile',
     type: 'noun'

	},{
		word:'respect',
     type: 'noun'

	},{
		word:'rice',
     type: 'noun'

	},{
		word:'routine',
     type: 'noun'

	},{
		word:'schedule',
     type: 'noun'

	},{
		word:'swimming',
     type: 'noun'

	},{
		word:'telephone',
     type: 'noun'

	},{
		word:'tip',
     type: 'noun'

	},{
		word:'winter',
     type: 'noun'
	},{
		word:'airline',
     type: 'noun'

	},{
		word:'bag',
     type: 'noun'

	},{
		word:'battle',
     type: 'noun'

	},{
		word:'bed',
     type: 'noun'

	},{
		word:'bill',
     type: 'noun'

	},{
		word:'bother',
     type: 'noun'

	},{
		word:'cake',
     type: 'noun'

	},{
		word:'curve',
     type: 'noun'

	},{
		word:'designer',
     type: 'noun'

	},{
		word:'dimension',
     type: 'noun'

	},{
		word:'dress',
     type: 'noun'

	},{
		word:'ease',
     type: 'noun'

	},{
		word:'emergency',
     type: 'noun'

	},{
		word:'evening',
     type: 'noun'

	},{
		word:'extension',
     type: 'noun'

	},{
		word:'farm',
     type: 'noun'

	},{
		word:'fight',
     type: 'noun'

	},{
		word:'gap',
     type: 'noun'

	},{
		word:'grade',
     type: 'noun'

	},{
		word:'holiday',
     type: 'noun'

	},{
		word:'horror',
     type: 'noun'

	},{
		word:'horse',
     type: 'noun'

	},{
		word:'host',
     type: 'noun'

	},{
		word:'husband',
     type: 'noun'

	},{
		word:'loan',
     type: 'noun'

	},{
		word:'mistake',
     type: 'noun'

	},{
		word:'nail',
     type: 'noun'

	},{
		word:'noise',
     type: 'noun'

	},{
		word:'occasion',
     type: 'noun'

	},{
		word:'package',
     type: 'noun'

	},{
		word:'patient',
     type: 'noun'

	},{
		word:'pause',
     type: 'noun'

	},{
		word:'phrase',
     type: 'noun'

	},{
		word:'proof',
     type: 'noun'

	},{
		word:'race',
     type: 'noun'

	},{
		word:'relief',
     type: 'noun'

	},{
		word:'sand',
     type: 'noun'

	},{
		word:'sentence',
     type: 'noun'

	},{
		word:'shoulder',
     type: 'noun'

	},{
		word:'smoke',
     type: 'noun'

	},{
		word:'stomach',
     type: 'noun'

	},{
		word:'string',
     type: 'noun'

	},{
		word:'tourist',
     type: 'noun'

	},{
		word:'towel',
     type: 'noun'

	},{
		word:'vacation',
     type: 'noun'

	},{
		word:'west',
     type: 'noun'

	},{
		word:'wheel',
     type: 'noun'

	},{
		word:'wine',
     type: 'noun'

	},{
		word:'arm',
     type: 'noun'

	},{
		word:'aside',
     type: 'noun'

	},{
		word:'associates',
     type: 'noun'

	},{
		word:'bet',
     type: 'noun'

	},{
		word:'blow',
     type: 'noun'

	},{
		word:'border',
     type: 'noun'

	},{
		word:'branch',
     type: 'noun'

	},{
		word:'breast',
     type: 'noun'

	},{
		word:'brother',
     type: 'noun'

	},{
		word:'buddy',
     type: 'noun'

	},{
		word:'bunch',
     type: 'noun'

	},{
		word:'chip',
     type: 'noun'

	},{
		word:'coach',
     type: 'noun'

	},{
		word:'cross',
     type: 'noun'

	},{
		word:'document',
     type: 'noun'

	},{
		word:'draft',
     type: 'noun'

	},{
		word:'dust',
     type: 'noun'

	},{
		word:'expert',
     type: 'noun'

	},{
		word:'floor',
     type: 'noun'

	},{
		word:'god',
     type: 'noun'

	},{
		word:'golf',
     type: 'noun'

	},{
		word:'habit',
     type: 'noun'

	},{
		word:'iron',
     type: 'noun'

	},{
		word:'judge',
     type: 'noun'

	},{
		word:'knife',
     type: 'noun'

	},{
		word:'landscape',
     type: 'noun'

	},{
		word:'league',
     type: 'noun'

	},{
		word:'mail',
     type: 'noun'

	},{
		word:'mess',
     type: 'noun'

	},{
		word:'native',
     type: 'noun'

	},{
		word:'opening',
     type: 'noun'

	},{
		word:'parent',
     type: 'noun'

	},{
		word:'pattern',
     type: 'noun'

	},{
		word:'pin',
     type: 'noun'

	},{
		word:'pool',
     type: 'noun'

	},{
		word:'pound',
     type: 'noun'

	},{
		word:'request',
     type: 'noun'

	},{
		word:'salary',
     type: 'noun'

	},{
		word:'shame',
     type: 'noun'

	},{
		word:'shelter',
     type: 'noun'

	},{
		word:'shoe',
     type: 'noun'

	},{
		word:'silver',
     type: 'noun'

	},{
		word:'tackle',
     type: 'noun'

	},{
		word:'tank',
     type: 'noun'

	},{
		word:'trust',
     type: 'noun'

	},{
		word:'assist',
     type: 'noun'

	},{
		word:'bake',
     type: 'noun'

	},{
		word:'bar',
     type: 'noun'

	},{
		word:'bell',
     type: 'noun'

	},{
		word:'bike',
     type: 'noun'

	},{
		word:'blame',
     type: 'noun'

	},{
		word:'boy',
     type: 'noun'

	},{
		word:'brick',
     type: 'noun'

	},{
		word:'chair',
     type: 'noun'

	},{
		word:'closet',
     type: 'noun'

	},{
		word:'clue',
     type: 'noun'

	},{
		word:'collar',
     type: 'noun'

	},{
		word:'comment',
     type: 'noun'

	},{
		word:'conference',
     type: 'noun'

	},{
		word:'devil',
     type: 'noun'

	},{
		word:'diet',
     type: 'noun'

	},{
		word:'fear',
     type: 'noun'

	},{
		word:'fuel',
     type: 'noun'

	},{
		word:'glove',
     type: 'noun'

	},{
		word:'jacket',
     type: 'noun'

	},{
		word:'lunch',
     type: 'noun'

	},{
		word:'monitor',
     type: 'noun'

	},{
		word:'mortgage',
     type: 'noun'

	},{
		word:'nurse',
     type: 'noun'

	},{
		word:'pace',
     type: 'noun'

	},{
		word:'panic',
     type: 'noun'

	},{
		word:'peak',
     type: 'noun'

	},{
		word:'plane',
     type: 'noun'

	},{
		word:'row',
     type: 'noun'

	},{
		word:'sandwich',
     type: 'noun'

	},{
		word:'shock',
     type: 'noun'

	},{
		word:'spite',
     type: 'noun'

	},{
		word:'spray',
     type: 'noun'

	},{
		word:'surprise',
     type: 'noun'

	},{
		word:'till',
     type: 'noun'

	},{
		word:'transition',
     type: 'noun'

	},{
		word:'weekend',
     type: 'noun'

	},{
		word:'welcome',
     type: 'noun'

	},{
		word:'yard',
     type: 'noun'

	},{
		word:'alarm',
     type: 'noun'

	},{
		word:'bend',
     type: 'noun'

	},{
		word:'bicycle',
     type: 'noun'

	},{
		word:'bite',
     type: 'noun'

	},{
		word:'blind',
     type: 'noun'

	},{
		word:'bottle',
     type: 'noun'

	},{
		word:'cable',
     type: 'noun'

	},{
		word:'candle',
     type: 'noun'

	},{
		word:'clerk',
     type: 'noun'

	},{
		word:'cloud',
     type: 'noun'

	},{
		word:'concert',
     type: 'noun'

	},{
		word:'counter',
     type: 'noun'

	},{
		word:'flower',
     type: 'noun'

	},{
		word:'grandfather',
     type: 'noun'

	},{
		word:'harm',
     type: 'noun'

	},{
		word:'knee',
     type: 'noun'

	},{
		word:'lawyer',
     type: 'noun'

	},{
		word:'leather',
     type: 'noun'

	},{
		word:'load',
     type: 'noun'

	},{
		word:'mirror',
     type: 'noun'

	},{
		word:'neck',
     type: 'noun'

	},{
		word:'pension',
     type: 'noun'

	},{
		word:'plate',
     type: 'noun'

	},{
		word:'purple',
     type: 'noun'

	},{
		word:'ruin',
     type: 'noun'

	},{
		word:'ship',
     type: 'noun'

	},{
		word:'skirt',
     type: 'noun'

	},{
		word:'slice',
     type: 'noun'

	},{
		word:'snow',
     type: 'noun'

	},{
		word:'specialist',
     type: 'noun'

	},{
		word:'stroke',
     type: 'noun'

	},{
		word:'switch',
     type: 'noun'

	},{
		word:'trash',
     type: 'noun'

	},{
		word:'tune',
     type: 'noun'

	},{
		word:'zone',
     type: 'noun'

	},{
		word:'anger',
     type: 'noun'

	},{
		word:'award',
     type: 'noun'

	},{
		word:'bid',
     type: 'noun'

	},{
		word:'bitter',
     type: 'noun'

	},{
		word:'boot',
     type: 'noun'

	},{
		word:'bug',
     type: 'noun'

	},{
		word:'camp',
     type: 'noun'

	},{
		word:'candy',
     type: 'noun'

	},{
		word:'carpet',
     type: 'noun'

	},{
		word:'cat',
     type: 'noun'

	},{
		word:'champion',
     type: 'noun'

	},{
		word:'channel',
     type: 'noun'

	},{
		word:'clock',
     type: 'noun'

	},{
		word:'comfort',
     type: 'noun'

	},{
		word:'cow',
     type: 'noun'

	},{
		word:'crack',
     type: 'noun'
	},{
		word:'engineer',
     type: 'noun'

	},{
		word:'entrance',
     type: 'noun'

	},{
		word:'fault',
     type: 'noun'

	},{
		word:'grass',
     type: 'noun'

	},{
		word:'guy',
     type: 'noun'

	},{
		word:'hell',
     type: 'noun'
	});
  });
