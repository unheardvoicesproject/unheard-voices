"use client";

import Image from "next/image";
import { use } from "react";
import Footer from "../../components2/Footer";
import { useState } from "react";

type Story = {
  title: string;
  greekTitle: string;
  category: string;
  greekCategory: string;
  person: string;
  greekPerson: string;
  date: string;
  greekDate: string;
  author: string;
  image: string;
  introduction: string;
  greekIntroduction: string;
  paragraphs: string[];
  greekParagraphs: string[];
  questions: string[];
  greekQuestions: string[];
};

const stories: Record<string, Story> = {
  "1": {
    title: "What it feels like to start over again and again",
    greekTitle: "Πώς είναι να ξεκινάς ξανά και ξανά",
    category: "Student life",
    greekCategory: "Μαθητική ζωή",
    person: "Diana, High-school Student",
    greekPerson: "Diana, Μαθήτρια Λυκείου",
    date: "April 23, 2026",
    greekDate: "23 Απριλίου 2026",
    author: "Asterios Vesiropoulos",
    image: "/stories/diana.jpg",

    introduction:
      "Adapting to different environments is part of human nature, driven by the need to belong. For some, it’s simple. For others, it takes a while. What matters most is not rushing things, but also not forgetting who you are, and getting to know yourself better and in depth.",

    greekIntroduction:
      "Η προσαρμογή σε διαφορετικά περιβάλλοντα αποτελεί μέρος της ανθρώπινης φύσης, καθοδηγούμενη από την ανάγκη να ανήκουμε κάπου. Για κάποιους είναι κάτι απλό, για άλλους χρειάζεται χρόνο. Αυτό που έχει τη μεγαλύτερη σημασία δεν είναι να βιαζόμαστε, αλλά να μην ξεχνάμε ποιοι είμαστε και να γνωρίζουμε τον εαυτό μας καλύτερα και σε μεγαλύτερο βάθος.",

    paragraphs: [
      "For Diana, her experiences of moving to different places while she was growing up have really shaped her character and her perspective on things, even today in her high school years.",

      "Moving to different places from a young age has significantly changed how Diana views everything. As she explains, it has not only taught her how to adapt to different environments, but also how to navigate her identity where she may feel lost. Moreover, Model United Nations (MUN) has allowed her to encounter different opinions and cultures, creating space for further adaptation.",

      "At the same time, the constant need to adapt in her case has not always been easy, she claims. Everyone knows the struggle of making new friends and finding your people in today’s society. The expectations are usually high, and people often feel the need to change themselves to meet these criteria. But let me ask you this: are those friends as real as you have had to become to get them?",

      "Over time though, Diana by meeting different people who were as excited as her to become friends and who showed care made her realise that it was not as overwhelming as it initially seemed, and the right people will eventually come along. She expanded on this by saying, “you should surround yourself with people you love.”",

      "In the beginning, she often felt like an outsider, especially when adjusting to new environments and trying to understand unfamiliar settings. She also reflects on an overlooked factor: the language barrier, which made her feel lost and unheard. In her words, “you feel out of place when you don’t know what others are talking about.” However, as time passed, this feeling left as she formed meaningful connections.",

      "Despite these challenges, her experiences reflect a broader reality for many students who move between countries. While adaptation can be difficult, belonging is often built gradually and through people sharing experiences.",
    ],

    greekParagraphs: [
      "Για τη Νταϊάνα, οι εμπειρίες της από τις μετακομίσεις σε διαφορετικά μέρη καθώς μεγάλωνε έχουν διαμορφώσει σε μεγάλο βαθμό τον χαρακτήρα της και τον τρόπο που βλέπει τα πράγματα, ακόμη και σήμερα στα χρόνια του λυκείου.",

      "Η μετακίνηση σε διαφορετικά μέρη από μικρή ηλικία έχει αλλάξει σημαντικά τον τρόπο με τον οποίο η Νταϊάνα αντιλαμβάνεται τα πάντα. Όπως εξηγεί, δεν της έμαθε μόνο πώς να προσαρμόζεται σε διαφορετικά περιβάλλοντα, αλλά και πώς να διαχειρίζεται την ταυτότητά της όταν μπορεί να νιώθει χαμένη. Επιπλέον, το Model United Nations (MUN) της επέτρεψε να έρθει σε επαφή με διαφορετικές απόψεις και κουλτούρες, δημιουργώντας χώρο για περαιτέρω προσαρμογή.",

      "Ταυτόχρονα, η συνεχής ανάγκη προσαρμογής στην περίπτωσή της δεν ήταν πάντα εύκολη, όπως η ίδια υποστηρίζει. Όλοι γνωρίζουν τη δυσκολία του να κάνεις νέους φίλους και να βρίσκεις τους δικούς σου ανθρώπους στη σημερινή κοινωνία. Οι προσδοκίες είναι συνήθως υψηλές και οι άνθρωποι συχνά νιώθουν την ανάγκη να αλλάξουν τον εαυτό τους για να ανταποκριθούν σε αυτά τα κριτήρια. Αλλά να σε ρωτήσω κάτι: είναι αυτοί οι φίλοι τόσο αληθινοί όσο ο άνθρωπος που έγινες για να τους αποκτήσεις;",

      "Με τον καιρό όμως, η Νταϊάνα, γνωρίζοντας διαφορετικούς ανθρώπους που ήταν εξίσου ενθουσιασμένοι με εκείνη να γίνουν φίλοι και που έδειχναν ενδιαφέρον, συνειδητοποίησε ότι η κατάσταση δεν ήταν τόσο πιεστική όσο αρχικά φαινόταν και ότι οι κατάλληλοι άνθρωποι τελικά θα εμφανιστούν. Το συμπλήρωσε λέγοντας: «θα πρέπει να περιβάλλεις τον εαυτό σου με ανθρώπους που αγαπάς».",

      "Στην αρχή ένιωθε σαν ξένη, ειδικά όταν προσαρμοζόταν σε νέα περιβάλλοντα και προσπαθούσε να κατανοήσει άγνωστες συνθήκες. Επίσης, αναλογίζεται έναν παράγοντα που συχνά παραβλέπεται: το γλωσσικό εμπόδιο, το οποίο την έκανε να νιώθει χαμένη και ότι δεν την καταλαβαίνουν. Όπως λέει η ίδια: «νιώθεις εκτός τόπου όταν δεν ξέρεις για τι μιλάνε οι άλλοι». Ωστόσο, με το πέρασμα του χρόνου, αυτό το συναίσθημα υποχώρησε καθώς δημιούργησε ουσιαστικές σχέσεις.",

      "Παρά αυτές τις δυσκολίες, οι εμπειρίες της αντικατοπτρίζουν μια ευρύτερη πραγματικότητα για πολλούς μαθητές που μετακινούνται μεταξύ χωρών. Αν και η προσαρμογή μπορεί να είναι δύσκολη, το αίσθημα του ανήκειν χτίζεται συχνά σταδιακά και μέσα από ανθρώπους που μοιράζονται εμπειρίες.",
    ],

    questions: [
      "Have you ever had a friend who changed themselves to fit into a certain group of people?",
      "What does belonging somewhere mean to you?",
    ],

    greekQuestions: [
      "Έχεις ποτέ κάποιον φίλο που άλλαξε τον εαυτό του για να ταιριάξει σε μια συγκεκριμένη ομάδα ανθρώπων;",
      "Τι σημαίνει για εσένα το να ανήκεις κάπου;",
    ],
  },

  "2": {
    title: "More Than Just Grammar: A Teacher's Perspective",
    greekTitle: "Περισσότερο από γραμματική: Η οπτική μιας καθηγήτριας",
    category: "Education",
    greekCategory: "Εκπαίδευση",
    person: "Evi, English Teacher",
    greekPerson: "Evi, Καθηγήτρια Αγγλικών",
    date: "March 14, 2026",
    greekDate: "14 Μαρτίου 2026",
    author: "Asterios Vesiropoulos",
    image: "/stories/evi.jpg",

    introduction:
      "“Teachers are not limited to teaching just grammar but much more”, she says with certainty and confidence. Through her experience with students, life lessons have been as critical as language itself when teaching English for her students.",

    greekIntroduction:
      "«Οι δάσκαλοι δεν περιορίζονται μόνο στη διδασκαλία της γραμματικής, αλλά προσφέρουν πολλά περισσότερα», λέει με βεβαιότητα και αυτοπεποίθηση. Μέσα από την εμπειρία της με τους μαθητές, τα μαθήματα ζωής αποδεικνύονται εξίσου σημαντικά με την ίδια τη γλώσσα κατά τη διδασκαλία των Αγγλικών.",

    paragraphs: [
      "Her love for English made her pursue a career that goes beyond grammar and vocabulary. In her classrooms students have the opportunity to discover their own voice and identity.",

      "What is important in a class — even if it consists of only two people — is to shape a safe space for students with empathy in an effort to grow and work with no fear. Each student needs their own attention and studying by a teacher, in order to understand them deeply and approach them accordingly. Expanding on this, she claims that except grammar and vocabulary students are shaped by the personality a teacher brings into the classroom. Honesty and kindness are virtues that are taught through interactions and mirrored back. This way a teacher shows that everyone is equal in the classroom and that she is not here to lead, but guide students in order to grow academically and spiritually.",

      "For her, teaching has always been something more. It’s been a communication through words and gestures to help her students be more lenient towards others, better friends, and the best versions of themselves.",

      "“Magic can happen” she quotes about students discovering their own identity through English lessons. There can be spotted a transformation where students gain their own voice and discover things they like through conversations as their horizons are broadened when acquainted with different cultures. Building on this idea she remarks that learning a language is eye opening and it can follow you to a different career path. It’s all about students letting their true selves command them somewhere through conversations and education.",

      "In her view, students must trust the process and not judge from the very start of things. Willingness plays a major role to achieve a great level on what you do as going beyond average has always been a “want” not a “need”.",
    ],

    greekParagraphs: [
      "Η αγάπη της για τα Αγγλικά την οδήγησε να ακολουθήσει μια καριέρα που ξεπερνά τα όρια της γραμματικής και του λεξιλογίου. Στις τάξεις της, οι μαθητές έχουν την ευκαιρία να ανακαλύψουν τη δική τους φωνή και ταυτότητα.",

      "Αυτό που είναι σημαντικό σε μια τάξη — ακόμη κι αν αποτελείται μόνο από δύο άτομα — είναι η δημιουργία ενός ασφαλούς χώρου για τους μαθητές, με ενσυναίσθηση, ώστε να μπορούν να εξελιχθούν και να δουλέψουν χωρίς φόβο. Κάθε μαθητής χρειάζεται εξατομικευμένη προσοχή και ουσιαστική μελέτη από τον δάσκαλο, ώστε να κατανοηθεί σε βάθος και να προσεγγιστεί ανάλογα. Επεκτείνοντας αυτή την ιδέα, υποστηρίζει ότι, πέρα από τη γραμματική και το λεξιλόγιο, οι μαθητές διαμορφώνονται και από την προσωπικότητα που φέρνει ο δάσκαλος στην τάξη. Η ειλικρίνεια και η καλοσύνη είναι αρετές που καλλιεργούνται μέσα από τις αλληλεπιδράσεις και αντανακλώνται. Με αυτόν τον τρόπο, ο δάσκαλος δείχνει ότι όλοι είναι ίσοι στην τάξη και ότι δεν βρίσκεται εκεί για να ηγείται, αλλά για να καθοδηγεί τους μαθητές ώστε να αναπτύσσονται ακαδημαϊκά και προσωπικά.",

      "Για εκείνη, η διδασκαλία ήταν πάντα κάτι περισσότερο. Ήταν μια μορφή επικοινωνίας μέσα από λέξεις και χειρονομίες, με στόχο να βοηθήσει τους μαθητές της να γίνουν πιο επιεικείς προς τους άλλους, καλύτεροι φίλοι και οι καλύτερες εκδοχές του εαυτού τους.",

      "«Μπορεί να συμβεί μαγεία», αναφέρει για τους μαθητές που ανακαλύπτουν τη δική τους ταυτότητα μέσα από τα μαθήματα Αγγλικών. Παρατηρείται μια μεταμόρφωση, κατά την οποία οι μαθητές αποκτούν τη δική τους φωνή και ανακαλύπτουν τι τους αρέσει μέσα από τις συζητήσεις, καθώς οι ορίζοντές τους διευρύνονται όταν έρχονται σε επαφή με διαφορετικούς πολιτισμούς. Αναπτύσσοντας αυτή την ιδέα, επισημαίνει ότι η εκμάθηση μιας γλώσσας ανοίγει τους ορίζοντες και μπορεί να οδηγήσει σε μια διαφορετική επαγγελματική πορεία. Όλα σχετίζονται με το να αφήνουν οι μαθητές τον αληθινό τους εαυτό να τους καθοδηγεί μέσα από τις συζητήσεις και την εκπαίδευση.",

      "Κατά την άποψή της, οι μαθητές πρέπει να εμπιστεύονται τη διαδικασία και να μην κρίνουν τα πράγματα από την αρχή. Η προθυμία παίζει καθοριστικό ρόλο στην επίτευξη ενός υψηλού επιπέδου, καθώς το να ξεπερνά κανείς τον μέσο όρο ήταν πάντα ένα «θέλω» και όχι μια «ανάγκη».",
    ],

    questions: [
      "When was the last time a teacher helped you discover something about yourself?",
      "How much can a teacher influence the way we see the world?",
    ],

    greekQuestions: [
      "Πότε ήταν η τελευταία φορά που ένας καθηγητής σε βοήθησε να ανακαλύψεις κάτι για τον εαυτό σου;",
      "Πόσο μπορεί ένας καθηγητής να επηρεάσει τον τρόπο με τον οποίο βλέπουμε τον κόσμο;",
    ],
  },

  "3": {
    title: "The Poet Behind the Words",
    greekTitle: "Ο ποιητής πίσω από τις λέξεις",
    category: "Writing & Poetry",
    greekCategory: "Γραφή & Ποίηση",
    person: "Shivaanshi, Young Poetry Author",
    greekPerson: "Shivaanshi, Νέα Συγγραφέας Ποίησης",
    date: "September 24, 2026",
    greekDate: "24 Σεπτεμβρίου 2026",
    author: "Asterios Vesiropoulos",
    image: "/stories/shivaanshi.jpg",

    introduction:
      "Reading poetry was something she did not feel particularly drawn to. Yet writing would redefine her from a young age, leading her to become a poet with her debut poetry book, “Mortals of Forever”.",

    greekIntroduction:
      "Η ανάγνωση ποίησης δεν ήταν κάτι που της άρεσε ιδιαίτερα. Ωστόσο, η γραφή θα διαμόρφωνε την ταυτότητά της από νεαρή ηλικία, οδηγώντας την να γίνει ποιήτρια με το πρώτο της ποιητικό βιβλίο, «Mortals of Forever».",

    paragraphs: [
      "Shivaanshi felt that there was a big gap between her and poetry; she could not relate and find pieces that reflected her life or gave her a voice. This led to her putting pen to paper for the first time to create her own pieces and beginning a journey full of challenges and opportunities, through which she would explore herself and the world.",

      "“Mortals of Forever” is the name of her first poetry book released this summer. Initially it was a new and strange experience for her because she was still trying to figure out how to engage with it. Poems were scrapped, rewritten, edited, and drafted. Alongside them came doubts, vulnerability and confusion that brought to life this book. Furthermore, she says that in poetry authors do not just include their ideas about certain topics but they also leave pieces of themselves in their work, pieces that remain forever. However, for her that was a great challenge as she was hesitant to reveal deeply personal experiences of her own life to the public, and thus she struggled to find the ideal poems to include in the book.",

      "One poem that haunted me personally was “Hourglass”, which radiates a strong sense of nostalgia and change. “There is something cruel about an hourglass because you can actually watch time leaving” she explains. For her, the hourglass eerily captures the feeling of time slipping through your hands, knowing that you cannot stop it, which perhaps is what makes it unsettling. Adding to this, she says that even though we know very well that our time is limited, we find ourselves being attached to people, places, and moments that cannot stay with us forever.",

      `Every grain
once carried a face,
a favourite song,
a hand it could not bear to lose.`,

      "Another poem of hers which shares the book’s title opens up about time and love. This poem offers a glimpse into something larger and raises a broader question: should we remain hesitant to show love to people because others did not appreciate it? Though she acknowledges this disappointment, she believes that love should be shown to people who share our values, asking, “Who are you without a heart?” All these ideas have influenced her, leading her to understand that we ought to live in the moment and stop constantly worrying about the past and future.",

      "Poetry ultimately became for her a way to write about her thoughts without the need to explain them all the time. It is a fact that every person forms their own interpretation of a poem, and that is why poetry is so magical and weird at the same time. She hopes the readers remember the words that made them feel something and not necessarily the person behind them.",
    ],

    greekParagraphs: [
      "Η Shivaanshi ένιωθε ότι υπάρχει ένα μεγάλο χάσμα ανάμεσα σε εκείνη και την ποίηση· δεν μπορούσε να ταυτιστεί ούτε να βρει έργα που να αντικατοπτρίζουν τη ζωή της ή να της δίνουν φωνή. Αυτό την οδήγησε στο να πιάσει για πρώτη φορά το στυλό και να δημιουργήσει τα δικά της έργα, ξεκινώντας ένα ταξίδι γεμάτο προκλήσεις και ευκαιρίες που θα εξερευνούσε τον εαυτό της και τον κόσμο.",

      "«Mortals of Forever» είναι το όνομα του πρώτου της βιβλίου ποίησης, το οποίο κυκλοφόρησε αυτό το καλοκαίρι. Αρχικά, ήταν μια νέα και παράξενη εμπειρία για εκείνη, καθώς προσπαθούσε ακόμη να καταλάβει πώς να το προσεγγίσει. Ποιήματα διαγράφονταν, διορθώνονταν και γράφονταν από την αρχή. Μαζί τους ήρθαν αμφιβολίες και στιγμές ευαλωτότητας, που έδωσαν ζωή σε αυτό το βιβλίο. Επιπλέον, εξηγεί ότι στην ποίηση οι συγγραφείς δεν συμπεριλαμβάνουν απλώς τις ιδέες τους για ορισμένα θέματα, αλλά αφήνουν επίσης κομμάτια του εαυτού τους μέσα στο έργο τους, κομμάτια που παραμένουν για πάντα. Ωστόσο, για εκείνη αυτό αποτέλεσε μεγάλη πρόκληση, καθώς δίσταζε να αποκαλύψει βαθιά προσωπικές εμπειρίες από τη ζωή της στο κοινό και έτσι δυσκολεύτηκε να βρει τα ιδανικά ποιήματα για να συμπεριλάβει στο βιβλίο της.",

      "Ένα ποίημα που προσωπικά με στοίχειωσε ήταν το «Hourglass», το οποίο αποπνέει μια έντονη αίσθηση νοσταλγίας και αλλαγής. «Υπάρχει κάτι σκληρό σε μια κλεψύδρα, γιατί μπορείς πραγματικά να βλέπεις τον χρόνο να φεύγει», εξηγεί. Για εκείνη, η κλεψύδρα αποτυπώνει με έναν αλλόκοτα ανατριχιαστικό τρόπο την αίσθηση του χρόνου που γλιστρά μέσα από τα χέρια σου, γνωρίζοντας ότι δεν μπορείς να τον σταματήσεις. Επιπλέον, λέει ότι, παρόλο που γνωρίζουμε πολύ καλά πως ο χρόνος μας είναι περιορισμένος, βλέπουμε τους εαυτούς μας να δενόμαστε με ανθρώπους, μέρη και στιγμές που δεν μπορούν να μείνουν μαζί μας για πάντα.",

      `«Κάθε κόκκος
κάποτε κουβαλούσε ένα πρόσωπο,
ένα αγαπημένο τραγούδι,
ένα χέρι που δεν άντεχε να χάσει.»`,

      "Ένα ακόμη ποίημά της, που μοιράζεται τον τίτλο του βιβλίου, ανοίγει μια συζήτηση γύρω από τον χρόνο και την αγάπη. Το ποίημα αυτό προσφέρει μια ματιά σε κάτι μεγαλύτερο και θέτει ένα ευρύτερο ερώτημα: θα πρέπει να διστάζουμε να δείχνουμε αγάπη στους ανθρώπους επειδή άλλοι δεν την εκτίμησαν; Παρόλο που η ίδια καταλαβαίνει αυτή την απογοήτευση, πιστεύει ότι η αγάπη πρέπει να προσφέρεται σε ανθρώπους που μοιράζονται τις ίδιες αξίες με εμάς, ρωτώντας: «Ποιος είσαι χωρίς καρδιά;» Όλες αυτές οι ιδέες την έχουν επηρεάσει, οδηγώντας την να κατανοήσει ότι πρέπει να ζούμε την κάθε στιγμή και να σταματήσουμε να ανησυχούμε διαρκώς για το παρελθόν και το μέλλον.",

      "Η ποίηση έγινε τελικά για εκείνη ένας τρόπος να γράφει για τις σκέψεις της χωρίς να χρειάζεται να τις εξηγεί συνεχώς. Είναι γεγονός ότι κάθε άνθρωπος διαμορφώνει τη δική του ερμηνεία ενός ποιήματος, και γι’ αυτό η ποίηση είναι τόσο μαγική και παράξενη ταυτόχρονα. Ελπίζει οι αναγνώστες να θυμούνται τις λέξεις που τους έκαναν να νιώσουν κάτι και όχι απαραίτητα το άτομο πίσω από αυτές.",
    ],

    questions: [
      "Do you think we appreciate moments more once we realize they won’t last forever?",
      "Have you ever created something that revealed more about you than you expected?",
    ],

    greekQuestions: [
      "Πιστεύεις ότι εκτιμούμε περισσότερο τις στιγμές όταν συνειδητοποιούμε ότι δεν θα διαρκέσουν για πάντα;",
      "Έχεις δημιουργήσει ποτέ κάτι που αποκάλυψε περισσότερα για εσένα απ’ όσα περίμενες;",
    ],
  },
};

export default function StoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [language, setLanguage] = useState<"EN" | "GR">("EN");

  const story = stories[id];

  if (!story) {
    return (
      <main className="story-page">
        <h1>Story not found.</h1>
        <a href="/stories">← Back to stories</a>
      </main>
    );
  }

  const isEnglish = language === "EN";

  return (
    <main className="story-page">
      <header className="story-header">
        <a
          href="/"
          className="story-logo notranslate"
          translate="no"
        >
          UNHEARD VOICES
        </a>

        <nav>
          <a href="/stories">
            {isEnglish ? "Stories" : "Ιστορίες"}
          </a>

          <a href="/about">
            {isEnglish ? "About" : "Σχετικά"}
          </a>

          <button
            className="story-language"
            onClick={() =>
              setLanguage(isEnglish ? "GR" : "EN")
            }
          >
            {isEnglish ? "ΕΛ" : "EN"}
          </button>
        </nav>
      </header>

      <article className="story-article">
        <a
          href="/stories"
          className="back-to-stories"
        >
          {isEnglish
            ? "← Back to stories"
            : "← Πίσω στις ιστορίες"}
        </a>

        <header className="story-title">
          <p className="story-category">
            {isEnglish
              ? story.category
              : story.greekCategory}
          </p>

          <h1>
            {isEnglish
              ? story.title
              : story.greekTitle}
          </h1>

          <div className="story-meta">
            <span>
              {isEnglish
                ? story.date
                : story.greekDate}
            </span>

            <span>
              {isEnglish
                ? `By ${story.author}`
                : `Από ${story.author}`}
            </span>
          </div>
        </header>

        <div className="story-image">
          <Image
            src={story.image}
            alt={
              isEnglish
                ? story.title
                : story.greekTitle
            }
            width={1200}
            height={800}
            priority
          />
        </div>

        <div className="story-body">
          <p className="story-person">
            {isEnglish
              ? story.person
              : story.greekPerson}
          </p>

          <p className="story-introduction">
            {isEnglish
              ? story.introduction
              : story.greekIntroduction}
          </p>

          {(isEnglish
            ? story.paragraphs
            : story.greekParagraphs
          ).map((paragraph, index) => (
            <p key={index}>
              {paragraph}
            </p>
          ))}

          <section className="reflection-section">
            <h2>
              {isEnglish
                ? "Reflective questions"
                : "Ερωτήσεις για σκέψη"}
            </h2>

            <ol>
              {(isEnglish
                ? story.questions
                : story.greekQuestions
              ).map((question, index) => (
                <li key={index}>
                  {question}
                </li>
              ))}
            </ol>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  );
}