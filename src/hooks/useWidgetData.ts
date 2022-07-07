import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { IWidgetData, WidgetType } from "../shared/types";

export const useWidgetData = 0;
