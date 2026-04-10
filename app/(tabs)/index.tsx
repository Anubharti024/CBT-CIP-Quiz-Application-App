import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import questionBank from "../data/questionBank";
import styles from "../styles/styles";
const successImg = require("../../assets/images/congratulation.png");

const QUIZ_TIME = 10;

type Question = {
  question: string;
  options: string[];
  correctAnswer: number;
};

export default function HomeScreen() {
  const [screen, setScreen] = useState<"config" | "quiz" | "result">("config");

  const [category, setCategory] = useState<string>("Programming");
  const [questionLimit, setQuestionLimit] = useState<number>(5);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [history, setHistory] = useState<number[]>([]);

  const [score, setScore] = useState<number>(0);
  const [time, setTime] = useState<number>(QUIZ_TIME);

  const [selected, setSelected] = useState<number | null>(null);
  const [showNext, setShowNext] = useState<boolean>(false);

  // ================= TIMER =================
  useEffect(() => {
    if (screen !== "quiz") return;

    if (time === 0) {
      setShowNext(true);
      return;
    }

    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time, screen]);

  // ================= GET RANDOM QUESTION =================
  const getRandomQuestion = (): Question | null => {
    const categoryData = questionBank.find(
      (c) => c.category.toLowerCase() === category.toLowerCase()
    );

    const allQuestions: Question[] = categoryData?.questions || [];

    if (history.length >= Math.min(questionLimit, allQuestions.length)) {
      setScreen("result");
      return null;
    }

    const available = allQuestions.filter(
      (_, i) => !history.includes(i)
    );

    const random =
      available[Math.floor(Math.random() * available.length)];

    const originalIndex = allQuestions.indexOf(random);

    setHistory((prev) => [...prev, originalIndex]);

    return random;
  };

  // ================= LOAD QUESTION =================
  const loadQuestion = () => {
    const q = getRandomQuestion();
    if (!q) return;

    setQuestions([q]);
    setSelected(null);
    setShowNext(false);
    setTime(QUIZ_TIME);
  };

  // ================= START QUIZ =================
  const startQuiz = () => {
    setScreen("quiz");
    setScore(0);
    setHistory([]);
    loadQuestion();
  };

  // ================= HANDLE ANSWER =================
  const handleAnswer = (i: number) => {
    if (showNext) return;

    const correctIndex = questions[0].correctAnswer;

    setSelected(i);
    setShowNext(true);

    if (i === correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  // ================= NEXT =================
  const next = () => {
    loadQuestion();
  };

  // ================= RESET =================
  const resetQuiz = () => {
    setScreen("config");
    setScore(0);
    setHistory([]);
    setSelected(null);
    setShowNext(false);
    setTime(QUIZ_TIME);
  };

  // ================= UI =================

  // -------- CONFIG SCREEN --------
  if (screen === "config") {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Quiz Application</Text>

          {/* CATEGORY */}
          <Text style={styles.categoryText}>Select Category</Text>
          {["Programming", "General-Knowledge", "Sports", "Entertainment"].map(
            (cat) => (
              <TouchableOpacity
                key={cat}
                style={[
                  styles.option,
                  category === cat && { backgroundColor: "#1d7b72" },
                ]}
                onPress={() => setCategory(cat)}
              >
                <Text style={styles.optionText}>{cat}</Text>
              </TouchableOpacity>
            )
          )}

          {/* QUESTION COUNT */}
          <Text style={styles.categoryText}>Select Questions</Text>
          {[5, 10, 15].map((num) => (
            <TouchableOpacity
              key={num}
              style={[
                styles.option,
                questionLimit === num && { backgroundColor: "#56691a" },
              ]}
              onPress={() => setQuestionLimit(num)}
            >
              <Text style={styles.optionText}>{num} Questions</Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity style={styles.button} onPress={startQuiz}>
            <Text style={styles.buttonText}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // -------- QUIZ SCREEN --------
  if (screen === "quiz") {
    const q = questions[0];
    if (!q) return null;

    return (
      <View style={styles.container}>
        <View style={styles.card}>

          {/* TIMER */}
          <Text style={[styles.timer, time <= 3 && { color: "red" }]}>
            {time}s
          </Text>

          {/* PROGRESS */}
          <Text style={styles.progressText}>
            {history.length} / {questionLimit}
          </Text>

          <View style={styles.progressBar}>
            <View
              style={{
                height: 8,
                width: `${(history.length / questionLimit) * 100}%`,
                backgroundColor: "#7c3aed",
                borderRadius: 10,
              }}
            />
          </View>

          {/* QUESTION */}
          <Text style={styles.title}>{q.question}</Text>

          {/* OPTIONS */}
          {q.options.map((opt, i) => {
            const correctIndex = q.correctAnswer;

            const style = [
              styles.option,
              showNext && i === correctIndex ? styles.correct : null,
              showNext &&
                i === selected &&
                i !== correctIndex
                ? styles.incorrect
                : null,
            ].filter(Boolean);

            return (
              <TouchableOpacity
                key={i}
                style={style}
                onPress={() => handleAnswer(i)}
                disabled={showNext}
              >
                <Text style={styles.optionText}>{opt}</Text>
              </TouchableOpacity>
            );
          })}

          {/* NEXT BUTTON */}
          {showNext && (
            <TouchableOpacity style={styles.button} onPress={next}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }

  // -------- RESULT SCREEN --------
  if (screen === "result") {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={successImg}
            style={styles.resultImage}
            resizeMode="contain"
          />
          <Text style={styles.title}>Quiz Completed 🎉</Text>

          <Text style={styles.optionText}>
            Score: {score} / {questionLimit}
          </Text>

          <TouchableOpacity style={styles.button} onPress={resetQuiz}>
            <Text style={styles.buttonText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}