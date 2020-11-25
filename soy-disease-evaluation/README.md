# Soy Disease Evaluation

In this project I used dataset provide by Fernando Amaral, this dataset contains 35 attributes e 1 class that indicates a kind of disease each soy plant has.

To produce the models I run 3 different classification algorithms: Support Vector Machine, Naive Bayes, and Random Forest. For each test I selected some attributes using the attribute selector ExtraTreesClassifier but for my surprise the Random Forest has a better accuracy using all 35 attributes.

## Necessary imports:
import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.ensemble import ExtraTreesClassifier
from sklearn.svm import SVC
from sklearn.metrics import confusion_matrix, accuracy_score
from sklearn.naive_bayes import GaussianNB
from sklearn.ensemble import RandomForestClassifier

