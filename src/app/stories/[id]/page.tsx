
"use client";

import Image from "next/image";
import { use } from "react";
import { useState } from "react";
import Footer from "../../components2/Footer";

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
    greekPerson: "Shivaanshi, Έφηβη Συγγραφέας Ποίησης",
    date: "September 24, 2026",
    greekDate: "24 Σεπτεμβρίου 2026",
    author: "Asterios Vesiropoulos",
    image: "/stories/shivaanshi.jpg",
    introduction:
      "Reading poetry was something she did not feel particularly drawn to. Yet writing would redefine her from a young age, leading her to become a poet with her debut poetry book, “Mortals of Forever”.",
    greekIntroduction:
      "Η ανάγνωση ποίησης δεν ήταν κάτι που της άρεσε ιδιαίτερα. Ωστόσο, η γραφή θα διαμόρφωνε την ταυτότητά της από νεαρή ηλικία, οδηγώντας την να γίνει ποιήτρια με το πρώτο της βιβλίο ποίησης, «Mortals of Forever».",
    paragraphs: [
      "Shivaanshi felt that there was a big gap between her and poetry; she could not relate and find pieces that reflected her life or gave her a voice. This led to her putting pen to paper for the first time to create her own pieces and beginning a journey full of challenges and opportunities, through which she would explore herself and the world.",
      "“Mortals of Forever” is the name of her first poetry book released this summer. Initially it was a new and strange experience for her because she was still trying to figure out how to engage with it. Poems were scrapped, rewritten, edited, and drafted. Alongside them came doubts, vulnerability and confusion that brought to life this book. Furthermore, she says that in poetry authors do not just include their ideas about certain topics but they also leave pieces of themselves in their work, pieces that remain forever. However, for her that was a great challenge as she was hesitant to reveal deeply personal experiences of her own life to the public, and thus she struggled to find the ideal poems to include in the book.",
      "One poem that haunted me personally was “Hourglass”, which radiates a strong sense of nostalgia and change. “There is something cruel about an hourglass because you can actually watch time leaving” she explains. For her, the hourglass eerily captures the feeling of time slipping through your hands, knowing that you cannot stop it, for what makes it unsettling. Adding to this, she says that even though we know very well that our time is limited, we find ourselves being attached to people, places, and moments that cannot stay with us forever.",
      `Every grain
once carried a face,
a favourite song,
a hand it could not bear to lose.`,
      "Another poem of hers which shares the book’s title opens up about time and love. This poem offers a glimpse into something larger and raises a broader question: should we remain hesitant to show love to people because others did not appreciate it? Though she acknowledges this disappointment, she believes that love should be shown to people who share our values, asking, “Who are you without a heart?” All these ideas have influenced her, leading her to understand that we ought to live in the moment and stop constantly worrying about the past and future.",
      "Poetry ultimately became for her a way to write about her thoughts without the need to explain them all the time. It is a fact that every person forms their own interpretation of a poem, and that is why poetry is so magical and weird at the same time. She hopes the readers remember the words that made them feel something and not necessarily the person behind them.",
    ],
    greekParagraphs: [
      "Η Shivaanshi ένιωθε ότι υπάρχει ένα μεγάλο χάσμα ανάμεσα σε εκείνη και την ποίηση· δεν μπορούσε να ταυτιστεί ούτε να βρει έργα που να αντικατοπτρίζουν τη ζωή της ή να της δίνουν φωνή. Αυτό την οδήγησε στο να πιάσει για πρώτη φορά το στυλό και να δημιουργήσει τα δικά της έργα, ξεκινώντας ένα ταξίδι γεμάτο προκλήσεις και ευκαιρίες που θα εξερευνούσε τον εαυτό της και τον κόσμο.",
      "«Mortals of Forever» είναι το όνομα του πρώτου της βιβλίου ποίησης, το οποίο κυκλοφόρησε αυτό το καλοκαίρι. Αρχικά, ήταν μια νέα και παράξενη εμπειρία για εκείνη, καθώς προσπαθούσε ακόμη να καταλάβει πώς να το προσεγγίσει. Ποιήματα διαγράφονταν, διορθώνονταν και γράφονταν από την αρχή. Μαζί τους ήρθαν αμφιβολίες και στιγμές ευαλωτότητας, που έδωσαν ζωή σε αυτό το βιβλίο. Επιπλέον, εξηγεί ότι στην ποίηση οι συγγραφείς δεν συμπεριλαμβάνουν απλώς τις ιδέες τους για ορισμένα θέματα, αλλά αφήνουν επίσης κομμάτια του εαυτού τους μέσα στο έργο τους, κομμάτια που παραμένουν για πάντα. Ωστόσο, για εκείνη αυτό αποτέλεσε μεγάλη πρόκληση, καθώς δίσταζε να αποκαλύψει βαθιές προσωπικές εμπειρίες από τη ζωή της στο κοινό και έτσι δυσκολεύτηκε να βρει τα ιδανικά ποιήματα για να συμπεριλάβει στο βιβλίο της.",
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

  "4": {
    title: "Two Years of Making a Difference",
    greekTitle: "Δύο Χρόνια Κάνοντας τη Διαφόρα",
    category: "Volunteering",
    greekCategory: "Εθελοντισμός",
    person: "Yeabsera, UNICEF volunteer",
    greekPerson: "Yeabsera, Εθελόντρια της UNICEF",
    date: "October 25, 2026",
    greekDate: "25 Οκτωβρίου 2026",
    author: "Asterios Vesiropoulos",
    image: "/stories/yea.jpg",

    introduction:
      "For most of the time, Yeabsera followed a familiar routine: attending classes and studying. She wanted to do something more. Something through which she could make meaningful contributions to her community. An opportunity came right in her second year of university.",

    greekIntroduction:
      "Για ένα μεγάλο διάστημα, η Yeabsera ακολουθούσε μια απλή καθημερινή ρουτίνα: παρακολουθούσε μαθήματα και διάβαζε. Ήθελε, όμως, να κάνει κάτι περισσότερο. Κάτι μέσα από το οποίο θα μπορούσε να προσφέρει ουσιαστικά στην κοινότητά της. Μια τέτοια ευκαιρία παρουσιάστηκε στο δεύτερο έτος των πανεπιστημιακών της σπουδών.",

    paragraphs: [
      "Having parents who were refugees encouraged her to explore ways to help her community and people around her. She was introduced to the UNICEF volunteering program through her university, where she would have the ability to work on projects to help children in her community with their education and well-being.",

      "Back in her high school years, her school urged students to do community service that allowed her to find opportunities and take part in volunteering projects in schools and orphanages. Over time this meaningful engagement she had with her community encouraged her more to continue doing what she found fulfilling.",

      "Her UNICEF journey began last year with the Literacy Program, where she worked with children from underprivileged households to help them with their studies. Through free clubs open to any child facing barriers to educational access, she taught math, English, and organized recreational hours, allowing children to unwind and connect with each other.",

      "What she still carries with her is the love and kindness she received back from the children. She shared with us a sweet moment: when she returned for the third time, children recognized her and ran up to hug her. Ultimately, that small moment made her realize that her work had made an impact.",

      "This year, Yeabsera serves as treasurer for UNICEF, contributing to the organization’s financial and budgeting processes. Her role also involves attending events alongside the UNICEF board and UNICEF South Africa, supporting initiatives through financial coordination and helping ensure that the necessary resources and supplies are available for their implementation.",

      "Over these two years, she has been able to make a difference to people around her and learn about different stories and perspectives that have helped her understand her identity and the world better. When she was asked what she would say to herself before starting this journey, she shared: “Anything is possible! You do not have to be the most experienced in this field. What you need is the heart and to care for others.” Perhaps most significantly, she explains that volunteering does not always have to be something so planned; everyone can help in their own ways and with the resources available to them to build a greater future.",
    ],

    greekParagraphs: [
      "Το γεγονός ότι οι γονείς της ήταν πρόσφυγες την παρακίνησε να αναζητήσει τρόπους να βοηθήσει την κοινότητά της και τους ανθρώπους γύρω της. Μέσω του πανεπιστημίου της, ήρθε σε επαφή με το πρόγραμμα εθελοντισμού της UNICEF, μέσα από το οποίο θα μπορούσε να συμμετέχει σε δράσεις που στοχεύουν στην υποστήριξη της εκπαίδευσης και της ευημερίας των παιδιών της κοινότητάς της.",

      "Κατά τη διάρκεια των σχολικών της χρόνων, το σχολείο της παρότρυνε τους μαθητές να συνεισφέρουν με οποιονδήποτε τρόπο στην κοινότητά τους, πράγμα που της έδωσε τη δυνατότητα να ανακαλύψει ευκαιρίες και να συμμετάσχει σε εθελοντικές δράσεις σε σχολεία και ορφανοτροφεία. Με την πάροδο του χρόνου, αυτή η ουσιαστική ενασχόληση με την κοινότητά της την ενθάρρυνε να συνεχίσει να προσφέρει και να ασχολείται με κάτι που της έδινε πραγματική ικανοποίηση.",

      "Η πορεία της στη UNICEF ξεκίνησε πέρυσι, μέσα από το Literacy Program, όπου εργάστηκε με παιδιά από οικογένειες που αντιμετωπίζουν κοινωνικές και οικονομικές δυσκολίες, βοηθώντας τα στα μαθήματά τους. Συγκεκριμένα, μέσα από δωρεάν εκπαιδευτικούς ομίλους, ανοιχτούς σε κάθε παιδί που αντιμετώπιζε εμπόδια στην πρόσβαση στην εκπαίδευση, δίδασκε μαθηματικά και αγγλικά, ενώ παράλληλα οργάνωνε ψυχαγωγικές δραστηριότητες που έδιναν στα παιδιά την ευκαιρία να χαλαρώσουν και να επικοινωνήσουν μεταξύ τους.",

      "Αυτό που εξακολουθεί να κρατάει μέσα της είναι η αγάπη και η καλοσύνη που έλαβε από τα ίδια τα παιδιά. Μοιράστηκε μαζί μας μια ιδιαίτερα γλυκιά στιγμή: όταν επέστρεψε για τρίτη φορά, τα παιδιά την αναγνώρισαν και έτρεξαν προς το μέρος της για να την αγκαλιάσουν. Αυτή η μικρή στιγμή τής έδωσε να καταλάβει ότι η προσφορά της είχε αντίκτυπο και ότι είχε καταφέρει να βοηθήσει πραγματικά κάποιον.",

      "Φέτος, η Yeabsera έχει αναλάβει τον ρόλο της treasurer στη UNICEF, συμβάλλοντας στις οικονομικές διαδικασίες του οργανισμού. Στις αρμοδιότητές της περιλαμβάνεται επίσης η συμμετοχή σε εκδηλώσεις μαζί με το διοικητικό συμβούλιο της UNICEF και τη UNICEF Νότιας Αφρικής. Μέσα από τον οικονομικό συντονισμό, υποστηρίζει διάφορες πρωτοβουλίες και συμβάλλει στη διασφάλιση των απαραίτητων πόρων και προμηθειών για την υλοποίησή τους.",

      "Κατά τη διάρκεια αυτών των δύο χρόνων, έχει καταφέρει όχι μόνο να κάνει τη διαφορά στη ζωή των ανθρώπων γύρω της, αλλά και να γνωρίσει διαφορετικές ιστορίες και οπτικές που τη βοήθησαν να κατανοήσει καλύτερα τόσο την ταυτότητά της όσο και τον κόσμο. Όταν τη ρωτήσαμε τι θα έλεγε στον εαυτό της πριν ξεκινήσει αυτό το ταξίδι, απάντησε: «Τα πάντα είναι δυνατά! Δεν χρειάζεται να έχεις τη μεγαλύτερη εμπειρία στον συγκεκριμένο τομέα. Αυτό που χρειάζεσαι είναι καρδιά και πραγματικό ενδιαφέρον για τους άλλους». Ίσως το σημαντικότερο μήνυμα που θέλει να μεταδώσει είναι ότι ο εθελοντισμός δεν χρειάζεται πάντα να είναι κάτι τόσο οργανωμένο ή προσχεδιασμένο. Ο καθένας μπορεί να προσφέρει με τον δικό του τρόπο και με τα μέσα που διαθέτει στην κοινότητά του, χτίζοντας έτσι ένα καλύτερο μέλλον.",
    ],

    questions: [
      "Do you volunteer? Why or why not?",
      "What is one way you could contribute to your community?",
    ],

    greekQuestions: [
      "Κάνεις εθελοντισμό; Γιατί ή γιατί όχι;",
      "Ποιος είναι ένας τρόπος που μπορείς να συνεισφέρεις στην κοινότητά σου;",
    ],
  },

  "5": {
    title: "A Second Chance, A Shared Purpose",
    greekTitle: "Μια δεύτερη ευκαιρία, ένας κοινός σκοπός",
    category: "Life Experiences · Social Impact",
    greekCategory: "Εμπειρίες ζωής · Κοινωνικός αντίκτυπος",
    person: "Nancy Bosnoian, Columbia Student & Nonprofit Founder",
    greekPerson: "Nancy Bosnoian, Φοιτήτρια στο Columbia & Ιδρύτρια Μη Κερδοσκοπικού Οργανισμού",
    date: "November 17, 2026",
    greekDate: "17 Νοεμβρίου 2026",
    author: "Asterios Vesiropoulos",
    image: "/stories/nancy.jpg",

    introduction:
      "People saw a successful Columbia student, a nonprofit founder, and a keynote speaker. They did not see the journey of navigating the realities of war and the challenges of adapting to a new life that stood behind her dreams.",

    greekIntroduction:
      "Οι άνθρωποι έβλεπαν μια επιτυχημένη φοιτήτρια του Πανεπιστημίου Columbia, την ιδρύτρια ενός μη κερδοσκοπικού οργανισμού και μια κεντρική ομιλήτρια. Δεν έβλεπαν, όμως, την πορεία της μέσα από τις σκληρές πραγματικότητες του πολέμου και τις δυσκολίες της προσαρμογής σε μια νέα ζωή, οι οποίες βρίσκονταν πίσω από τα όνειρά της.",

    paragraphs: [
      "Looking back on her childhood in Aleppo, Syria, Nancy brings to her mind memories of warmth and little joys such as drinking her favourite tea before going to bed. She especially remembers her loving and devoted family, who made her feel happy, as well as the love she felt for her country. Beyond her cherished memories, her personality offers another glimpse into her past. Nancy was a shy child who would hide her birthday invitations so that she did not have to interact with other children, a trait that was very different compared to her present self. She further shares that her family tried to encourage her to socialize by taking her to parties or signing her up for activities she was not eager to do.",

      "Then came a period in her life that brought an entirely different set of experiences. Her family had planned a 15-day trip to Los Angeles, including a visit to the magical Disneyland: a trip she had dreamt of for years as a child. What was meant to be the end of a long-awaited holiday became the beginning of an entirely different chapter. Nancy's parents were informed that the Aleppo airport had shut down, while back home, her grandparents and friends were facing difficulties and power outages for a week. That is when her father told them, “We cannot go back.” Those words marked the beginning of an unfamiliar life, 7,344 miles away from everything she had known. Over time, some of those difficult memories have become blurred. Nancy believes this may be her mind's way of protecting her.",

      "Another challenge she faced was adapting to a foreign environment and encountering a culture distinct from her own. She is especially grateful to her mother, who managed to navigate the struggles of displacement while making sure her kids did not know about the cruel events taking place back in their home country. Nancy was familiar with the English language, having learned it at her French school and from her nanny, who would spend time teaching her. However, her mother did not know the language. The sense of cultural dissonance did not disappear, making it hard even to run small errands around her new neighborhood, she recalls.",

      "She candidly admits that she did not know how to rebuild a sense of belonging in the States, but at the same time she did not want to give up because a second chance at life had been given to her. Perhaps most significantly, for her, the effects of war never simply disappeared. To this day, Nancy is still adapting to a culture while being separated from her family and friends, a situation she never really chose and would not have experienced if she had not been forced to leave.",

      "After seven years, she felt that Los Angeles had begun to feel like home, a place where she could pursue her dreams and fight for a better world than the one she had to witness. At just 13, she understood that she wanted to make the most of the second chance at life she had been given. It was really important to her to set a goal of making a change in this world and to continuously fight for it.",

      "Long before she even knew what a university was, Nancy had already set her sights on one. She recalls overhearing her cousins discussing the best university in the world. When she heard the name Harvard, she remembers saying to herself, “If this is the best school, then I want to graduate from it.” Although she attended Columbia rather than Harvard, Nancy never lost sight of the importance of aiming high in order to get the best education and have the knowledge to change the world around her. As she puts it, “If you shoot for the moon, you land on the stars.”",

      "Beyond the academic ambitions themselves, navigating an unfamiliar educational system presented its own challenges. She recalls spending considerable time trying to understand how the system worked and where to find opportunities. She vividly remembers reaching out to different clubs and organizations by email, asking whether she could become involved, even when she was unfamiliar with them. These experiences also became lessons she would later pass on to her younger sister, helping her navigate opportunities that Nancy herself had once struggled to discover. One of the most important lessons she took away from this experience was the value of asking for help and guidance when she felt uncertain or did not know how to approach something. She came to understand that the harder you work, the luckier you get.",

      "At Columbia University, Nancy understood what “knowledge is power” truly meant, both through her professors and through her experiences there. She has witnessed Nobel Prize laureates continuing their research, a reminder that the pursuit of knowledge never truly ends. For her, going to Columbia does not mean that she will stop gaining knowledge from people and experiences in the future or stop becoming better.",

      "Her desire to make a difference took shape through the creation of “End No Sleep”, a nonprofit dedicated to providing young people around the world with accessible care and resources to support their mental health, while addressing one of its often-overlooked contributing factors: sleep deprivation. Nancy first shared her ideas with her friends, colleagues, and family members. It all started so simply by asking two friends if they wanted to join her new project. She also created a nine-slide PowerPoint presentation highlighting the benefits of sleep, which she wanted to present in local schools and organizations. With her own money, she hired an attorney, hoping to make End No Sleep a legally established organization. In 2023, she and her team transformed her initiative into a tech nonprofit with the help of artificial intelligence that could help thousands of young people worldwide. Today, End No Sleep mainly focuses on preventative healthcare because sleep plays a vital role in both mental and physical well-being.",

      "One of the nonprofit's main programs is an AI-powered chatbot, accessible free of charge through WhatsApp, which aims to make preventative healthcare resources available to young people worldwide. By answering a series of questions, users receive guidance through their sleep-related difficulties and access to relevant resources, including mental health exercises. Nancy emphasizes that, unlike many other AI chatbots, its guidance is reviewed by the organization's medical board, while users' data remains anonymous.",

      "Beyond this digital initiative, End No Sleep continues to provide schools with a digital sleep-health curriculum, raising awareness about the importance of sleep and its connection to overall well-being. A third area of its work involves advocacy. Through its international network of volunteers, the organization encourages young people to advocate for better sleep policies within their communities. This can begin with something as simple as approaching teachers about reducing excessive homework or encouraging schools to involve parents in creating an environment that supports students' sleep. Nancy also explains that, although policy change is not yet a central part of the organization's work, they hope to equip volunteers with the knowledge and resources to pursue it further.",

      "The biggest obstacles she encountered were funding problems but, mainly, taking the risk of building something very unfamiliar to her at just 19. She had to manage a great deal of the workload alone and initially found it difficult to delegate responsibilities in order to make this project meaningful and impactful. Another obstacle she faced was the self-doubt that made her uncertain of her own abilities. She recalls reaching out to nearly 100 people through cold emails, only to receive three or four responses. However, those few responses became the foundation of her first board, making her understand that seeking help can open doors that she might not otherwise have found.",

      "What Nancy finds fulfilling is knowing that she made the most of the second chance at life she was given by creating something that helps others. She shares that there have been moments when people have reached out to her to thank her for her help. Health issues are also something she has had to deal with in her life, so making the nonprofit's mission to support young people's well-being means a lot to her. As she explains, knowing that even one person has benefited from their work is enough to remind her why she started.",

      "Over the years, Nancy's work has received recognition from several institutions and organizations, including One Young World, Vital Voices, the Zurich Foundation, the Clinton Foundation, and the Western Union Foundation. This recognition serves as motivation for her and her team to keep building and developing their nonprofit every day, because, as mentioned, there are many challenges and pressures in the process. Another significant milestone in Nancy's journey was the invitation to Harvard, where she spoke as an inspirational panelist about her personal story and work. Having previously faced rejection from the university, being invited a few years later to share her story with its students became what she describes as a full-circle moment.",

      "From the very beginning of her journey, Nancy did not always hear encouraging advice for her dreams. To some people, her dreams seemed unrealistic because they judged her potential based on her image rather than recognizing the ambition in her eyes and her work ethic to achieve them. She used this underestimation as motivation, not to prove anyone wrong, but to continue pursuing her dreams. She explains that, throughout her life, her dreams never seemed impossible to her, and neither did her family think any different. “Be surrounded by people that make your dreams feel achievable and are curious about your passions and projects,” she advises. For Nancy, even a simple expression of interest in the work someone has put their heart into is truly special.",
    ],

    greekParagraphs: [
      "Ανατρέχοντας στα παιδικά της χρόνια στο Χαλέπι της Συρίας, η Nancy θυμάται στιγμές ζεστασιάς και μικρές χαρές, όπως το να πίνει το αγαπημένο της τσάι πριν πάει για ύπνο. Θυμάται ιδιαίτερα την αγαπημένη και αφοσιωμένη οικογένειά της, που την έκανε να νιώθει ευτυχισμένη, καθώς και την αγάπη που ένιωθε για την πατρίδα της. Πέρα από τις πολύτιμες αναμνήσεις της, η προσωπικότητά της προσφέρει μια ακόμη ματιά στο παρελθόν της. Η Nancy ήταν ένα ντροπαλό παιδί που έκρυβε τις προσκλήσεις για τα γενέθλια συμμαθητών της, ώστε να μην χρειάζεται να συναναστρέφεται με άλλα παιδιά, μια συμπεριφορά πολύ διαφορετική από τον σημερινό της χαρακτήρα. Αναφέρει επίσης ότι η οικογένειά της προσπαθούσε να την ενθαρρύνει να κοινωνικοποιηθεί, πηγαίνοντάς την σε πάρτι ή γράφοντάς την σε δραστηριότητες που η ίδια δεν ήταν ιδιαίτερα πρόθυμη να δοκιμάσει.",

      "Έπειτα ήρθε μια περίοδος στη ζωή της που έφερε εντελώς διαφορετικές εμπειρίες. Η οικογένειά της είχε προγραμματίσει ένα ταξίδι 15 ημερών στο Λος Άντζελες, το οποίο περιλάμβανε μια επίσκεψη στη μαγική Disneyland, ένα ταξίδι που ονειρευόταν να πραγματοποιήσει από παιδί. Αυτό που προοριζόταν να είναι το τέλος των πολυαναμενόμενων διακοπών της μετατράπηκε στην αρχή ενός εντελώς διαφορετικού κεφαλαίου. Οι γονείς της Nancy ενημερώθηκαν ότι το αεροδρόμιο του Χαλεπίου είχε κλείσει, ενώ πίσω στην πατρίδα της οι παππούδες και οι φίλοι της αντιμετώπιζαν δυσκολίες, μεταξύ των οποίων και διακοπές ρεύματος που διήρκεσαν μία εβδομάδα. Τότε ήταν που ο πατέρας της τούς είπε: «Δεν μπορούμε να επιστρέψουμε». Αυτά τα λόγια σηματοδότησαν την αρχή μιας άγνωστης ζωής, 7.344 μίλια μακριά από όλα όσα γνώριζε μέχρι τότε. Με την πάροδο του χρόνου, κάποιες από εκείνες τις δύσκολες αναμνήσεις έχουν αρχίσει να θολώνουν. Η Nancy πιστεύει ότι αυτό ίσως είναι ο τρόπος με τον οποίο το μυαλό της προσπαθεί να την προστατεύσει.",

      "Μία ακόμη πρόκληση που αντιμετώπισε ήταν η προσαρμογή σε ένα ξένο περιβάλλον και η επαφή με μια κουλτούρα διαφορετική από τη δική της. Είναι ιδιαίτερα ευγνώμων για τη μητέρα της, η οποία κατάφερε να διαχειριστεί τις δυσκολίες της αναγκαστικής μετανάστευσης, φροντίζοντας παράλληλα τα παιδιά της να μη μαθαίνουν για τα σκληρά γεγονότα που συνέβαιναν στην πατρίδα τους. Η Nancy γνώριζε ήδη την αγγλική γλώσσα, καθώς την είχε μάθει στο γαλλικό σχολείο της αλλά και από την νταντά της, η οποία αφιέρωνε χρόνο για να της τη διδάσκει. Η μητέρα της, ωστόσο, δεν γνώριζε τη γλώσσα. Όπως θυμάται, ακόμη και απλές καθημερινές υποχρεώσεις στη νέα της γειτονιά αποτελούσαν πρόκληση.",

      "Παραδέχεται με ειλικρίνεια ότι δεν γνώριζε πώς να ξαναχτίσει το αίσθημα του ανήκειν στις Ηνωμένες Πολιτείες. Παρ' όλα αυτά, δεν ήθελε να εγκαταλείψει την προσπάθεια, καθώς της είχε δοθεί μια δεύτερη ευκαιρία στη ζωή. Ίσως το σημαντικότερο είναι ότι, για εκείνη, οι επιπτώσεις του πολέμου δεν εξαφανίστηκαν ποτέ εντελώς. Μέχρι σήμερα, η Nancy συνεχίζει να προσαρμόζεται σε μια διαφορετική κουλτούρα, ενώ βρίσκεται μακριά από την οικογένεια και τους φίλους της, μια κατάσταση που δεν επέλεξε ποτέ πραγματικά και την οποία δεν θα είχε βιώσει εάν δεν είχε αναγκαστεί να φύγει.",

      "Ύστερα από επτά χρόνια, ένιωσε ότι το Λος Άντζελες είχε αρχίσει να γίνεται το σπίτι της, ένας τόπος από όπου μπορούσε να κυνηγήσει τα όνειρά της και να αγωνιστεί για έναν καλύτερο κόσμο από εκείνον που είχε αναγκαστεί να γνωρίσει. Σε ηλικία μόλις 13 ετών, συνειδητοποίησε ότι ήθελε να αξιοποιήσει στο έπακρο τη δεύτερη ευκαιρία στη ζωή που της είχε δοθεί. Ήταν ιδιαίτερα σημαντικό για εκείνη να θέσει ως στόχο να αλλάξει τον κόσμο και να συνεχίσει να αγωνίζεται για αυτόν τον σκοπό.",

      "Πολύ πριν ακόμη γνωρίζει τι είναι ένα πανεπιστήμιο, η Nancy είχε ήδη θέσει ως στόχο να φοιτήσει σε ένα από αυτά. Θυμάται να ακούει τυχαία τα ξαδέλφια της να συζητούν για το καλύτερο πανεπιστήμιο στον κόσμο. Όταν άκουσε το όνομα Harvard, θυμάται να λέει στον εαυτό της: «Αν αυτό είναι το καλύτερο πανεπιστήμιο, τότε θέλω να αποφοιτήσω από αυτό». Παρόλο που τελικά φοίτησε στο Columbia και όχι στο Harvard, η Nancy δεν έχασε ποτέ από τα μάτια της τη σημασία του να θέτει υψηλούς στόχους, προκειμένου να αποκτήσει την καλύτερη δυνατή εκπαίδευση και τις γνώσεις που θα της επιτρέψουν να αλλάξει τον κόσμο γύρω της. Όπως χαρακτηριστικά λέει: «Αν στοχεύεις για το φεγγάρι, θα καταλήξεις στα αστέρια».",

      "Πέρα από τις ίδιες τις ακαδημαϊκές της φιλοδοξίες, η προσπάθεια να προσανατολιστεί σε ένα άγνωστο εκπαιδευτικό σύστημα παρουσίαζε τις δικές της δυσκολίες. Θυμάται ότι αφιέρωσε αρκετό χρόνο προσπαθώντας να καταλάβει πώς λειτουργούσε το σύστημα και πού μπορούσε να βρει ευκαιρίες. Θυμάται έντονα να επικοινωνεί μέσω ηλεκτρονικού ταχυδρομείου με διάφορες λέσχες και οργανισμούς, ρωτώντας αν θα μπορούσε να συμμετάσχει σε αυτούς, ακόμη κι όταν δεν γνώριζε πολλά για τη δράση τους. Αυτές οι εμπειρίες αποτέλεσαν επίσης μαθήματα που αργότερα μετέφερε στη μικρότερη αδελφή της, βοηθώντας την να ανακαλύψει και να αξιοποιήσει ευκαιρίες τις οποίες η ίδια η Nancy είχε κάποτε δυσκολευτεί να εντοπίσει. Ένα από τα σημαντικότερα μαθήματα που αποκόμισε ήταν η αξία του να ζητά βοήθεια και καθοδήγηση όταν αισθάνεται αβέβαιη ή δεν γνωρίζει πώς να προσεγγίσει κάτι. Έτσι, συνειδητοποίησε ότι όσο πιο σκληρά δουλεύεις, τόσο πιο τυχερός γίνεσαι.",

      "Στο Πανεπιστήμιο Columbia, η Nancy κατάλαβε τι σημαίνει πραγματικά η φράση «η γνώση είναι δύναμη», τόσο μέσα από τους καθηγητές της όσο και μέσα από τις εμπειρίες της εκεί. Έχει δει από κοντά νομπελίστες να συνεχίζουν την έρευνά τους, γεγονός που της υπενθυμίζει ότι η αναζήτηση της γνώσης δεν τελειώνει ποτέ πραγματικά. Για εκείνη, η φοίτηση στο Columbia δεν σημαίνει ότι θα σταματήσει να αποκτά γνώσεις από τους ανθρώπους και τις εμπειρίες που θα συναντήσει στο μέλλον ή ότι θα σταματήσει να εξελίσσεται.",

      "Η επιθυμία της να κάνει τη διαφορά πήρε μορφή μέσα από τη δημιουργία του «End No Sleep», ενός μη κερδοσκοπικού οργανισμού που έχει ως στόχο να προσφέρει στους νέους σε όλο τον κόσμο προσβάσιμη φροντίδα και πόρους για την υποστήριξη της ψυχικής τους υγείας, αντιμετωπίζοντας παράλληλα έναν από τους παράγοντες που συχνά παραβλέπονται και μπορούν να συμβάλουν σε προβλήματα ψυχικής υγείας: τη στέρηση ύπνου. Αρχικά, η Nancy μοιράστηκε τις ιδέες της με φίλους, συνεργάτες και μέλη της οικογένειάς της. Όλα ξεκίνησαν τόσο απλά, με το να ρωτάει δύο φίλους της αν θα ήθελαν να συμμετάσχουν στο νέο της project. Δημιούργησε επίσης μια παρουσίαση PowerPoint εννέα διαφανειών, στην οποία ανέλυε τα οφέλη του ύπνου και την οποία ήθελε να παρουσιάσει σε τοπικά σχολεία και οργανισμούς. Χρησιμοποιώντας δικά της χρήματα, προσέλαβε έναν δικηγόρο, με την επιθυμία να αποκτήσει το End No Sleep επίσημη νομική υπόσταση. Το 2023, εκείνη και η ομάδα της μετέτρεψαν την πρωτοβουλία της σε έναν τεχνολογικό μη κερδοσκοπικό οργανισμό, αξιοποιώντας την τεχνητή νοημοσύνη, με στόχο να βοηθήσουν χιλιάδες νέους σε όλο τον κόσμο. Σήμερα, το End No Sleep επικεντρώνεται κυρίως στην προληπτική φροντίδα υγείας, καθώς ο ύπνος διαδραματίζει καθοριστικό ρόλο τόσο στην ψυχική όσο και στη σωματική ευεξία.",

      "Ένα από τα βασικά προγράμματα του οργανισμού είναι ένα chatbot τεχνητής νοημοσύνης, το οποίο είναι δωρεάν και προσβάσιμο μέσω WhatsApp και αποσκοπεί στο να προσφέρει σε νέους από όλο τον κόσμο πρόσβαση σε πόρους προληπτικής φροντίδας υγείας. Απαντώντας σε μια σειρά ερωτήσεων, οι χρήστες λαμβάνουν καθοδήγηση σχετικά με τις δυσκολίες που αντιμετωπίζουν με τον ύπνο, καθώς και πρόσβαση σε χρήσιμους πόρους, συμπεριλαμβανομένων ασκήσεων για την ψυχική υγεία. Η Nancy τονίζει ότι, σε αντίθεση με πολλά άλλα chatbot τεχνητής νοημοσύνης, η καθοδήγησή του ελέγχεται από την ιατρική επιτροπή του οργανισμού, ενώ τα δεδομένα των χρηστών παραμένουν ανώνυμα.",

      "Πέρα από αυτή την ψηφιακή πρωτοβουλία, το End No Sleep συνεχίζει να παρέχει στα σχολεία ένα ψηφιακό εκπαιδευτικό πρόγραμμα σχετικά με την υγεία του ύπνου, ενισχύοντας την ενημέρωση για τη σημασία του ύπνου και τη σύνδεσή του με τη συνολική ευεξία. Ένας τρίτος τομέας της δράσης του αφορά την προάσπιση και διεκδίκηση καλύτερων πολιτικών για τον ύπνο. Μέσα από το διεθνές δίκτυο εθελοντών του, ο οργανισμός ενθαρρύνει τους νέους να διεκδικούν καλύτερες πολιτικές για τον ύπνο στις κοινότητές τους. Αυτό μπορεί να ξεκινήσει από κάτι τόσο απλό όσο το να προσεγγίσουν τους καθηγητές τους και να συζητήσουν τη μείωση του υπερβολικού φόρτου σχολικών εργασιών ή να ενθαρρύνουν τα σχολεία να συμπεριλάβουν τους γονείς στη δημιουργία ενός περιβάλλοντος που υποστηρίζει καλύτερες συνήθειες ύπνου για τους μαθητές. Η Nancy εξηγεί επίσης ότι, παρόλο που η αλλαγή πολιτικών δεν αποτελεί ακόμη κεντρικό μέρος της δράσης του οργανισμού, στόχος τους είναι να εξοπλίσουν τους εθελοντές με τις απαραίτητες γνώσεις και τα κατάλληλα μέσα, ώστε να μπορέσουν να συνεχίσουν αυτή την προσπάθεια.",

      "Τα μεγαλύτερα εμπόδια που αντιμετώπισε ήταν οι δυσκολίες στη χρηματοδότηση και, κυρίως, το ρίσκο του να αναλάβει σε ηλικία μόλις 19 ετών κάτι εντελώς άγνωστο για την ίδια. Έπρεπε να διαχειριστεί μόνη της ένα μεγάλο μέρος του φόρτου εργασίας και αρχικά δυσκολεύτηκε να αναθέσει αρμοδιότητες σε άλλους, καθώς ήθελε να διασφαλίσει ότι το έργο αυτό θα είχε ουσιαστικό αντίκτυπο. Ένα ακόμη εμπόδιο ήταν η αμφιβολία για τον εαυτό της, η οποία την έκανε να αμφισβητεί τις ίδιες της τις δυνατότητες. Θυμάται ότι έστειλε σχεδόν 100 ηλεκτρονικά μηνύματα σε ανθρώπους με τους οποίους δεν είχε προηγούμενη επικοινωνία, λαμβάνοντας μόλις τρεις ή τέσσερις απαντήσεις. Ωστόσο, αυτές οι λίγες απαντήσεις αποτέλεσαν τη βάση για τη δημιουργία της πρώτης της ομάδας, κάνοντάς την να καταλάβει ότι το να ζητά κανείς βοήθεια μπορεί να ανοίξει πόρτες και να δημιουργήσει ευκαιρίες που ίσως να μην είχε βρει διαφορετικά.",

      "Για τη Nancy, αυτό που έχει τη μεγαλύτερη σημασία είναι ότι κατάφερε να αξιοποιήσει τη δεύτερη ευκαιρία στη ζωή που της δόθηκε, δημιουργώντας κάτι που βοηθά άλλους ανθρώπους. Μοιράζεται ότι υπήρξαν στιγμές κατά τις οποίες άνθρωποι επικοινώνησαν μαζί της για να την ευχαριστήσουν για τη βοήθειά της. Η ίδια έχει επίσης αντιμετωπίσει προβλήματα υγείας στη ζωή της, γεγονός που κάνει την αποστολή του οργανισμού να υποστηρίζει την ευημερία των νέων ακόμη πιο σημαντική για εκείνη. Όπως εξηγεί, η γνώση ότι έστω και ένας άνθρωπος έχει ωφεληθεί από τη δράση τους είναι αρκετή για να της υπενθυμίζει τον λόγο για τον οποίο ξεκίνησε.",

      "Με την πάροδο των χρόνων, το έργο της Nancy έχει λάβει αναγνώριση από διάφορα ιδρύματα και οργανισμούς, μεταξύ των οποίων οι One Young World, Vital Voices, Zurich Foundation, Clinton Foundation και Western Union Foundation. Αυτή η αναγνώριση αποτελεί για την ίδια και την ομάδα της ένα σημαντικό κίνητρο για να συνεχίσουν να αναπτύσσουν και να εξελίσσουν τον οργανισμό τους καθημερινά, καθώς η διαδικασία συνοδεύεται από πολλές δυσκολίες και πιέσεις. Ένα ακόμη σημαντικό σημείο στην πορεία της ήταν η πρόσκλησή της στο Harvard, όπου μίλησε σε ένα πάνελ για την προσωπική της ιστορία και το έργο της. Έχοντας προηγουμένως απορριφθεί από το ίδιο πανεπιστήμιο, το γεγονός ότι λίγα χρόνια αργότερα βρέθηκε να μοιράζεται την ιστορία της με τους φοιτητές του είχε για εκείνη έναν ιδιαίτερο συμβολισμό, μια στιγμή που η ίδια περιγράφει ως μια εμπειρία που ολοκλήρωσε έναν κύκλο.",

      "Από την αρχή της πορείας της, η Nancy δεν άκουγε πάντοτε ενθαρρυντικά λόγια σχετικά με τα όνειρά της. Για κάποιους ανθρώπους, τα όνειρά της φαίνονταν μη ρεαλιστικά, καθώς έκριναν τις δυνατότητές της με βάση την εικόνα που είχαν σχηματίσει για εκείνη, αντί να αναγνωρίσουν τη φιλοδοξία της και την εργατικότητα που απαιτούνταν για να τα πετύχει. Η ίδια μετέτρεψε αυτή την υποτίμηση σε κίνητρο, όχι για να αποδείξει σε κανέναν ότι έκανε λάθος, αλλά για να συνεχίσει να κυνηγά τα όνειρά της. Εξηγεί ότι, σε όλη της τη ζωή, τα όνειρά της δεν της φάνηκαν ποτέ ανέφικτα και ούτε η οικογένειά της πίστευε κάτι διαφορετικό. «Να περιβάλλεστε από ανθρώπους που κάνουν τα όνειρά σας να μοιάζουν εφικτά και δείχνουν ενδιαφέρον για τις ασχολίες σας και τα σχέδιά σας», συμβουλεύει η ίδια. Για τη Nancy, ακόμη και μια απλή εκδήλωση ενδιαφέροντος για τη δουλειά στην οποία κάποιος έχει βάλει την ψυχή του είναι πραγματικά ξεχωριστή.",
    ],

    questions: [
      "When others consider our dreams unrealistic, what gives us the courage to keep pursuing them?",
      "How can the challenges we face in life inspire us to create positive change for others?",
    ],

    greekQuestions: [
      "Όταν οι άλλοι θεωρούν τα όνειρά μας ανέφικτα, τι είναι αυτό που μας δίνει το θάρρος να συνεχίσουμε να τα κυνηγάμε;",
      "Πώς μπορούν οι δυσκολίες που αντιμετωπίζουμε στη ζωή να μας εμπνεύσουν να συμβάλλουμε στη δημιουργία θετικής αλλαγής για τους άλλους;",
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
  unoptimized
    src={story.image}
    alt={
      isEnglish
        ? story.title
        : story.greekTitle
    }
    width={1200}
    height={800}
    priority
    sizes="(max-width: 768px) 100vw, 900px"
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
          ).map((paragraph, index) => {
            const isPoem =
              story === stories["3"] && index === 3;

            return (
              <p
                key={index}
                className={
                  isPoem ? "story-poem" : undefined
                }
              >
                {paragraph}
              </p>
            );
          })}

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
