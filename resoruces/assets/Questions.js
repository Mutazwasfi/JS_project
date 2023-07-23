// Sample list of 50 questions in JSON format
const engQuiz = [
    {
      "question": "What is the past tense of 'eat'?",
      "options": ["eats", "eating", "eaten", "ate"],
      "answer_index": 3
    },
    {
      "question": "Which word is an adverb in this sentence: 'She sings beautifully.'?",
      "options": ["she", "sings", "beautifully", "the"],
      "answer_index": 2
    },
    {
      "question": "Choose the correct spelling:",
      "options": ["recieve", "receive", "recievee", "receeve"],
      "answer_index": 1
    },
    {
      "question": "What is a synonym for 'happy'?",
      "options": ["sad", "joyful", "angry", "tired"],
      "answer_index": 1
    },
    {
      "question": "Which sentence is written correctly?",
      "options": ["He plays tennis good.", "She danced good.", "They sing well.", "We runs fast."],
      "answer_index": 2
    },
    {
      "question": "What is the plural form of 'child'?",
      "options": ["childs", "childes", "children", "child's"],
      "answer_index": 2
    },
    {
      "question": "Identify the correct possessive form:",
      "options": ["cats's", "cat's", "cats", "cateses'"],
      "answer_index": 1
    },
    {
      "question": "Choose the correct form of 'to be' for the pronoun 'he':",
      "options": ["is", "am", "are", "be"],
      "answer_index": 0
    },
    {
      "question": "Which word is a conjunction in this sentence: 'I want to go, but it's raining.'?",
      "options": ["I", "want", "go", "but"],
      "answer_index": 3
    },
    {
      "question": "What is the comparative form of 'good'?",
      "options": ["gooder", "goodest", "more good", "better"],
      "answer_index": 3
    },
    {
      "question": "Choose the correct verb form: 'She _____ to the radio every morning.'",
      "options": ["listen", "listened", "listens", "listening"],
      "answer_index": 2
    },
    {
      "question": "Which sentence is in the passive voice?",
      "options": ["The teacher praised the students.", "The students praised the teacher.", "The students were praised by the teacher.", "The teacher was praised by the students."],
      "answer_index": 3
    },
    {
      "question": "What is the plural of 'ox'?",
      "options": ["oxes", "oxen", "oxies", "oxeses"],
      "answer_index": 1
    },
    {
      "question": "Identify the adjective in this sentence: 'The big, red apple fell from the tree.'",
      "options": ["big", "red", "apple", "tree"],
      "answer_index": 0
    },
    {
      "question": "Choose the correct form of 'there' for a question:",
      "options": ["their", "there", "they're", "thier"],
      "answer_index": 1
    },
    {
      "question": "What is the past participle of 'go'?",
      "options": ["gone", "goed", "went", "going"],
      "answer_index": 0
    },
    {
      "question": "Which word is a preposition in this sentence: 'The book is on the table.'?",
      "options": ["book", "table", "is", "on"],
      "answer_index": 3
    },
    {
      "question": "Choose the correct form of 'to be' for the pronoun 'we':",
      "options": ["am", "are", "is", "be"],
      "answer_index": 1
    },
    {
      "question": "What is the superlative form of 'beautiful'?",
      "options": ["beautifulest", "more beautiful", "beautifuler", "most beautiful"],
      "answer_index": 3
    },
    {
      "question": "Identify the correct contraction: '______ going to the beach.'",
      "options": ["We are", "We're", "Were", "We is"],
      "answer_index": 1
    },
    {
      "question": "Which sentence is written correctly?",
      "options": ["She don't like apples.", "They doesn't want to come.", "He isn't going.", "We haven't no time."],
      "answer_index": 2
    },
    {
      "question": "What is the singular form of 'phenomena'?",
      "options": ["phenomenon", "phenomenas", "phenomena", "phenomenae"],
      "answer_index": 0
    },
    {
      "question": "Choose the correct pronoun for the underlined word: '_____ will be there in five minutes.'",
      "options": ["He", "They", "We", "I"],
      "answer_index": 2
    },
    {
      "question": "What is the correct form of the verb for the third-person singular in the simple present tense?",
      "options": ["to run", "runned", "running", "runs"],
      "answer_index": 3
    },
    {
      "question": "Identify the adverb in this sentence: 'She walked slowly.'",
      "options": ["She", "walked", "slowly", "walked slowly"],
      "answer_index": 2
    },
    {
      "question": "What is the past tense of 'think'?",
      "options": ["thought", "thinked", "thinking", "thinks"],
      "answer_index": 0
    },
    {
      "question": "Choose the correct verb form: 'The dog _____ excited when it sees its owner.'",
      "options": ["am", "is", "are", "be"],
      "answer_index": 1
    },
    {
      "question": "Which sentence is in the active voice?",
      "options": ["The cake was eaten by the children.", "The children ate the cake.", "The cake was being eaten by the children.", "The cake has been eaten by the children."],
      "answer_index": 1
    },
    {
      "question": "What is the plural of 'cactus'?",
      "options": ["cactuses", "cacti", "cactuss", "cactuseses"],
      "answer_index": 1
    },
    {
      "question": "Identify the correct possessive form:",
      "options": ["childs'", "child's", "child'", "childes'"],
      "answer_index": 1
    },
    {
      "question": "What is the correct form of 'to be' for the pronoun 'you'?",
      "options": ["am", "are", "is", "be"],
      "answer_index": 1
    },
    {
      "question": "Choose the correct sentence:",
      "options": ["I going to the store.", "I goes to the store.", "I go to the store.", "I goed to the store."],
      "answer_index": 2
    },
    {
      "question": "What is the comparative form of 'easy'?",
      "options": ["more easy", "easyer", "easyest", "easier"],
      "answer_index": 3
    },
    {
      "question": "Identify the correct contraction: 'She _____ going to the party.'",
      "options": ["isn't", "are", "don't", "haven't"],
      "answer_index": 0
    },
    {
      "question": "What is the plural of 'bush'?",
      "options": ["bushes", "bushs", "bushss", "bush"],
      "answer_index": 0
    },
    {
      "question": "Choose the correct form of 'to be' for the pronoun 'they':",
      "options": ["am", "are", "is", "be"],
      "answer_index": 1
    },
    {
      "question": "What is the correct form of the verb for the third-person singular in the simple present tense?",
      "options": ["to talk", "talked", "talking", "talks"],
      "answer_index": 3
    },
    {
      "question": "Identify the adjective in this sentence: 'The tall boy wore a red hat.'",
      "options": ["tall", "boy", "red", "hat"],
      "answer_index": 0
    },
    {
      "question": "Choose the correct pronoun for the underlined word: '_____ like to play soccer.'",
      "options": ["She", "They", "We", "I"],
      "answer_index": 3
    },
    {
      "question": "What is the correct form of the verb for the first-person singular in the simple present tense?",
      "options": ["to run", "runned", "running", "runs"],
      "answer_index": 3
    },
    {
      "question": "Identify the adverb in this sentence: 'He sings very well.'",
      "options": ["He", "sings", "very", "well"],
      "answer_index": 2
    },
    {
      "question": "What is the past tense of 'begin'?",
      "options": ["begined", "beginning", "began", "begun"],
      "answer_index": 2
    },
    {
      "question": "Choose the correct verb form: 'The flowers ____ in the garden.'",
      "options": ["is", "am", "are", "be"],
      "answer_index": 2
    },
    {
      "question": "Which sentence is in the active voice?",
      "options": ["The cake was eaten by the children.", "The children ate the cake.", "The cake was being eaten by the children.", "The cake has been eaten by the children."],
      "answer_index": 1
    },
    {
      "question": "What is the plural of 'cactus'?",
      "options": ["cactuses", "cacti", "cactuss", "cactuseses"],
      "answer_index": 1
    },
    {
      "question": "Identify the correct possessive form:",
      "options": ["childs'", "child's", "child'", "childes'"],
      "answer_index": 1
    },
    {
      "question": "What is the correct form of 'to be' for the pronoun 'you'?",
      "options": ["am", "are", "is", "be"],
      "answer_index": 1
    },
    {
      "question": "Choose the correct sentence:",
      "options": ["I going to the store.", "I goes to the store.", "I go to the store.", "I goed to the store."],
      "answer_index": 2
    },
    {
      "question": "What is the comparative form of 'easy'?",
      "options": ["more easy", "easyer", "easyest", "easier"],
      "answer_index": 3
    },
    {
      "question": "Identify the correct contraction: 'She _____ going to the party.'",
      "options": ["isn't", "are", "don't", "haven't"],
      "answer_index": 0
    },
    {
      "question": "What is the plural of 'bush'?",
      "options": ["bushes", "bushs", "bushss", "bush"],
      "answer_index": 0
    },
    {
      "question": "Choose the correct form of 'to be' for the pronoun 'they':",
      "options": ["am", "are", "is", "be"],
      "answer_index": 1
    },
    {
      "question": "What is the correct form of the verb for the third-person singular in the simple present tense?",
      "options": ["to talk", "talked", "talking", "talks"],
      "answer_index": 3
    },
    {
      "question": "Identify the adjective in this sentence: 'The tall boy wore a red hat.'",
      "options": ["tall", "boy", "red", "hat"],
      "answer_index": 0
    },
    {
      "question": "Choose the correct pronoun for the underlined word: '_____ like to play soccer.'",
      "options": ["She", "They", "We", "I"],
      "answer_index": 3
    },
    {
      "question": "What is the correct form of the verb for the first-person singular in the simple present tense?",
      "options": ["to run", "runned", "running", "runs"],
      "answer_index": 3
    },
    {
      "question": "Identify the adverb in this sentence: 'He sings very well.'",
      "options": ["He", "sings", "very", "well"],
      "answer_index": 2
    },
    {
      "question": "What is the past tense of 'begin'?",
      "options": ["begined", "beginning", "began", "begun"],
      "answer_index": 2
    },
    {
      "question": "Choose the correct verb form: 'The flowers ____ in the garden.'",
      "options": ["is", "am", "are", "be"],
      "answer_index": 2
    },
    {
      "question": "Choose the correct verb form: 'The flowers ____ in the garden.'",
      "options": ["is", "am", "are", "be"],
      "answer_index": 2
    },
    {
      "question": "Identify the correct sentence:",
      "options": ["He don't like coffee.", "He doesn't like coffee.", "He do not like coffee.", "He not like coffee."],
      "answer_index": 1
    },
    {
      "question": "What is the comparative form of 'strong'?",
      "options": ["stronger", "strongest", "more strong", "strongerest"],
      "answer_index": 0
    },
    {
      "question": "Choose the correct contraction: '_____ going to the party.'",
      "options": ["She's", "She aren't", "She don't", "She do not"],
      "answer_index": 0
    },
    {
      "question": "What is the plural of 'mouse'?",
      "options": ["mouses", "mice", "mouse's", "mices"],
      "answer_index": 1
    },
    {
      "question": "Identify the correct possessive form:",
      "options": ["childs's", "child's", "childs'", "children's"],
      "answer_index": 1
    },
    {
      "question": "What is the correct form of 'to be' for the pronoun 'it'?",
      "options": ["am", "are", "is", "be"],
      "answer_index": 2
    },
    {
      "question": "Choose the correct sentence:",
      "options": ["The book am on the table.", "The book is on the table.", "The book are on the table.", "The book be on the table."],
      "answer_index": 1
    },
    {
      "question": "What is the superlative form of 'brave'?",
      "options": ["braveest", "more brave", "braver", "bravest"],
      "answer_index": 3
    },
    {
      "question": "Identify the correct contraction: 'They _____ going to the beach.'",
      "options": ["aren't", "were", "don't", "hasn't"],
      "answer_index": 0
    },
    {
      "question": "What is the plural of 'wolf'?",
      "options": ["wolfs", "wolfses", "wolves", "wolvess"],
      "answer_index": 2
    },
    {
      "question": "Choose the correct form of 'to be' for the pronoun 'she':",
      "options": ["am", "are", "is", "be"],
      "answer_index": 2
    },
    {
      "question": "What is the correct form of the verb for the third-person singular in the simple present tense?",
      "options": ["to jump", "jumped", "jumping", "jumps"],
      "answer_index": 3
    },
    {
      "question": "Identify the adjective in this sentence: 'The blue sky is clear.'",
      "options": ["blue", "sky", "is", "clear"],
      "answer_index": 0
    },
    {
      "question": "Choose the correct pronoun for the underlined word: '_____ saw a shooting star.'",
      "options": ["He", "They", "We", "I"],
      "answer_index": 3
    },
    {
      "question": "What is the correct form of the verb for the first-person singular in the simple present tense?",
      "options": ["to dance", "danced", "dancing", "dances"],
      "answer_index": 3
    },
    {
      "question": "Identify the adverb in this sentence: 'The dog barked loudly.'",
      "options": ["dog", "barked", "loudly", "barked loudly"],
      "answer_index": 2
    },
    {
      "question": "What is the past tense of 'write'?",
      "options": ["writing", "writed", "wrote", "written"],
      "answer_index": 2
    },
    {
      "question": "Choose the correct verb form: 'The birds ____ early in the morning.'",
      "options": ["chirp", "chirping", "chirped", "chirps"],
      "answer_index": 3
    },
    {
      "question": "Identify the adjective in this sentence: 'The friendly cat approached me.'",
      "options": ["friendly", "cat", "approached", "me"],
      "answer_index": 0
    },
    {
      "question": "Choose the correct pronoun for the underlined word: '_____ love to play board games.'",
      "options": ["She", "They", "We", "I"],
      "answer_index": 2
    },
    {
        "question": "Choose the correct verb form: 'The flowers ____ in the garden.'",
        "options": ["is", "am", "are", "be"],
        "answer_index": 2
      },
      {
        "question": "Identify the correct sentence:",
        "options": ["He don't like coffee.", "He doesn't like coffee.", "He do not like coffee.", "He not like coffee."],
        "answer_index": 1
      },
      {
        "question": "What is the comparative form of 'strong'?",
        "options": ["stronger", "strongest", "more strong", "strongerest"],
        "answer_index": 0
      },
      {
        "question": "Choose the correct contraction: '_____ going to the party.'",
        "options": ["She's", "She aren't", "She don't", "She do not"],
        "answer_index": 0
      },
      {
        "question": "What is the plural of 'mouse'?",
        "options": ["mouses", "mice", "mouse's", "mices"],
        "answer_index": 1
      },
      {
        "question": "Identify the correct possessive form:",
        "options": ["childs's", "child's", "childs'", "children's"],
        "answer_index": 1
      },
      {
        "question": "What is the correct form of 'to be' for the pronoun 'it'?",
        "options": ["am", "are", "is", "be"],
        "answer_index": 2
      },
      {
        "question": "Choose the correct sentence:",
        "options": ["The book am on the table.", "The book is on the table.", "The book are on the table.", "The book be on the table."],
        "answer_index": 1
      },
      {
        "question": "What is the superlative form of 'brave'?",
        "options": ["braveest", "more brave", "braver", "bravest"],
        "answer_index": 3
      },
      {
        "question": "Identify the correct contraction: 'They _____ going to the beach.'",
        "options": ["aren't", "were", "don't", "hasn't"],
        "answer_index": 0
      },
      {
        "question": "What is the plural of 'wolf'?",
        "options": ["wolfs", "wolfses", "wolves", "wolvess"],
        "answer_index": 2
      },
      {
        "question": "Choose the correct form of 'to be' for the pronoun 'she':",
        "options": ["am", "are", "is", "be"],
        "answer_index": 2
      },
      {
        "question": "What is the correct form of the verb for the third-person singular in the simple present tense?",
        "options": ["to jump", "jumped", "jumping", "jumps"],
        "answer_index": 3
      },
      {
        "question": "Identify the adjective in this sentence: 'The blue sky is clear.'",
        "options": ["blue", "sky", "is", "clear"],
        "answer_index": 0
      },
      {
        "question": "Choose the correct pronoun for the underlined word: '_____ saw a shooting star.'",
        "options": ["He", "They", "We", "I"],
        "answer_index": 3
      },
      {
        "question": "What is the correct form of the verb for the first-person singular in the simple present tense?",
        "options": ["to dance", "danced", "dancing", "dances"],
        "answer_index": 3
      },
      {
        "question": "Identify the adverb in this sentence: 'The dog barked loudly.'",
        "options": ["dog", "barked", "loudly", "barked loudly"],
        "answer_index": 2
      },
      {
        "question": "What is the past tense of 'write'?",
        "options": ["writing", "writed", "wrote", "written"],
        "answer_index": 2
      },
      {
        "question": "Choose the correct verb form: 'The birds ____ early in the morning.'",
        "options": ["chirp", "chirping", "chirped", "chirps"],
        "answer_index": 3
      },
      {
        "question": "Identify the adjective in this sentence: 'The friendly cat approached me.'",
        "options": ["friendly", "cat", "approached", "me"],
        "answer_index": 0
      },
      {
        "question": "Choose the correct pronoun for the underlined word: '_____ love to play board games.'",
        "options": ["She", "They", "We", "I"],
        "answer_index": 2
      }
  ]

  
  // Convert the questions array to JSON
  const engQuizJSON = JSON.stringify(engQuiz);
  
  // Store the JSON data in local storage
  localStorage.setItem("questionsData", engQuizJSON);